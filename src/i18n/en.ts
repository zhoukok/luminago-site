import type { Dict } from "./types";

export const en: Dict = {
  nav: {
    features: "Features",
    ecosystem: "Ecosystem",
    showcase: "App",
    developers: "Developers",
    download: "Download",
  },
  hero: {
    badge: "Now with Alexa, Google Home & AI Smart Help",
    title_line1: "See bigger.",
    title_line2: "Control smarter.",
    tagline:
      "The Bluetooth LE remote + voice assistant for WEMI and LYNCAST projectors. Zero cloud lock-in, zero account needed — just open the app and it just works.",
    cta_ios: "Download for iOS",
    cta_android: "Get it on Google Play",
    cta_docs: "Read the docs",
    sub_small: "Free · No ads · No tracking · Works offline",
  },
  features: {
    section_eyebrow: "What's inside",
    section_title: "Everything your projector should already do",
    section_lead:
      "We built Lumina Go because a remote-in-your-pocket should do more than emulate four arrow keys.",
    items: [
      {
        title: "Bluetooth LE Remote",
        desc: "Sub-20 ms D-pad, keyboard, touchpad, media keys. Works up to 10 m with no Wi-Fi, no pairing drama.",
      },
      {
        title: "Air Mouse",
        desc: "Wave your phone — move the cursor. Gyroscope + accelerometer fused on-device for butter-smooth tracking.",
      },
      {
        title: "Voice Control",
        desc: "50+ projector intents parsed on-device. Private by default: no audio ever leaves your phone.",
      },
      {
        title: "AI Smart Help",
        desc: "Stuck on setup? A tap opens a chat that understands your exact model and firmware, powered by Cloudflare AI.",
      },
    ],
  },
  ecosystem: {
    section_eyebrow: "Plays well with others",
    section_title: "Your smart home already speaks Lumina",
    section_lead:
      "Link once and your projector becomes a first-class citizen in the voice assistant you already use.",
    quote: "\u201cAlexa, turn on my projector.\u201d",
    quote_by: "…and it just does.",
    coming_soon: "Coming soon",
  },
  showcase: {
    section_eyebrow: "See it in action",
    section_title: "Designed for one-hand. Built for the couch.",
    section_lead:
      "Six screens, zero cognitive load. Every surface is reachable with your thumb.",
  },
  developers: {
    section_eyebrow: "For makers",
    section_title: "Open APIs. Open source. Ship your own integration.",
    section_lead:
      "Every device exposes a local REST + WebSocket API. Cloud relay is free and available today at relay.luminago.app. Fork the receiver firmware, extend the remote, or build an entire Matter bridge.",
    curl_caption: "Try the public streaming search endpoint:",
    btn_github: "View on GitHub",
    btn_docs: "Developer Docs",
    btn_api: "Public API status",
  },
  footer: {
    tagline: "Smart projectors, built in Chengdu.",
    cols: {
      product: "Product",
      company: "Company",
      legal: "Legal",
      developer: "Developer",
    },
    links: {
      features: "Features",
      ecosystem: "Ecosystem",
      download: "Download",
      github: "GitHub",
      docs: "Documentation",
      status: "API status",
      contact: "Contact",
      privacy: "Mobile Privacy",
      smart_home_privacy: "Smart Home Privacy",
      alexa_privacy: "Alexa Skill Privacy",
      terms: "Terms of Use",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Language",
  },
};
