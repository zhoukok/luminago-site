"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { LANGS } from "@/i18n";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={14} />
        <span>{current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-ink-soft/95 backdrop-blur-xl shadow-2xl">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={cn(
                "block w-full text-left px-3 py-2 text-sm transition",
                l.code === lang
                  ? "bg-brand/20 text-white"
                  : "text-white/75 hover:bg-white/5 hover:text-white"
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
