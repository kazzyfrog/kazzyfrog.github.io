import { Mail, MessageCircle } from "lucide-react";
import { Icons } from "../components/Icons";

// Profile
export const PROFILE_NAME = "handlename";
export const PROFILE_JOB = "software engineer";
// https://github.com/+ 自分のアカウント + .png
export const PROFILE_AVATAR_PATH = `https://github.com/b13o.png`;
export const PROFILE_LOCATION = "Tokyo, Japan";
// Tokyo の緯度・経度
export const LOCATION_LATITUDE = 35.6895;
export const LOCATION_LONGITUDE = 139.6917;

// Contact
export const CONTACT_EMAIL = "handle@example.com";
export const CONTACT_TWITTER_HANDLE = "@handle_name";
export const CONTACT_TWITTER_URL = "https://x.com/handle_name";
export const CONTACT_GITHUB_HANDLE = "handle_name";
export const CONTACT_GITHUB_URL = `https://github.com/${CONTACT_GITHUB_HANDLE}`;

// Contact セクションのバブル要素
export const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    link: `mailto:${CONTACT_EMAIL}`,
    position: { x: 30, y: 20 },
  },
  {
    icon: Mail,
    label: "Email",
    value: "handle@example.com",
    link: "mailto:handle@example.com",
    position: { x: 10, y: 0 },
  },
  {
    icon: Icons.twitter,
    label: "Twitter",
    value: CONTACT_TWITTER_HANDLE,
    link: CONTACT_TWITTER_URL,
    position: { x: 65, y: 10 },
  },
  {
    icon: Icons.gitHub,
    label: "GitHub",
    value: CONTACT_GITHUB_HANDLE,
    link: CONTACT_GITHUB_URL,
    position: { x: 20, y: 50 },
  },
  {
    icon: MessageCircle,
    label: "チャット",
    value: "DMにてご連絡ください",
    link: CONTACT_TWITTER_URL,
    position: { x: 75, y: 45 },
  },
  {
    icon: MessageCircle,
    label: "チャット",
    value: "DMにてご連絡ください",
    link: "https://x.com/handle_name",
    position: { x: 50, y: 30 },
  },
];

// Profile セクションに表示する連絡先
export const PROFILE_CONTACT_ITEMS = [
  {
    icon: Icons.twitter,
    text: CONTACT_TWITTER_URL,
    label: "Twitter profile",
  },
  {
    icon: Icons.gitHub,
    text: CONTACT_GITHUB_URL,
    label: "GitHub profile",
  },
  {
    icon: Mail,
    text: CONTACT_EMAIL,
    label: "Email address",
  },
];

// 技術スキル（名前/評価値）
export const SKILL_DATA = [
  { subject: "React/Next.js", value: 90 },
  { subject: "TypeScript", value: 85 },
  { subject: "Node.js", value: 75 },
  { subject: "UI/UX", value: 80 },
  { subject: "Vue/Nuxt.js", value: 70 },
  { subject: "AWS", value: 65 },
];

// 経歴書などのページがあればリンク
export const RESUME_URL = "#";

// スキルとして掲載する数字データ
export const SKILL_OUTPUT = [
  { label: "個人運営サービス", value: 4 },
  { label: "技術ブログ投稿数", value: 15 },
  { label: "GitHub獲得スター", value: 80 },
];

// 開発者として経験したプロジェクト紹介
export const SKILL_PROJECTS = [
  {
    title: "記事・電子書籍販売アプリ",
    description:
      "知的コンテンツを有料で販売できるアプリを構築。柔軟なアクセス制限、セキュアな運用フローを実現。",
    tech: ["個人開発", "Next.js", "Tailwind CSS", "Stripe", "Auth.js"],
    link: "#",
  },
  {
    title: "生成AIを活用したレビューアプリ",
    description:
      "効果的なフィードバック収集のためのアプリをチームで開発。ハッカソン参加時の成果物です。",
    tech: ["共同開発", "React", "MongoDB", "Express", "Gemini AI"],
    link: "#",
  },
  {
    title: "GitHub画像生成アプリ",
    description:
      "GitHub上で使用するLINEスタンプのような画像を作成できるOSSを構築・運用。テキストコミュニケーションを楽しく活性化。",
    tech: ["OSS", "Next.js", "CloudFlare", "@vercel/og"],
    link: "#",
  },
];

// About セクションに表示する対話風自己紹介の内容
export const ABOUT_CONVERSATION = [
  {
    isUser: true,
    message: "はじめまして",
  },
  {
    isUser: false,
    message:
      "はじめまして🙌\nプロフィールサイトを見ていただきありがとうございます！",
  },
  {
    isUser: true,
    message: "あなたについて教えてください！",
  },
  {
    isUser: false,
    message: `私は、Web系のソフトウェアエンジニアです。\n\n同時に、下記でもあります:)\n・プロダクトマネージャー\n・インディハッカー（個人開発者）\n・ゲーマー\n・コーヒー愛好家`, // Use PROFILE_TITLE if needed here
  },
  {
    isUser: true,
    message: "趣味は何ですか？",
  },
  {
    isUser: false,
    message:
      "ゲーム、筋トレ、読書、そして新しいプログラミング技術の学習が趣味です。休日はサウナでリフレッシュするのも好きです。",
  },
  {
    isUser: true,
    message: "最近ハマっていることは？",
  },
  {
    isUser: false,
    message:
      "最近は、生成 AI の活用に夢中になっています！AIエージェントと、開発者としての経験を組み合わせ、新たな開発フロー・プロダクトの形を模索しています🤖",
  },
];
