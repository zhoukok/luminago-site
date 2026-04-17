import type { Dict } from "./types";

export const en: Dict = {
  nav: {
    download: "Download",
  },
  hero: {
    badge: "New — 50+ voice commands, all on-device",
    title_line1: "Put away the plastic remote.",
    title_line2: "This one fits in your pocket.",
    tagline:
      "Lumina Go is the Bluetooth LE remote app for WEMI and LYNCAST projectors. Voice commands, air mouse, full keyboard, touchpad, and media keys — all over a direct BLE link. No Wi-Fi, no account, no ads.",
    cta_primary: "Download the app",
    cta_secondary: "See what it does",
    chip_latency: "≤ 20 ms latency",
    chip_voice: "50+ voice commands",
    chip_offline: "Offline · BLE-only",
  },
  features: {
    section_eyebrow: "What the app does",
    section_title: "Six reasons you'll never pick up the stick remote again",
    section_lead:
      "Everything runs on your phone and speaks directly to your projector over Bluetooth LE. No cloud, no tracking.",
    items: [
      {
        eyebrow: "01 — Core control",
        title: "A remote that actually feels instant.",
        desc: "Bluetooth LE keeps latency under 20 ms from the moment you tap a button to the pixel on the wall. There's no warm-up, no pairing wizard, no line of sight to worry about — open the app, you're connected.",
        bullets: [
          "Sub-20 ms D-pad response",
          "Reliable 10 m working range",
          "No Wi-Fi and no account needed",
        ],
      },
      {
        eyebrow: "02 — Air mouse",
        title: "Your phone is the mouse.",
        desc: "Gyroscope and accelerometer readings are fused on-device into a smooth 2D cursor. Wave your phone to move, tap to click — works in portrait, landscape, upside down, and recenters itself on the fly.",
        bullets: [
          "9-axis sensor fusion on-device",
          "Works in any phone orientation",
          "One-tap recenter & sensitivity tuning",
        ],
      },
      {
        eyebrow: "03 — Voice",
        title: "“Open Netflix. Volume 30.”",
        desc: "Speak naturally — no wake word, no cloud round-trip. 50+ projector intents (apps, playback, volume, source, display) are parsed locally on your phone and turned into BLE commands in a single hop.",
        bullets: [
          "50+ built-in intents across apps & playback",
          "On-device parsing — nothing leaves the phone",
          "Works in English, 中文, 日本語, Español",
        ],
      },
      {
        eyebrow: "04 — Input",
        title: "A real keyboard for real typing.",
        desc: "Wi-Fi passwords, search queries, account logins — type them with a full QWERTY keyboard that appears exactly when you need it. Below it, a trackpad-grade touchpad handles scroll, drag, and multi-finger gestures.",
        bullets: [
          "Full QWERTY with autocomplete",
          "Two-finger scroll & pinch",
          "Tap, long-press, and drag from the touchpad",
        ],
      },
      {
        eyebrow: "05 — Playback",
        title: "Play, pause, next episode.",
        desc: "Dedicated media keys drive the streaming apps you actually use. One tap plays or pauses, double-tap skips, long-press seeks. Tested end-to-end on the major platforms so muscle memory just works.",
        bullets: [
          "Verified on Netflix, YouTube, Disney+, Hulu, HBO Max",
          "Skip, seek, and volume from the lockscreen-style panel",
          "Subtle haptic feedback on every action",
        ],
      },
      {
        eyebrow: "06 — Support",
        title: "Never get stuck on setup.",
        desc: "An in-app assistant answers setup, pairing, Wi-Fi, firmware, and remote questions — tailored to the exact projector model you're holding. Typed in English, answered in your language.",
        bullets: [
          "Model- and firmware-aware answers",
          "Chat in 4 languages",
          "One-tap link to the right user manual page",
        ],
      },
    ],
  },
  download: {
    section_eyebrow: "Get the app",
    section_title: "Free on the App Store and Google Play",
    section_lead:
      "Scan a code with your phone camera to install. Lumina Go is free, has no ads, and works fully offline.",
    ios_title: "Download for iPhone",
    ios_subtitle: "iOS 15.0 or later",
    ios_scan_hint: "Scan with Camera app",
    android_title: "Get on Google Play",
    android_subtitle: "Android 10 or later",
    android_scan_hint: "Scan with your camera",
    coming_soon: "Coming soon",
    free_note: "Free · No ads · No tracking · Works offline",
  },
  footer: {
    tagline:
      "The smart remote for your projector — made in Chengdu, shipped worldwide.",
    cols: {
      product: "Product",
      legal: "Legal",
    },
    links: {
      features: "Features",
      download: "Download",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Language",
  },
};
