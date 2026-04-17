export type Lang = "en" | "zh" | "ja" | "es";

export interface Dict {
  nav: {
    features: string;
    app: string;
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
    items: Array<{ title: string; desc: string }>;
  };
  showcase: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
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
    coming_soon: string;
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
      app: string;
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
