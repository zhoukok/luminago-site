export type Lang =
  | "en"
  | "zh"
  | "zh-Hant"
  | "ja"
  | "ko"
  | "de"
  | "fr"
  | "it"
  | "es"
  | "pt"
  | "ru"
  | "tr"
  | "ar"
  | "hi"
  | "id"
  | "vi"
  | "th";

export interface Dict {
  nav: {
    download: string;
  };
  hero: {
    badge: string;
    title_line1: string;
    title_line2: string;
    tagline: string;
    cta_primary: string;
    cta_secondary: string;
    chip_latency: string;
    chip_voice: string;
    chip_offline: string;
  };
  features: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
    items: Array<{
      eyebrow: string;
      title: string;
      desc: string;
      bullets: [string, string, string];
    }>;
    closing: {
      eyebrow: string;
      title: string;
      desc: string;
      cta_label: string;
      cta_href: string;
    };
  };
  download: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
    ios_title: string;
    ios_subtitle: string;
    ios_scan_hint: string;
    android_title: string;
    android_subtitle: string;
    android_scan_hint: string;
    free_note: string;
  };
  footer: {
    tagline: string;
    cols: {
      product: string;
      legal: string;
    };
    links: {
      features: string;
      download: string;
      privacy: string;
      terms: string;
      contact: string;
    };
    copyright: string;
    company_zh: string;
    language: string;
  };
}
