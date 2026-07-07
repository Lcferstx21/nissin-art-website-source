# Nissin Art Academy Website Source Code / 日進美術学院 公式サイト ソースコード

Live site / 公開サイト: [https://nissinacademy.jp/](https://nissinacademy.jp/)

## 日本語

日進美術学院（Nissin Art Academy）の公式サイトのソースコードです。留学生向け美術塾として、学校紹介、コース情報、入学案内、合格実績、講師紹介、FAQ、お問い合わせ導線を含む、多言語対応のレスポンシブ Web サイトとして制作しました。

本プロジェクトではプロジェクト責任者として、関係者との全体的なコミュニケーションと進行管理を担当しました。また、サイト構成・ビジュアル・インタラクション設計にも参加し、フロントエンド開発、公開環境へのデプロイ、ローンチ、公開後の保守までを独立して担当しました。

### プロジェクトの特徴

- 要件整理、スケジュール調整、実装計画、納品までの全体進行を担当
- ページ構成、ビジュアル方針、インタラクション、レスポンシブ体験の設計に参加
- React、TypeScript、Vite、Tailwind CSS を用いてフロントエンドを独立開発
- 中国語・日本語・英語に対応した多言語コンテンツ構成を実装
- ナビゲーション、アニメーションテキスト、合格実績、講師紹介、問い合わせ導線、FAQ などの再利用可能な UI コンポーネントを作成
- 本番デプロイ、公開対応、公開後の保守を担当

### 技術スタック

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next / react-i18next
- GSAP
- Formspree
- Lucide React

### 主な機能

- デスクトップとモバイルに最適化したレスポンシブトップページ
- 中国語・日本語・英語の多言語ページとコンテンツ管理
- コース、スケジュール、入学案内、合格実績、講師紹介、FAQ、お問い合わせページ
- アニメーション演出とページ遷移表現
- 生徒実績・講師プロフィールの構造化データ管理
- お問い合わせフォーム連携
- 画像、動画、PDF などの静的アセット管理

### プロジェクト構成

```text
public/              Static public assets
src/
  Pages/             Page-level React views
  components/        Reusable UI and data components
  layout/            Navigation and shared layout elements
  locales/           Multilingual content resources
  assets/            Local media and brand assets
```

### ローカル開発

```bash
npm install
npm run dev
```

### ビルド

```bash
npm run build
```

### 補足

このリポジトリはポートフォリオ用に整理したソースコード版です。サーバーデプロイスクリプト、環境変数ファイル、ビルド成果物、依存パッケージ、ローカルキャッシュファイルは公開リポジトリには含めていません。

## English

Source code for the official website of Nissin Art Academy, an art prep school for international students. The site was built as a responsive multilingual web experience for presenting the school, courses, admissions information, student results, teachers, FAQs, and contact flow.

I served as the project lead for this website. My responsibilities covered overall communication and coordination with stakeholders, participation in the visual and interaction design process, and the independent implementation, production deployment, launch, and ongoing maintenance of the site.

### Project Highlights

- Led end-to-end project coordination, including requirement communication, schedule alignment, implementation planning, and delivery.
- Participated in page structure, visual direction, interaction details, and responsive experience design.
- Independently developed the frontend using React, TypeScript, Vite, Tailwind CSS, and modern component-based architecture.
- Implemented a multilingual content structure for Chinese, Japanese, and English audiences.
- Built reusable UI components for navigation, animated text, results, teacher profiles, contact blocks, FAQ sections, and page-level layouts.
- Completed production deployment, launch support, and post-launch maintenance.

### Technical Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next / react-i18next
- GSAP
- Formspree
- Lucide React

### Main Features

- Responsive home page with desktop and mobile-specific presentation.
- Multilingual pages and content files for Chinese, Japanese, and English.
- Course, schedule, admission, results, team, Q&A, and contact sections.
- Animated UI elements and visual transitions.
- Structured student result and teacher profile data.
- Contact form integration.
- Static asset management for images, video, PDFs, and public media.

### Project Structure

```text
public/              Static public assets
src/
  Pages/             Page-level React views
  components/        Reusable UI and data components
  layout/            Navigation and shared layout elements
  locales/           Multilingual content resources
  assets/            Local media and brand assets
```

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Portfolio Note

This repository is prepared as a portfolio source-code version. Server deployment scripts, environment files, build output, dependency folders, and machine-local cache files are intentionally excluded from the public repository.
