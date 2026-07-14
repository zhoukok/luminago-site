import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://luminago.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumina Go — The last missing piece of your projector.",
    template: "%s · Lumina Go",
  },
  description:
    "The Bluetooth LE remote app for HOTACK projectors (including WEMI and LYNCAST). Remote, keyboard, touchpad, air mouse, voice and text-to-device — six modes in one app, all over a direct BLE link. Built-in AI Assistant. Free on App Store and Google Play, offline, no ads.",
  applicationName: "Lumina Go",
  authors: [{ name: "Chengdu Hotack Technology Co., Ltd.", url: SITE_URL }],
  keywords: [
    "Lumina Go",
    "HOTACK projector remote",
    "WEMI remote",
    "LYNCAST remote",
    "projector remote app",
    "Bluetooth LE remote",
    "BLE projector remote",
    "air mouse app",
    "voice control projector",
    "AI projector assistant",
  ],
  openGraph: {
    title: "Lumina Go — The last missing piece of your projector.",
    description:
      "Bluetooth LE remote app for HOTACK projectors (WEMI, LYNCAST and more). Remote, keyboard, touchpad, air mouse, voice and text — six modes, all over direct BLE, with a built-in AI Assistant. Free on App Store and Google Play.",
    url: SITE_URL,
    siteName: "Lumina Go",
    images: [
      {
        url: "/screenshots/s1.png",
        width: 1080,
        height: 2340,
        alt: "Lumina Go — smart projector remote app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Go — The last missing piece of your projector.",
    description:
      "BLE remote for HOTACK projectors (WEMI, LYNCAST and more). Six modes — remote, keyboard, touchpad, air mouse, voice, text — and a built-in AI Assistant. Free, offline, no ads.",
    images: ["/screenshots/s1.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000FF0",
  width: "device-width",
  initialScale: 1,
};

// 结构化数据(Schema.org JSON-LD):让 Google 富结果与 AI 搜索准确识别
// "这是什么 App / 谁做的 / 什么平台 / 免费 / 官方链接"。不含未经真实数据支撑的评分。
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Chengdu Hotack Technology Co., Ltd.",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lumina Go",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Lumina Go",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "iOS, Android",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      description:
        "Bluetooth LE remote app for HOTACK projectors (including WEMI and LYNCAST). Six control modes in one app — remote, keyboard, touchpad, air mouse, voice and text — over a direct BLE link, fully offline, with a built-in AI Assistant. Free, no ads.",
      downloadUrl: [
        "https://apps.apple.com/app/id6761456385",
        "https://play.google.com/store/apps/details?id=com.lumina.go",
      ],
      installUrl: [
        "https://apps.apple.com/app/id6761456385",
        "https://play.google.com/store/apps/details?id=com.lumina.go",
      ],
      featureList: [
        "D-pad remote with OK and projector keys",
        "Full keyboard",
        "Touchpad",
        "Air mouse",
        "Voice control (50+ on-device commands)",
        "Text send to projector",
        "AI projector assistant",
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@id": `${SITE_URL}/#org` },
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSC.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
