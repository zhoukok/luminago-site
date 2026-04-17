"use client";

import { motion } from "framer-motion";
import {
  Bluetooth,
  MousePointer2,
  Mic,
  Keyboard,
  PlayCircle,
  MessageCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const ICONS: ReactNode[] = [
  <Bluetooth key="bt" size={22} className="text-brand-300" />,
  <MousePointer2 key="mm" size={22} className="text-brand-300" />,
  <Mic key="mic" size={22} className="text-brand-300" />,
  <Keyboard key="kb" size={22} className="text-brand-300" />,
  <PlayCircle key="pc" size={22} className="text-brand-300" />,
  <MessageCircle key="mc" size={22} className="text-brand-300" />,
];

export function Features() {
  const { t } = useLanguage();
  const highlight = 2;

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono tracking-widest uppercase text-brand-300">
            {t.features.section_eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t.features.section_title}
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            {t.features.section_lead}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const isHighlight = i === highlight;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={
                  "group relative overflow-hidden rounded-2xl border p-6 transition-all " +
                  (isHighlight
                    ? "border-brand-400/50 bg-gradient-to-br from-brand-500/15 to-white/[0.02] ring-1 ring-brand-400/20 lg:col-span-1 lg:row-span-1"
                    : "border-white/10 bg-white/[0.03] hover:border-brand-400/40 hover:bg-white/[0.05]")
                }
              >
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--x,50%) var(--y,50%), rgba(0,15,240,0.18), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div
                    className={
                      "inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 " +
                      (isHighlight
                        ? "bg-brand-500/30 ring-brand-400/60"
                        : "bg-brand-500/15 ring-brand-400/30")
                    }
                  >
                    {ICONS[i]}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                    {isHighlight && (
                      <span className="ml-2 inline-block rounded-full bg-brand-500/30 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-brand-100 align-middle">
                        Core
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
