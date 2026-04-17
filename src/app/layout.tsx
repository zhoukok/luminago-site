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
    default: "Lumina Go — Put away the plastic remote.",
    template: "%s · Lumina Go",
  },
  description:
    "The Bluetooth LE remote app for WEMI and LYNCAST projectors. 50+ voice commands, air mouse, full keyboard, touchpad and media keys — all over a direct BLE link. Free, offline, no ads.",
  applicationName: "Lumina Go",
  authors: [{ name: "Chengdu Hotack Technology Co., Ltd.", url: SITE_URL }],
  keywords: [
    "Lumina Go",
    "WEMI remote",
    "LYNCAST remote",
    "projector remote app",
    "Bluetooth LE remote",
    "air mouse app",
    "voice control projector",
    "BLE projector remote",
  ],
  openGraph: {
    title: "Lumina Go — Put away the plastic remote.",
    description:
      "Bluetooth LE remote app for WEMI / LYNCAST projectors. 50+ voice commands, air mouse, full keyboard, media keys. Free, offline, no ads.",
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
    title: "Lumina Go — Put away the plastic remote.",
    description:
      "Bluetooth LE remote app for WEMI / LYNCAST projectors. Voice, air mouse, keyboard, media keys — all free, all offline.",
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
