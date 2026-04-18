"use client";

import { motion } from "framer-motion";
import { ScanLine } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "@/components/LanguageProvider";

const IOS_URL = "https://apps.apple.com/cn/app/lumina-go/id6761456385";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.htc.btremote.remote";

export function Download() {
  const { t } = useLanguage();

  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-mono tracking-widest uppercase text-brand-300">
            {t.download.section_eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t.download.section_title}
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            {t.download.section_lead}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
          <StoreCard
            brand="ios"
            title={t.download.ios_title}
            subtitle={t.download.ios_subtitle}
            scanHint={t.download.ios_scan_hint}
            url={IOS_URL}
          />
          <StoreCard
            brand="android"
            title={t.download.android_title}
            subtitle={t.download.android_subtitle}
            scanHint={t.download.android_scan_hint}
            url={ANDROID_URL}
            comingSoonLabel={t.download.coming_soon}
          />
        </div>

        <div className="mt-10 text-center text-xs tracking-wide text-white/45">
          {t.download.free_note}
        </div>
      </div>
    </section>
  );
}

function StoreCard({
  brand,
  title,
  subtitle,
  scanHint,
  url,
  comingSoonLabel,
}: {
  brand: "ios" | "android";
  title: string;
  subtitle: string;
  scanHint: string;
  url: string;
  comingSoonLabel?: string;
}) {
  const isComingSoon = brand === "android";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 sm:p-8 backdrop-blur"
    >
      {isComingSoon && comingSoonLabel && (
        <div className="absolute right-5 top-5 z-10 rounded-full bg-brand-500/30 px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-wider text-brand-100 ring-1 ring-brand-400/50">
          {comingSoonLabel}
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
          {brand === "ios" ? (
            <AppleLogo className="h-5 w-5 text-white" />
          ) : (
            <GooglePlayLogo className="h-5 w-5" />
          )}
        </div>
        <div className="min-w-0">
          <div className="text-[17px] font-semibold text-white">{title}</div>
          <div className="mt-0.5 text-xs text-white/50">{subtitle}</div>
        </div>
      </div>

      <div className="mt-7 flex items-center gap-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          className={
            "relative flex-none rounded-2xl bg-white p-3 transition-transform " +
            (isComingSoon
              ? "pointer-events-none opacity-70 grayscale-[35%]"
              : "hover:scale-[1.03] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)]")
          }
        >
          <QRCodeSVG
            value={url}
            size={136}
            bgColor="#ffffff"
            fgColor="#000FF0"
            level="H"
            marginSize={0}
            imageSettings={{
              src: "/logo.png",
              height: 38,
              width: 38,
              excavate: true,
            }}
          />
        </a>

        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-300">
            <ScanLine size={14} />
            {scanHint}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "mt-3 block truncate text-sm text-white/65 underline decoration-white/20 underline-offset-4 transition " +
              (isComingSoon
                ? "pointer-events-none"
                : "hover:text-white hover:decoration-white/60")
            }
          >
            {url.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.564 13.273c-.03-3.046 2.487-4.515 2.6-4.587-1.418-2.073-3.625-2.358-4.408-2.391-1.876-.19-3.662 1.107-4.615 1.107-.952 0-2.42-1.08-3.974-1.05-2.046.03-3.932 1.187-4.986 3.017-2.124 3.683-.544 9.144 1.523 12.134.993 1.465 2.17 3.106 3.716 3.05 1.488-.06 2.051-.966 3.851-.966 1.8 0 2.307.966 3.88.933 1.603-.03 2.615-1.492 3.596-2.962 1.134-1.696 1.603-3.34 1.628-3.425-.035-.015-3.124-1.2-3.155-4.766z M14.41 4.67c.822-.996 1.378-2.38 1.226-3.755-1.184.048-2.62.79-3.47 1.784-.76.88-1.43 2.288-1.25 3.64 1.32.1 2.67-.672 3.494-1.668z" />
    </svg>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gp-blue"
          gradientUnits="userSpaceOnUse"
          x1="11.87"
          y1="9.73"
          x2="4.24"
          y2="17.37"
        >
          <stop offset="0" stopColor="#00A0FF" />
          <stop offset="0.01" stopColor="#00A1FF" />
          <stop offset="0.26" stopColor="#00BEFF" />
          <stop offset="0.51" stopColor="#00D2FF" />
          <stop offset="0.76" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id="gp-yellow"
          gradientUnits="userSpaceOnUse"
          x1="19.83"
          y1="12"
          x2="2.84"
          y2="12"
        >
          <stop offset="0" stopColor="#FFE000" />
          <stop offset="0.41" stopColor="#FFBD00" />
          <stop offset="0.78" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id="gp-red"
          gradientUnits="userSpaceOnUse"
          x1="13.8"
          y1="13.6"
          x2="2.9"
          y2="24.5"
        >
          <stop offset="0" stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="gp-green"
          gradientUnits="userSpaceOnUse"
          x1="4.5"
          y1="2.2"
          x2="11.7"
          y2="9.4"
        >
          <stop offset="0" stopColor="#32A071" />
          <stop offset="0.07" stopColor="#2DA771" />
          <stop offset="0.48" stopColor="#15CF74" />
          <stop offset="0.8" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gp-blue)"
        d="M3.5 2.2c-.3.3-.4.8-.4 1.4v16.7c0 .6.2 1.1.5 1.4l.1.1L12.6 12 3.6 2.2z"
      />
      <path
        fill="url(#gp-yellow)"
        d="M15.6 15L12.6 12l3-3 3.4 1.9c1 .5 1 1.4 0 2L15.6 15z"
      />
      <path
        fill="url(#gp-red)"
        d="M15.6 15L12.6 12 3.5 21.8c.3.3.8.4 1.4 0L15.6 15"
      />
      <path
        fill="url(#gp-green)"
        d="M4.9 2.2c-.6-.4-1.1-.3-1.4 0L12.6 12l3-3-10.7-6.8z"
      />
    </svg>
  );
}
