import { SendEmailCommand, SESv2Client } from '@aws-sdk/client-sesv2'

const sesClient = new SESv2Client({})

const MAX_REQUEST_BYTES = 10_000
const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5_000
const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const CATEGORY_LABELS = {
  question: {
    ja: 'サービスについての質問',
    en: 'Question about the service',
  },
  feature_request: {
    ja: '機能の要望',
    en: 'Feature request',
  },
  bug_report: {
    ja: '不具合の報告',
    en: 'Report a problem',
  },
  billing: {
    ja: '料金・契約について',
    en: 'Pricing or subscription',
  },
  other: {
    ja: 'その他',
    en: 'Other',
  },
}

// 現在のフォームが送る翻訳済みラベルと、将来使用する安定したコードの
// どちらも受け付ける。
const CATEGORY_ALIASES = Object.fromEntries(
  Object.entries(CATEGORY_LABELS).flatMap(([code, labels]) =>
    Object.values(labels).map((label) => [label, code]),
  ),
)

class RequestValidationError extends Error {}
class ConfigurationError extends Error {}

function response(statusCode, payload = null) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
    body: payload === null ? '' : JSON.stringify(payload),
  }
}

function requestMethod(event) {
  return String(
    event?.requestContext?.http?.method ?? event?.httpMethod ?? 'POST',
  ).toUpperCase()
}

function decodeBase64(value) {
  const normalized = value.replace(/\s/g, '')
  const isValid =
    normalized.length % 4 === 0 &&
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
      normalized,
    )

  if (!isValid) {
    throw new RequestValidationError('invalid_body')
  }
  return Buffer.from(normalized, 'base64')
}

function parseBody(event) {
  const body = event?.body ?? event

  if (body && typeof body === 'object' && !Array.isArray(body)) {
    if (Buffer.byteLength(JSON.stringify(body), 'utf8') > MAX_REQUEST_BYTES) {
      throw new RequestValidationError('request_too_large')
    }
    return body
  }

  if (typeof body !== 'string') {
    throw new RequestValidationError('invalid_body')
  }

  const raw = event?.isBase64Encoded
    ? decodeBase64(body)
    : Buffer.from(body, 'utf8')

  if (raw.byteLength > MAX_REQUEST_BYTES) {
    throw new RequestValidationError('request_too_large')
  }

  try {
    const parsed = JSON.parse(raw.toString('utf8'))
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new RequestValidationError('invalid_body')
    }
    return parsed
  } catch (error) {
    if (error instanceof RequestValidationError) {
      throw error
    }
    throw new RequestValidationError('invalid_json')
  }
}

function requiredString(data, field, maxLength) {
  const value = data[field]
  if (typeof value !== 'string') {
    throw new RequestValidationError(`invalid_${field}`)
  }

  const normalized = value.trim()
  if (!normalized || normalized.length > maxLength) {
    throw new RequestValidationError(`invalid_${field}`)
  }
  return normalized
}

function validateRequest(data) {
  const locale = String(data.locale ?? 'ja').toLowerCase()
  if (locale !== 'ja' && locale !== 'en') {
    throw new RequestValidationError('invalid_locale')
  }

  const categoryValue = requiredString(data, 'category', 100)
  const category = CATEGORY_ALIASES[categoryValue] ?? categoryValue
  if (!Object.hasOwn(CATEGORY_LABELS, category)) {
    throw new RequestValidationError('invalid_category')
  }

  if (data.name !== undefined && typeof data.name !== 'string') {
    throw new RequestValidationError('invalid_name')
  }
  const name = String(data.name ?? '').trim()
  if (name.length > MAX_NAME_LENGTH) {
    throw new RequestValidationError('invalid_name')
  }

  const email = requiredString(data, 'email', 254)
  if (email.includes('\r') || email.includes('\n') || !EMAIL_PATTERN.test(email)) {
    throw new RequestValidationError('invalid_email')
  }

  const message = requiredString(data, 'message', MAX_MESSAGE_LENGTH)
  if (![true, 1, 'true', 'on'].includes(data.privacy)) {
    throw new RequestValidationError('privacy_required')
  }

  return { locale, category, name, email, message }
}

function sesConfiguration() {
  const sender = String(process.env.SES_FROM ?? '').trim()
  const recipients = String(process.env.SES_TO ?? '')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean)

  if (!sender || recipients.length === 0) {
    throw new ConfigurationError('SES_FROM and SES_TO must be configured')
  }
  return { sender, recipients }
}

function emailBody(contact, requestId) {
  const category = CATEGORY_LABELS[contact.category][contact.locale]
  const name = contact.name || '（未入力）'

  return [
    'Tamareelのお問い合わせフォームからメッセージを受信しました。',
    '',
    `問い合わせID: ${requestId}`,
    `言語: ${contact.locale}`,
    `種別: ${category}`,
    `お名前: ${name}`,
    `メールアドレス: ${contact.email}`,
    '',
    'お問い合わせ内容:',
    contact.message,
  ].join('\n')
}

async function sendEmail(contact, requestId) {
  const { sender, recipients } = sesConfiguration()
  const category = CATEGORY_LABELS[contact.category][contact.locale]

  const result = await sesClient.send(
    new SendEmailCommand({
      FromEmailAddress: sender,
      Destination: { ToAddresses: recipients },
      ReplyToAddresses: [contact.email],
      Content: {
        Simple: {
          Subject: {
            Data: `[Tamareelお問い合わせ] ${category} (${requestId})`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: emailBody(contact, requestId),
              Charset: 'UTF-8',
            },
          },
        },
      },
    }),
  )

  return result.MessageId ?? ''
}

export const handler = async (event, context) => {
  const method = requestMethod(event)
  if (method === 'OPTIONS') {
    return response(204)
  }
  if (method !== 'POST') {
    return response(405, { detail: 'method_not_allowed' })
  }

  const requestId = String(
    context?.awsRequestId ?? event?.requestContext?.requestId ?? 'unknown',
  )

  try {
    const data = parseBody(event)

    // Botが埋めやすい非表示フィールド。通常の送信と同じレスポンスを返し、
    // メールは送らない。
    if (data.website) {
      console.info('Contact request discarded by honeypot', { requestId })
      return response(202, { detail: 'accepted' })
    }

    const contact = validateRequest(data)
    const messageId = await sendEmail(contact, requestId)

    console.info('Contact email accepted', { requestId, sesMessageId: messageId })
    return response(202, { detail: 'accepted', requestId })
  } catch (error) {
    if (error instanceof RequestValidationError) {
      return response(400, { detail: error.message })
    }

    if (error instanceof ConfigurationError) {
      console.error('Contact form SES configuration error', { requestId })
      return response(500, { detail: 'service_unavailable' })
    }

    console.error('Contact form SES send failed', {
      requestId,
      errorName: error instanceof Error ? error.name : 'UnknownError',
    })
    return response(503, { detail: 'service_unavailable' })
  }
}
