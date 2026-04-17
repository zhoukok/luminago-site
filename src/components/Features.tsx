"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Keyboard,
  Hand,
  MousePointer2,
  Mic,
  Type,
  Check,
} from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const ICONS: ReactNode[] = [
  <Gamepad2 key="gp" size={20} className="text-brand-200" />,
  <Keyboard key="kb" size={20} className="text-brand-200" />,
  <Hand key="hd" size={20} className="text-brand-200" />,
  <MousePointer2 key="mm" size={20} className="text-brand-200" />,
  <Mic key="mic" size={20} className="text-brand-200" />,
  <Type key="tp" size={20} className="text-brand-200" />,
];

const SHOTS = [
  "/screenshots/s1.png",
  "/screenshots/s2.png",
  "/screenshots/s3.png",
  "/screenshots/s4.png",
  "/screenshots/s5.png",
  "/screenshots/s6.png",
];

export function Features() {
  const { t } = useLanguage();

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

        <div className="mt-20 sm:mt-28 space-y-24 sm:space-y-32">
          {t.features.items.map((item, i) => (
            <FeatureRow
              key={item.title}
              index={i}
              eyebrow={item.eyebrow}
              title={item.title}
              desc={item.desc}
              bullets={item.bullets}
              icon={ICONS[i]}
              shot={SHOTS[i]}
              reverse={i % 2 === 1}
              highlight={i === 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  index,
  eyebrow,
  title,
  desc,
  bullets,
  icon,
  shot,
  reverse,
  highlight,
}: {
  index: number;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: [string, string, string];
  icon: ReactNode;
  shot: string;
  reverse: boolean;
  highlight: boolean;
}) {
  return (
    <div
      className={
        "relative grid gap-10 lg:gap-16 items-center lg:grid-cols-2 " +
        (reverse ? "lg:[&>*:first-child]:order-2" : "")
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -top-10 -left-2 text-[110px] sm:text-[140px] font-black leading-none text-white/[0.04]"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative">
          <div
            className={
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wider ring-1 " +
              (highlight
                ? "bg-brand-500/25 text-brand-100 ring-brand-400/50"
                : "bg-white/[0.04] text-white/70 ring-white/10")
            }
          >
            <span className="relative flex h-1.5 w-1.5">
              {highlight && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
              )}
              <span
                className={
                  "relative inline-flex h-1.5 w-1.5 rounded-full " +
                  (highlight ? "bg-brand-300" : "bg-white/50")
                }
              />
            </span>
            {eyebrow}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div
              className={
                "inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 " +
                (highlight
                  ? "bg-brand-500/30 ring-brand-400/60"
                  : "bg-brand-500/15 ring-brand-400/25")
              }
            >
              {icon}
            </div>
            {highlight && (
              <span className="rounded-full bg-brand-500/25 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-brand-100 ring-1 ring-brand-400/40">
                Core feature
              </span>
            )}
          </div>

          <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
            {title}
          </h3>

          <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">
            {desc}
          </p>

          <ul className="mt-7 space-y-2.5 max-w-xl">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white/75"
              >
                <span
                  className={
                    "mt-[3px] flex h-4 w-4 flex-none items-center justify-center rounded-full ring-1 " +
                    (highlight
                      ? "bg-brand-500/30 ring-brand-400/60"
                      : "bg-white/[0.05] ring-white/15")
                  }
                >
                  <Check
                    size={11}
                    className={highlight ? "text-brand-200" : "text-white/70"}
                    strokeWidth={3}
                  />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex justify-center lg:justify-end"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className={
              "absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl " +
              (highlight ? "bg-brand-500/25" : "bg-brand-500/15")
            }
          />
        </div>

        <PhoneFrame src={shot} alt={title} />
      </motion.div>
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-[9/19.5] w-[240px] sm:w-[260px] lg:w-[300px] overflow-hidden rounded-[42px] border border-white/15 bg-black p-[6px] shadow-[0_40px_100px_-20px_rgba(0,15,240,0.55)] ring-1 ring-white/5">
        <div className="relative h-full w-full overflow-hidden rounded-[36px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width:1024px) 300px, 260px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/30"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[14px] h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10"
        />
      </div>
    </div>
  );
}
