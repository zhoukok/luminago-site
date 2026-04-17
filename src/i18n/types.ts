export type Lang = "en" | "zh" | "ja" | "es";

export interface Dict {
  nav: {
    features: string;
    ecosystem: string;
    showcase: string;
    developers: string;
    download: string;
  };
  hero: {
    badge: string;
    title_line1: string;
    title_line2: string;
    tagline: string;
    cta_ios: string;
    cta_android: string;
    cta_docs: string;
    sub_small: string;
  };
  features: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
    items: Array<{ title: string; desc: string }>;
  };
  ecosystem: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
    quote: string;
    quote_by: string;
    coming_soon: string;
  };
  showcase: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
  };
  developers: {
    section_eyebrow: string;
    section_title: string;
    section_lead: string;
    curl_caption: string;
    btn_github: string;
    btn_docs: string;
    btn_api: string;
  };
  footer: {
    tagline: string;
    cols: {
      product: string;
      company: string;
      legal: string;
      developer: string;
    };
    links: {
      features: string;
      ecosystem: string;
      download: string;
      github: string;
      docs: string;
      status: string;
      contact: string;
      privacy: string;
      smart_home_privacy: string;
      alexa_privacy: string;
      terms: string;
    };
    copyright: string;
    company_zh: string;
    language: string;
  };
}
