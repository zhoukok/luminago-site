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
    default: "Lumina Go — See bigger. Control smarter.",
    template: "%s · Lumina Go",
  },
  description:
    "The Bluetooth LE remote + voice assistant for WEMI and LYNCAST projectors. Alexa, Google Home and AI Smart Help built in. Free, offline-first, privacy by design.",
  applicationName: "Lumina Go",
  authors: [
    { name: "Chengdu Hotack Technology Co., Ltd.", url: SITE_URL },
  ],
  keywords: [
    "Lumina Go",
    "WEMI",
    "LYNCAST",
    "projector remote",
    "Bluetooth LE remote",
    "Alexa smart home",
    "Google Home projector",
    "air mouse",
    "voice control projector",
  ],
  openGraph: {
    title: "Lumina Go — See bigger. Control smarter.",
    description:
      "Bluetooth LE remote, voice assistant, Alexa & Google Home, AI Smart Help. Free, offline-first.",
    url: SITE_URL,
    siteName: "Lumina Go",
    images: [
      {
        url: "/feature.png",
        width: 1024,
        height: 500,
        alt: "Lumina Go — smart projector remote",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Go — See bigger. Control smarter.",
    description:
      "Bluetooth LE remote + voice assistant for WEMI / LYNCAST projectors.",
    images: ["/feature.png"],
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
