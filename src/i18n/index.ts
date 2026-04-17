import { en } from "./en";
import { zh } from "./zh";
import { ja } from "./ja";
import { es } from "./es";
import type { Dict, Lang } from "./types";

export const dictionaries: Record<Lang, Dict> = { en, zh, ja, es };

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "es", label: "Español" },
];

export function detectLang(navigatorLang: string | undefined): Lang {
  if (!navigatorLang) return "en";
  const lower = navigatorLang.toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  if (lower.startsWith("ja")) return "ja";
  if (lower.startsWith("es")) return "es";
  return "en";
}

export type { Dict, Lang };
