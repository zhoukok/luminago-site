"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Keyboard,
  MousePointer2,
  Mic,
  Type,
  Sparkles,
  SunMoon,
  Sun,
  Moon,
  Check,
  Mail,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Visual =
  | { type: "phone"; src: string }
  | { type: "dual"; srcA: string; srcB: string }
  | { type: "chat" }
  | { type: "theme" };

// Scenario → icon
const ICONS: ReactNode[] = [
  <Gamepad2 key="gp" size={20} className="text-brand-200" />,
  <MousePointer2 key="mm" size={20} className="text-brand-200" />,
  <Keyboard key="kb" size={20} className="text-brand-200" />,
  <Type key="tp" size={20} className="text-brand-200" />,
  <Mic key="mic" size={20} className="text-brand-200" />,
  <Sparkles key="sp" size={20} className="text-brand-200" />,
  <SunMoon key="sm" size={20} className="text-brand-200" />,
];

// Scenario → visual
const VISUALS: Visual[] = [
  { type: "phone", src: "/screenshots/s1.png" }, // 01 Remote
  {
    type: "dual",
    srcA: "/screenshots/s3.png",
    srcB: "/screenshots/s4.png",
  }, // 02 Touchpad + Air mouse
  { type: "phone", src: "/screenshots/s2.png" }, // 03 Keyboard
  { type: "phone", src: "/screenshots/s6.png" }, // 04 Text
  { type: "phone", src: "/screenshots/s5.png" }, // 05 Voice
  { type: "chat" }, // 06 AI help
  { type: "theme" }, // 07 Day / Night themes
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
              visual={VISUALS[i]}
              reverse={i % 2 === 1}
              highlight={i === 4}
            />
          ))}
        </div>

        <ClosingCard
          eyebrow={t.features.closing.eyebrow}
          title={t.features.closing.title}
          desc={t.features.closing.desc}
          ctaLabel={t.features.closing.cta_label}
          ctaHref={t.features.closing.cta_href}
        />
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
  visual,
  reverse,
  highlight,
}: {
  index: number;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: [string, string, string];
  icon: ReactNode;
  visual: Visual;
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
                Most loved
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

        <VisualRenderer visual={visual} alt={title} />
      </motion.div>
    </div>
  );
}

function VisualRenderer({ visual, alt }: { visual: Visual; alt: string }) {
  if (visual.type === "phone") {
    return <PhoneFrame src={visual.src} alt={alt} />;
  }
  if (visual.type === "dual") {
    return <DualPhones srcA={visual.srcA} srcB={visual.srcB} alt={alt} />;
  }
  if (visual.type === "chat") {
    return <ChatCard />;
  }
  return <ThemeCard />;
}

function PhoneFrame({
  src,
  alt,
  size = "default",
}: {
  src: string;
  alt: string;
  size?: "default" | "small";
}) {
  const sizeClasses =
    size === "small"
      ? "w-[180px] sm:w-[200px] lg:w-[220px]"
      : "w-[240px] sm:w-[260px] lg:w-[300px]";
  return (
    <div className="relative">
      <div
        className={
          "relative mx-auto aspect-[9/19.5] overflow-hidden rounded-[42px] border border-white/15 bg-black p-[6px] shadow-[0_40px_100px_-20px_rgba(0,15,240,0.55)] ring-1 ring-white/5 " +
          sizeClasses
        }
      >
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
          className="pointer-events-none absolute left-1/2 top-[14px] h-[18px] w-[80px] -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/10"
        />
      </div>
    </div>
  );
}

function DualPhones({
  srcA,
  srcB,
  alt,
}: {
  srcA: string;
  srcB: string;
  alt: string;
}) {
  return (
    <div className="relative flex items-center justify-center pr-4 pl-4 sm:pr-8 sm:pl-8">
      <div className="relative -mr-6 sm:-mr-10 translate-y-2 -rotate-[6deg]">
        <PhoneFrame src={srcA} alt={alt + " — touchpad"} size="small" />
      </div>
      <div className="relative z-10 -translate-y-2 rotate-[6deg]">
        <PhoneFrame src={srcB} alt={alt + " — air mouse"} size="small" />
      </div>
    </div>
  );
}

function ChatCard() {
  return (
    <div className="relative w-full max-w-[340px]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.01] p-5 shadow-[0_40px_100px_-20px_rgba(0,15,240,0.45)] ring-1 ring-white/5 backdrop-blur">
        <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/25 ring-1 ring-brand-400/50">
            <Sparkles size={14} className="text-brand-100" />
          </div>
          <div>
            <div className="text-[13px] font-medium text-white/90 leading-none">
              AI Projector Assistant
            </div>
            <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-white/40">
              ChatGPT-class · model-aware
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[10px] font-mono text-emerald-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            online
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <ChatBubble role="user" text="Why is my image coming out green?" />
          <ChatBubble
            role="assistant"
            text="Sounds like an RGB channel misalignment. On your projector, open Settings → Color → Reset. If it persists, try a different HDMI cable — worn-out cables drop the red channel first."
          />
          <ChatBubble role="user" text="How do I enter Bluetooth-speaker mode?" />
        </div>

        <div className="mt-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] text-white/40">
          Ask anything about your projector…
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[36px] bg-brand-500/10 blur-2xl"
      />
    </div>
  );
}

function ChatBubble({
  role,
  text,
}: {
  role: "user" | "assistant";
  text: string;
}) {
  const isUser = role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          "max-w-[85%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-relaxed " +
          (isUser
            ? "bg-white/[0.08] text-white/85 rounded-br-sm ring-1 ring-white/10"
            : "bg-brand-500/25 text-brand-50 rounded-bl-sm ring-1 ring-brand-400/30")
        }
      >
        {text}
      </div>
    </div>
  );
}

function ThemeCard() {
  return (
    <div className="relative flex items-center justify-center pr-4 pl-4 sm:pr-8 sm:pl-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] bg-brand-500/10 blur-3xl"
      />
      <div className="relative -mr-6 sm:-mr-10 translate-y-2 -rotate-[6deg]">
        <ThemePhone
          variant="light"
          src="/screenshots/s1-light.png"
          alt="Remote page, Day theme"
        />
      </div>
      <div className="relative z-10 -translate-y-2 rotate-[6deg]">
        <ThemePhone
          variant="dark"
          src="/screenshots/s1.png"
          alt="Remote page, Night theme"
        />
      </div>
    </div>
  );
}

function ThemePhone({
  variant,
  src,
  alt,
}: {
  variant: "light" | "dark";
  src: string;
  alt: string;
}) {
  const isDark = variant === "dark";
  return (
    <div className="relative">
      <PhoneFrame src={src} alt={alt} size="small" />
      <div
        className={
          "absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ring-1 " +
          (isDark
            ? "bg-black/70 text-white/85 ring-white/20 backdrop-blur"
            : "bg-white text-ink ring-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]")
        }
      >
        {isDark ? <Moon size={10} /> : <Sun size={10} />}
        {isDark ? "Night" : "Day"}
      </div>
    </div>
  );
}

function ClosingCard({
  eyebrow,
  title,
  desc,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-28 sm:mt-36"
    >
      <div className="relative overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-500/15 via-white/[0.02] to-white/[0.01] px-6 py-10 sm:px-12 sm:py-14 ring-1 ring-brand-400/20 shadow-[0_40px_100px_-20px_rgba(0,15,240,0.55)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
        />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/25 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-brand-100 ring-1 ring-brand-400/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            {eyebrow}
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h3>

          <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
            {desc}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-brand-50 transition"
            >
              <Mail size={14} />
              {ctaLabel}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
