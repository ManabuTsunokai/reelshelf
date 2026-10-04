export type Locale = 'ja' | 'en';

export const otherLocale = (locale: Locale): Locale => locale === 'ja' ? 'en' : 'ja';

export function localizedPath(locale: Locale, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ja') return normalized;
  return normalized === '/' ? '/en/' : `/en${normalized}`;
}

export function slugFromId(id: string) {
  return id.split('/').at(-1) ?? id;
}

export const ui = {
  ja: {
    home: 'ホーム',
    help: 'ヘルプ',
    blog: 'ブログ',
    features: 'できること',
    howItWorks: '使い方',
    getStarted: 'はじめる',
    learnMore: '詳しく見る',
    language: 'English',
    navLabel: 'メインメニュー',
    homeLabel: 'Tamareel ホーム',
    terms: '利用規約',
    privacy: 'プライバシーポリシー',
    commercial: '特定商取引法に基づく表記',
    contact: 'お問い合わせ',
    helpTitle: 'ヘルプセンター',
    helpDescription: 'Tamareelの使い方、トライアル、プランについてのヘルプです。',
    helpLead: 'Tamareelの利用方法、トライアル、プランについてご案内します。',
    blogTitle: '動画を楽しむためのヒント',
    blogDescription: '大切な動画の保存や整理、再生、編集など、動画をもっと身近に楽しむための情報を紹介します。',
    readArticle: '記事を読む',
    updated: '最終更新日',
    writtenBy: '執筆',
    publishedAndUpdated: '公開日・最終更新日',
  },
  en: {
    home: 'Home',
    help: 'Help',
    blog: 'Blog',
    features: 'Features',
    howItWorks: 'How it works',
    getStarted: 'Get started',
    learnMore: 'Learn more',
    language: '日本語',
    navLabel: 'Main navigation',
    homeLabel: 'Tamareel home',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    commercial: 'Commercial Disclosure',
    contact: 'Contact',
    helpTitle: 'Help Center',
    helpDescription: 'Help for using Tamareel, including trials and plans.',
    helpLead: 'Find guidance for using Tamareel, including trials and plans.',
    blogTitle: 'Tips for enjoying your videos',
    blogDescription: 'Learn how to store, organize, watch, and edit the videos that matter to you, with practical tips for enjoying them more often.',
    readArticle: 'Read article',
    updated: 'Last updated',
    writtenBy: 'By',
    publishedAndUpdated: 'Published and updated',
  },
} as const;

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: locale === 'ja' ? 'numeric' : 'long',
    day: 'numeric',
  }).format(date);
}
