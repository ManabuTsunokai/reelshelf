# Tamareel website

Tamareelのランディングページ、ヘルプ、ブログ、規約ページを管理するAstro製の静的サイトです。

## 開発

```sh
npm install
npm run dev
```

本番用ファイルは`npm run build`で`dist/`へ生成されます。ビルド前にAstroの型・コンテンツ検証も実行されます。

## 主な編集場所

- LPの日英テキスト、機能、手順: `src/data/landing.ts`
- サービス共通設定: `src/data/site.ts`
- 共通レイアウト、ヘッダー、フッター: `src/layouts/`、`src/components/`
- ヘルプ記事: `src/content/help/{ja,en}/`
- ブログ記事: `src/content/blog/{ja,en}/`
- 規約: `src/content/legal/{ja,en}/`
- デザイン: `src/styles/global.css`
- 画像などの静的ファイル: `public/`

## コンテンツの追加

ヘルプ、ブログ、規約はMarkdownファイルを追加するとページが自動生成されます。frontmatterの項目は`src/content.config.ts`で定義されており、不足や型の間違いはビルド時に検出されます。

ヘルプ記事は`order`の昇順で一覧表示されます。ファイル名がそのままURLのslugになります。

```md
---
title: "記事タイトル"
description: "検索結果や一覧に表示する説明"
lead: "記事冒頭の説明"
eyebrow: "CATEGORY"
locale: ja
order: 5
---

## 見出し

本文を書きます。
```

日本語はルート直下、英語は`/en/`以下に生成されます。URLは末尾スラッシュ付きのクリーンURLです。
