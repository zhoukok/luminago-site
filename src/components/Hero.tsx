"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-28"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 top-32 mx-auto h-[420px] max-w-4xl rounded-full opacity-60 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,15,240,0.45), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-[13px] text-brand-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
            </span>
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-[44px] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04]">
            <span className="block text-white">{t.hero.title_line1}</span>
            <span className="block text-gradient-brand">
              {t.hero.title_line2}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink href="#download" variant="primary" size="lg">
              <Download size={17} />
              {t.hero.cta_primary}
            </ButtonLink>
            <ButtonLink href="#features" variant="ghost" size="lg">
              {t.hero.cta_secondary}
              <ArrowDown size={16} />
            </ButtonLink>
          </div>
        </motion.div>

        <PhoneTrio />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Chip label={t.hero.chip_latency} />
          <Chip label={t.hero.chip_voice} />
          <Chip label={t.hero.chip_offline} />
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
      {label}
    </span>
  );
}

function PhoneTrio() {
  const phones = [
    { src: "/screenshots/s2.png", side: "left" as const },
    { src: "/screenshots/s1.png", side: "center" as const },
    { src: "/screenshots/s3.png", side: "right" as const },
  ];

  return (
    <div className="relative mx-auto mt-16 flex h-[480px] sm:h-[600px] lg:h-[640px] items-end justify-center">
      {phones.map((p, i) => {
        const isCenter = p.side === "center";
        const delay = isCenter ? 0.15 : 0.25 + i * 0.05;

        const transform =
          p.side === "left"
            ? "translateX(calc(50% - 38%)) rotate(-7deg) scale(0.86)"
            : p.side === "right"
            ? "translateX(calc(-50% + 38%)) rotate(7deg) scale(0.86)"
            : "translateX(-50%) rotate(0deg) scale(1)";

        return (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 48, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
            className={[
              "absolute left-1/2 bottom-0",
              p.side === "left" || p.side === "right"
                ? "hidden sm:block"
                : "",
              isCenter ? "z-20" : "z-10",
            ].join(" ")}
            style={{
              transformOrigin: "bottom center",
              transform,
            }}
          >
            <PhoneMockup
              src={p.src}
              size={isCenter ? "lg" : "md"}
              priority={isCenter}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function PhoneMockup({
  src,
  size,
  priority,
}: {
  src: string;
  size: "md" | "lg";
  priority?: boolean;
}) {
  const w = size === "lg" ? "w-[240px] sm:w-[280px] lg:w-[320px]" : "w-[220px] lg:w-[260px]";
  const glow =
    size === "lg"
      ? "shadow-[0_50px_140px_-20px_rgba(0,15,240,0.65)]"
      : "shadow-[0_30px_90px_-15px_rgba(0,15,240,0.5)]";

  return (
    <div
      className={[
        "relative",
        w,
        "aspect-[9/19.5]",
        "rounded-[42px] p-[10px]",
        "bg-gradient-to-b from-[#1a1a2a] to-[#0a0a15]",
        "ring-1 ring-white/10",
        glow,
      ].join(" ")}
    >
      <div className="absolute left-1/2 top-[14px] z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full w-full overflow-hidden rounded-[32px]">
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="(min-width:1024px) 320px, 260px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
