import { en } from "./en";
import { zh } from "./zh";
import { zhHant } from "./zh-Hant";
import { ja } from "./ja";
import { ko } from "./ko";
import { es } from "./es";
import { pt } from "./pt";
import { fr } from "./fr";
import { it } from "./it";
import type { Dict, Lang } from "./types";

export const dictionaries: Record<Lang, Dict> = {
  en,
  zh,
  "zh-Hant": zhHant,
  ja,
  ko,
  es,
  pt,
  fr,
  it,
};

// Order of `LANGS` is also the order shown in the language switcher dropdown.
// Roughly: English first, then by speaker count for projector market relevance.
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "zh-Hant", label: "繁體中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
];

/**
 * Map browser navigator.language → our internal Lang code.
 *
 * BCP-47 quirks we handle:
 *   - `zh-TW` / `zh-HK` / `zh-MO` / `zh-Hant*` → Traditional Chinese
 *   - `zh-CN` / `zh-SG` / `zh-Hans*` / bare `zh` → Simplified Chinese
 *   - `pt-BR` / `pt-PT` / bare `pt`           → Portuguese (single bucket; the
 *     copy is written in a register that reads cleanly in both Brazil & Portugal,
 *     biased to BR vocabulary because it is by far the larger market)
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
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("pt")) return "pt";
  if (lower.startsWith("fr")) return "fr";
  if (lower.startsWith("it")) return "it";
  return "en";
}

export type { Dict, Lang };
