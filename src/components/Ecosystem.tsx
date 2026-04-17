"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const PARTNERS = [
  { name: "Amazon Alexa", tag: "Live", tone: "live" as const },
  { name: "Google Home", tag: "Live", tone: "live" as const },
  { name: "Xiao Ai · 小爱同学", tag: "Q3 2026", tone: "soon" as const },
  { name: "Tmall Genie · 天猫精灵", tag: "Q3 2026", tone: "soon" as const },
  { name: "Siri Shortcuts", tag: "Live", tone: "live" as const },
  { name: "Matter", tag: "Q4 2026", tone: "soon" as const },
];

export function Ecosystem() {
  const { t } = useLanguage();
  return (
    <section
      id="ecosystem"
      className="relative py-24 sm:py-32 border-y border-white/10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono tracking-widest uppercase text-brand-300">
            {t.ecosystem.section_eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t.ecosystem.section_title}
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            {t.ecosystem.section_lead}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-brand-400/40 transition"
            >
              <div className="text-sm font-medium text-white">{p.name}</div>
              <div
                className={
                  "mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase " +
                  (p.tone === "live"
                    ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
                    : "bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/30")
                }
              >
                {p.tone === "live" ? p.tag : t.ecosystem.coming_soon}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/15 to-transparent p-10 sm:p-14 text-center"
        >
          <p className="text-2xl sm:text-3xl font-semibold text-white">
            {t.ecosystem.quote}
          </p>
          <p className="mt-3 text-white/55">{t.ecosystem.quote_by}</p>
        </motion.div>
      </div>
    </section>
  );
}
