import type { ImageMetadata } from 'astro';
import type { Locale } from '../lib/i18n';
import enMainImage from '../assets/images/en/main.png';
import enScreenEditImage from '../assets/images/en/screen_edit.png';
import jaMainImage from '../assets/images/ja/main.png';
import jaScreenEditImage from '../assets/images/ja/screen_edit.png';

export type LandingContent = {
  seo: { title: string; description: string; image: string; imageAlt: string };
  hero: { eyebrow: string; title: string[]; lead: string; primary: string; secondary: string; image: ImageMetadata; imageAlt: string };
  features: {
    title: string;
    lead: string;
    link?: { label: string; href: string };
    image: ImageMetadata;
    imageAlt: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  steps: {
    title: string;
    lead: string;
    link: { label: string; href: string };
    items: Array<{ title: string; description: string }>;
  };
  resources: {
    title: string;
    lead: string;
    items: Array<{ title: string; description: string; label: string; href: string }>;
  };
  cta: { title: string[]; lead: string; label: string };
};

export const landing: Record<Locale, LandingContent> = {
  ja: {
    seo: {
      title: 'Tamareel | あなたの動画コレクションを、もっと身近に',
      description: '大切な動画コレクションを、ひとつの場所に。Tamareelならアップロードから視聴まで、すっきり管理できます。',
      image: jaMainImage.src,
      imageAlt: 'Tamareelの動画コレクション画面',
    },
    hero: {
      eyebrow: 'YOUR VIDEO LIBRARY',
      title: ['自分専用の', '動画配信サービス'],
      lead: 'Tamareelは、自分専用の動画配信プラットフォームを構築できるクラウドサービスです。',
      primary: 'はじめる',
      secondary: '詳しく見る',
      image: jaMainImage,
      imageAlt: 'Tamareelの動画コレクション画面',
    },
    features: {
      title: '動画に特化した機能',
      lead: 'ただのクラウドストレージと違い、動画のスムーズな再生と充実した整理・編集機能が特徴です。',
      link: { label: '動画の保存方法を比較して選ぶ', href: '/blog/access-your-videos-anywhere/' },
      image: jaScreenEditImage,
      imageAlt: '動画の再生画面とタイムラインを表示したTamareelの機能画面',
      items: [
        { icon: '/images/icons/play_arrow_24px.svg', title: 'スムーズな再生', description: 'パソコンでもスマートフォンでも、動画の好きなシーンからすぐ再生できます。' },
        { icon: '/images/icons/video_library_24px.svg', title: '充実した整理機能', description: 'タイトル、タグ、説明、プレイリストなど、動画を整理する機能が充実しています。' },
        { icon: '/images/icons/lock_24px.svg', title: '自分専用のコレクション', description: '動画の共有機能はありません。自分専用のコレクションを安全に保管します。' },
        { icon: '/images/icons/content_cut_24px.svg', title: '手軽な編集機能', description: '再生したい範囲を指定して、必要なシーンをまとめた編集動画をブラウザ上で作れます。' },
      ],
    },
    steps: {
      title: '使い方はとても簡単',
      lead: '複雑な設定は不要。クレジットカード情報を登録せずに、無料トライアルをすぐに始められます。',
      link: { label: 'トライアルと有料プランの詳細を見る', href: '/help/plans/' },
      items: [
        { title: '動画を追加する', description: '手元にある動画をアップロードします。' },
        { title: '情報を整える', description: 'タイトルや説明、タグを登録して、見つけやすくします。' },
        { title: '好きなときに観る', description: 'どこからでも自分の動画コレクションを楽しめます。' },
      ],
    },
    resources: {
      title: 'もっと知る',
      lead: '動画に関する記事やTamareelの使い方を確認できます。ご質問やご要望もこちらからお寄せください。',
      items: [
        { title: 'ヘルプ', description: 'Tamareelの使い方やトライアル、プランについて確認できます。', label: 'ヘルプを見る', href: '/help/' },
        { title: 'ブログ', description: '動画の保存・整理・視聴に役立つ記事を紹介します。', label: 'ブログを読む', href: '/blog/' },
        { title: 'お問い合わせ', description: 'ご質問、ご要望、不具合についてお問い合わせいただけます。', label: '問い合わせる', href: '/contact/' },
      ],
    },
    cta: { title: ['動画を楽しむ', '場所を作ろう'], lead: '自分専用の動画配信プラットフォームが、数分で開始できます。', label: 'Tamareelをはじめる' },
  },
  en: {
    seo: {
      title: 'Tamareel | Your video collection, closer to you',
      description: 'Your personal video collection, all in one place. Upload, organize, and enjoy your videos with Tamareel.',
      image: enMainImage.src,
      imageAlt: 'Tamareel video collection screen',
    },
    hero: {
      eyebrow: 'YOUR VIDEO LIBRARY',
      title: ['Your own', 'video streaming service'],
      lead: 'Tamareel is a cloud service that lets you build your own private video streaming platform.',
      primary: 'Get started',
      secondary: 'Learn more',
      image: enMainImage,
      imageAlt: 'Tamareel video collection screen',
    },
    features: {
      title: 'Features built for video',
      lead: 'Unlike ordinary cloud storage, Tamareel combines smooth video playback with robust organization and editing tools.',
      link: { label: 'Compare ways to store and watch your videos', href: '/en/blog/access-your-videos-anywhere/' },
      image: enScreenEditImage,
      imageAlt: 'Tamareel feature screen showing video playback and an editing timeline',
      items: [
        { icon: '/images/icons/play_arrow_24px.svg', title: 'Smooth playback', description: 'On your computer or smartphone, jump straight to any scene in your videos.' },
        { icon: '/images/icons/video_library_24px.svg', title: 'Powerful organization tools', description: 'Organize your videos with titles, tags, descriptions, playlists, and more.' },
        { icon: '/images/icons/lock_24px.svg', title: 'Your private collection', description: 'Video sharing is not available. Keep your personal collection securely stored.' },
        { icon: '/images/icons/content_cut_24px.svg', title: 'Simple editing tools', description: 'Select the ranges you want to play and create an edited video from your favorite scenes, right in your browser.' },
      ],
    },
    steps: {
      title: 'Getting started is easy',
      lead: 'No complex setup or credit card details are required. Start your free trial right away.',
      link: { label: 'View trial and paid plan details', href: '/en/help/plans/' },
      items: [
        { title: 'Add your videos', description: 'Upload the videos you already have.' },
        { title: 'Add the details', description: 'Enter titles, descriptions, and tags to make everything easier to find.' },
        { title: 'Watch anytime', description: 'Enjoy your personal video collection from wherever you are.' },
      ],
    },
    resources: {
      title: 'Learn more',
      lead: 'Read guides about video and learn how to use Tamareel. You can also contact us with questions or feedback.',
      items: [
        { title: 'Help', description: 'Learn how to use Tamareel and find details about trials and plans.', label: 'View help', href: '/en/help/' },
        { title: 'Blog', description: 'Explore articles about storing, organizing, and watching your videos.', label: 'Read the blog', href: '/en/blog/' },
        { title: 'Contact', description: 'Contact us with questions, feedback, or issue reports.', label: 'Contact us', href: '/en/contact/' },
      ],
    },
    cta: { title: ['Create a place', 'to enjoy your videos.'], lead: 'Your own private video streaming platform can be ready in minutes.', label: 'Get started with Tamareel' },
  },
};
