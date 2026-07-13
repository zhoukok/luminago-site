import type { MetadataRoute } from "next";

const BASE = "https://luminago.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // 单页站,只有 `/`;#features / #download 是同页锚点,Google 会归一到 `/`,
    // 放进 sitemap 无意义,已移除。docs 子域的隐私页保留,便于被发现。
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "https://docs.luminago.app/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
