import { en } from "./en";
import { zh } from "./zh";
import { zhHant } from "./zh-Hant";
import { ja } from "./ja";
import { ko } from "./ko";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";
import { es } from "./es";
import { pt } from "./pt";
import { ru } from "./ru";
import { tr } from "./tr";
import { ar } from "./ar";
import { hi } from "./hi";
import { id } from "./id";
import { vi } from "./vi";
import { th } from "./th";
import type { Dict, Lang } from "./types";

export const dictionaries: Record<Lang, Dict> = {
  en,
  zh,
  "zh-Hant": zhHant,
  ja,
  ko,
  de,
  fr,
  it,
  es,
  pt,
  ru,
  tr,
  ar,
  hi,
  id,
  vi,
  th,
};

// Order of `LANGS` is also the order shown in the language switcher dropdown.
// Roughly: English first, then by likely projector-market relevance — CJK,
// Western Europe, then SE Asia / MENA / India.
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zh-Hant", label: "繁體中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "tr", label: "Türkçe" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
];

// Languages that render right-to-left.
export const RTL_LANGS: ReadonlySet<Lang> = new Set<Lang>(["ar"]);

export function isRTL(lang: Lang): boolean {
  return RTL_LANGS.has(lang);
}

/**
 * Map browser navigator.language → our internal Lang code.
 *
 * BCP-47 quirks we handle:
 *   - `zh-TW` / `zh-HK` / `zh-MO` / `zh-Hant*` → Traditional Chinese
 *   - `zh-CN` / `zh-SG` / `zh-Hans*` / bare `zh` → Simplified Chinese
 *   - `pt-BR` / `pt-PT` / bare `pt`           → Portuguese (single bucket; the
 *     copy is written in a register that reads cleanly in both Brazil & Portugal,
 *     biased to BR vocabulary because it is by far the larger market)
 *   - Indonesian: browsers may send the legacy ISO 639 code `in`; we accept both
 *     `id-*` and `in-*`.
 *   - Hebrew (`he` / `iw`) is not supported — falls through to English.
 *   - We do not yet ship a dedicated `nl`, `pl`, `nb`, etc.; they fall back to en.
 */
export function detectLang(navigatorLang: string | undefined): Lang {
  if (!navigatorLang) return "en";
  const lower = navigatorLang.toLowerCase();

  if (lower.startsWith("zh")) {
    if (
      lower.startsWith("zh-tw") ||
      lower.startsWith("zh-hk") ||
      lower.startsWith("zh-mo") ||
      lower.startsWith("zh-hant")
    ) {
      return "zh-Hant";
    }
    return "zh";
  }
  if (lower.startsWith("ja")) return "ja";
  if (lower.startsWith("ko")) return "ko";
  if (lower.startsWith("de")) return "de";
  if (lower.startsWith("fr")) return "fr";
  if (lower.startsWith("it")) return "it";
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("ru")) return "ru";
  if (lower.startsWith("tr")) return "tr";
  if (lower.startsWith("ar")) return "ar";
  if (lower.startsWith("hi")) return "hi";
  // `in` is the legacy ISO 639 code that some browsers still emit for Indonesian.
  if (lower.startsWith("id") || lower.startsWith("in")) return "id";
  if (lower.startsWith("vi")) return "vi";
  if (lower.startsWith("th")) return "th";
  return "en";
}

export type { Dict, Lang };
