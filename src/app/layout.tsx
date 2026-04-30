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
