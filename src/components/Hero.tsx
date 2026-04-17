"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Play, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-100">
            <Sparkles size={14} className="text-brand-300" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-white">{t.hero.title_line1}</span>
            <span className="block text-gradient-brand">
              {t.hero.title_line2}
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3" id="download">
            <ButtonLink
              href="https://apps.apple.com/app/lumina-go"
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener"
            >
              <Apple size={18} />
              {t.hero.cta_ios}
            </ButtonLink>
            <ButtonLink
              href="https://play.google.com/store/apps/details?id=com.htc.btremote.remote"
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener"
            >
              <Play size={16} />
              {t.hero.cta_android}
            </ButtonLink>
            <ButtonLink
              href="https://docs.luminago.app"
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener"
            >
              {t.hero.cta_docs}
              <ArrowRight size={16} />
            </ButtonLink>
          </div>

          <p className="mt-6 text-xs tracking-wide text-white/45">
            {t.hero.sub_small}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="relative aspect-[16/8.5] rounded-3xl overflow-hidden bg-glass ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(0,15,240,0.45)]">
            <Image
              src="/feature.png"
              alt="Lumina Go feature"
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute -top-8 -left-8 hidden md:block animate-float-slow">
            <div className="rounded-2xl bg-glass px-4 py-3 text-sm text-white/80 shadow-2xl">
              <div className="text-brand-300 text-[11px] uppercase tracking-wider">
                Latency
              </div>
              <div className="font-mono text-xl text-white">≤ 20 ms</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block animate-float-slow">
            <div className="rounded-2xl bg-glass px-4 py-3 text-sm text-white/80 shadow-2xl">
              <div className="text-brand-300 text-[11px] uppercase tracking-wider">
                Voice intents
              </div>
              <div className="font-mono text-xl text-white">50+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
