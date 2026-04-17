import type { MetadataRoute } from "next";

const BASE = "https://luminago.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/#features`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#ecosystem`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#showcase`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#developers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://docs.luminago.app/", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://docs.luminago.app/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: "https://docs.luminago.app/smart-home-privacy", lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
