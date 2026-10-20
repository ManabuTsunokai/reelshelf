import type { ImageMetadata } from 'astro';
import type { Locale } from '../lib/i18n';
import enMainImage from '../assets/images/en/main.png';
import editingScreenImage from '../assets/images/features/editing-screen.png';
import jaMainImage from '../assets/images/ja/main.png';

export type LandingContent = {
  seo: { title: string; description: string; image: string; imageAlt: string };
  hero: { eyebrow: string; title: string[]; lead: string; primary: string; secondary: string; secondaryHref: string; image: ImageMetadata; imageAlt: string };
  features: {
    title: string;
    lead: string;
    link?: { label: string; href: string };
    items: Array<{
      number: string;
      icon: string;
      title: string;
      description: string;
      details: string[];
      link?: { label: string; href: string };
      placeholderTitle: string;
      placeholderDescription: string;
      video?: { src: string; ariaLabel: string; fit?: 'contain' };
      image?: { src: ImageMetadata; alt: string };
    }>;
  };
  trust?: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Array<{ number: string; title: string; description: string }>;
    links: Array<{ label: string; href: string }>;
  };
  steps: {
    title: string;
    lead: string;
    link: { label: string; href: string };
    items: Array<{ icon: string; title: string; description: string }>;
  };
  faq: {
    title: string;
    lead: string;
    contactLabel: string;
    contactHref: string;
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
      title: 'Tamareel | 自分専用の非公開動画ライブラリ',
      description: 'Tamareelは、プライバシーを重視した自分専用の非公開動画ライブラリです。動画を第三者へ公開・共有せず、保存・整理・再生・簡易編集まで行えます。',
      image: jaMainImage.src,
      imageAlt: 'Tamareelの動画コレクション画面',
    },
    hero: {
      eyebrow: 'YOUR VIDEO LIBRARY',
      title: ['動画に特化した', 'プライベートクラウド'],
      lead: 'Tamareelは、動画を非公開で保存・整理し、好きなときに楽しめる、自分専用のクラウドサービスです。',
      primary: '無料ではじめる',
      secondary: '詳しく見る',
      secondaryHref: '#privacy',
      image: jaMainImage,
      imageAlt: 'Tamareelの動画コレクション画面',
    },
    features: {
      title: '動画に特化した機能',
      lead: '動画の保管にとどまらず、快適な視聴から整理・編集までをひとつにまとめました。',
      items: [
        {
          number: '01',
          icon: '/images/icons/play_arrow_24px.svg',
          title: 'スムーズな再生',
          description: 'アップロードした動画は、パソコンやスマートフォンのブラウザからすぐに視聴できます。長い動画でもタイムラインを操作して、見たい場面から再生できます。',
          details: ['ブラウザからそのまま再生', 'タイムラインから見たい場面へ移動', 'パソコン・スマートフォンに対応'],
          placeholderTitle: '再生画面のスクリーンキャプチャ',
          placeholderDescription: '動画プレーヤーとタイムラインが見え、動画の途中の場面へ移動している状態',
          video: { src: '/videos/smooth-playback-demo.mp4', ariaLabel: 'Tamareelで動画を再生し、タイムラインを操作するデモ' },
        },
        {
          number: '02',
          icon: '/images/icons/video_library_24px.svg',
          title: '充実した整理機能',
          description: 'タイトルや説明、タグを登録して、増えていく動画を分かりやすく整理できます。シリーズやプレイリストにまとめれば、目的に合わせて見たい動画をすぐに探せます。',
          details: ['タイトル・説明・タグで検索', 'シリーズごとに動画を整理', 'プレイリストに好きな動画をまとめる'],
          link: { label: '動画の整理について詳しく見る', href: '/help/organize-videos/' },
          placeholderTitle: '動画一覧・検索画面のスクリーンキャプチャ',
          placeholderDescription: '「タグ: 2026」で絞り込まれた動画一覧と、シリーズ・プレイリストのメニューが見える状態',
          video: { src: '/videos/organization-search-demo.mp4', ariaLabel: 'Tamareelで動画を検索し、シリーズを表示するデモ', fit: 'contain' },
        },
        {
          number: '03',
          icon: '/images/icons/content_cut_24px.svg',
          title: '手軽な編集機能',
          description: '動画の再生範囲を指定し、必要なシーンをまとめた編集動画をブラウザ上で作成できます。専用の編集ソフトを立ち上げず、視聴しながら手軽に操作できます。',
          details: ['開始位置と終了位置をタイムラインで指定', '必要なシーンだけをひとつにまとめる', 'ブラウザ上で編集操作が完結'],
          link: { label: '動画編集について詳しく見る', href: '/help/editing-videos/' },
          placeholderTitle: '編集画面のスクリーンキャプチャ',
          placeholderDescription: '動画プレーヤー、範囲指定されたタイムライン、複数の編集区間が見える状態',
          image: { src: editingScreenImage, alt: 'Tamareelの動画編集画面' },
        },
      ],
    },
    trust: {
      eyebrow: 'PRIVACY BY DESIGN',
      title: '動画は、あなたのもの。',
      lead: 'Tamareelは、動画を誰かと共有するためではなく、あなた自身が保管・視聴するためのサービスです。プライバシーを守る方針を、利用規約とプライバシーポリシーに明記しています。',
      items: [
        { number: '01', title: 'あなた専用の非公開ライブラリ', description: '動画を閲覧できるのは、アップロードした本人のアカウントだけ。共有機能や公開リンク、第三者が検索・閲覧できる機能はありません。' },
        { number: '02', title: '動画の内容を確認しません', description: '法令上必要な場合を除き、運営者が動画の内容を閲覧、視聴、監視または審査することはありません。' },
        { number: '03', title: '自動処理と安全管理', description: '保存、形式解析、変換、サムネイル生成などは情報システムが自動で処理。通信の暗号化、アクセス制御、ログ管理などの安全管理措置も講じています。' },
        { number: '04', title: '動画の権利はあなたのまま', description: 'アップロードした動画の権利がTamareelへ移ることはありません。サービス提供に必要な範囲だけ、処理の許諾をいただきます。' },
      ],
      links: [
        { label: '利用規約を読む', href: '/terms/' },
        { label: 'プライバシーポリシーを読む', href: '/privacy/' },
      ],
    },
    steps: {
      title: '使い方はとても簡単',
      lead: '複雑な設定は不要。クレジットカード情報を登録せずに、無料トライアルをすぐに始められます。',
      link: { label: 'トライアルと有料プランの詳細を見る', href: '/help/plans/' },
      items: [
        { icon: '/images/icons/upload_video_24px.svg', title: '動画を追加する', description: '手元にある動画をアップロードします。' },
        { icon: '/images/icons/tag_24px.svg', title: '情報を整える', description: 'タイトルや説明、タグを登録して、見つけやすくします。' },
        { icon: '/images/icons/watch_video_24px.svg', title: '好きなときに観る', description: 'どこからでも自分の動画コレクションを楽しめます。' },
      ],
    },
    faq: {
      title: 'よくある質問',
      lead: 'Tamareelを始める前に気になりやすい点をまとめました。',
      contactLabel: '解決しない場合はお問い合わせください',
      contactHref: '/contact/',
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
      title: 'Tamareel | Your Private Video Library',
      description: 'Tamareel is a privacy-focused video library for your personal use. Your videos are not published or shared with others, and you can store, organize, watch, and make simple edits in one place.',
      image: enMainImage.src,
      imageAlt: 'Tamareel video collection screen',
    },
    hero: {
      eyebrow: 'YOUR VIDEO LIBRARY',
      title: ['A private cloud', 'built for video'],
      lead: 'Tamareel is your personal cloud service for privately storing and organizing your videos, so you can enjoy them whenever you want.',
      primary: 'Start for free',
      secondary: 'Learn more',
      secondaryHref: '#privacy',
      image: enMainImage,
      imageAlt: 'Tamareel video collection screen',
    },
    features: {
      title: 'Features built for video',
      lead: 'Beyond simply storing your videos, Tamareel brings seamless viewing, organization, and editing together in one place.',
      items: [
        {
          number: '01',
          icon: '/images/icons/play_arrow_24px.svg',
          title: 'Smooth playback',
          description: 'Watch uploaded videos directly in your browser on a computer or smartphone. Even in a long video, use the timeline to jump straight to the scene you want to see.',
          details: ['Play directly in your browser', 'Jump to any scene from the timeline', 'Works on computers and smartphones'],
          placeholderTitle: 'Playback screen capture',
          placeholderDescription: 'Show the video player and timeline while moving to a scene partway through the video.',
          video: { src: '/videos/smooth-playback-demo.mp4', ariaLabel: 'Demo of playing a video and using the timeline in Tamareel' },
        },
        {
          number: '02',
          icon: '/images/icons/video_library_24px.svg',
          title: 'Powerful organization tools',
          description: 'Keep a growing collection easy to navigate with titles, descriptions, and tags. Group videos into series and playlists so you can quickly find what you want to watch.',
          details: ['Search by title, description, and tag', 'Organize related videos into series', 'Collect favorite videos in playlists'],
          link: { label: 'Learn more about organizing videos', href: '/en/help/organize-videos/' },
          placeholderTitle: 'Video library and search screen capture',
          placeholderDescription: 'Show a video library filtered by “Tag: 2026,” with the Series and Playlists navigation visible.',
          video: { src: '/videos/organization-search-demo.mp4', ariaLabel: 'Demo of searching videos and opening a series in Tamareel', fit: 'contain' },
        },
        {
          number: '03',
          icon: '/images/icons/content_cut_24px.svg',
          title: 'Simple editing tools',
          description: 'Choose the ranges you want to play and combine the scenes you need into an edited video. Make simple edits while watching, without opening separate editing software.',
          details: ['Set start and end points on the timeline', 'Combine only the scenes you need', 'Complete the editing flow in your browser'],
          link: { label: 'Learn more about video editing', href: '/en/help/editing-videos/' },
          placeholderTitle: 'Editing screen capture',
          placeholderDescription: 'Show the video player, a timeline with selected ranges, and multiple edit segments.',
          image: { src: editingScreenImage, alt: 'Tamareel video editing screen' },
        },
      ],
    },
    trust: {
      eyebrow: 'PRIVACY BY DESIGN',
      title: 'Your videos stay yours.',
      lead: 'Tamareel is built for you to store and watch your own videos—not to share them with others. Our privacy commitments are stated clearly in our Terms of Use and Privacy Policy.',
      items: [
        { number: '01', title: 'A private library just for you', description: 'Only the account that uploaded a video can view it. There are no sharing features, public links, or ways for third parties to search for or view your videos.' },
        { number: '02', title: 'We do not review your videos', description: 'Except where required by law, we do not view, watch or listen to, monitor, or review the content of your videos.' },
        { number: '03', title: 'Automated processing and safeguards', description: 'Storage, format analysis, conversion, and thumbnail generation are handled automatically by our systems. We also use safeguards such as encrypted communications, access controls, and log management.' },
        { number: '04', title: 'You keep the rights to your content', description: 'Uploading a video does not transfer its rights to Tamareel. You grant only the permission needed to process it for the Service.' },
      ],
      links: [
        { label: 'Read the Terms of Use', href: '/en/terms/' },
        { label: 'Read the Privacy Policy', href: '/en/privacy/' },
      ],
    },
    steps: {
      title: 'Getting started is easy',
      lead: 'No complex setup or credit card details are required. Start your free trial right away.',
      link: { label: 'View trial and paid plan details', href: '/en/help/plans/' },
      items: [
        { icon: '/images/icons/upload_video_24px.svg', title: 'Add your videos', description: 'Upload the videos you already have.' },
        { icon: '/images/icons/tag_24px.svg', title: 'Add the details', description: 'Enter titles, descriptions, and tags to make everything easier to find.' },
        { icon: '/images/icons/watch_video_24px.svg', title: 'Watch anytime', description: 'Enjoy your personal video collection from wherever you are.' },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      lead: 'Find answers to common questions before getting started with Tamareel.',
      contactLabel: 'Still have questions? Contact us',
      contactHref: '/en/contact/',
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
