import type { Locale } from '../lib/i18n';

export const site = {
  name: 'Tamareel',
  origin: 'https://tamareel.com',
  appOrigin: 'https://app.tamareel.com',
  supportEmail: 'support@tamareel.com',
  copyright: `© ${new Date().getFullYear()} Tamareel. All rights reserved.`,
} as const;

export function getSignupUrl(locale: Locale) {
  return `${site.appOrigin}/signup?lang=${locale}`;
}
