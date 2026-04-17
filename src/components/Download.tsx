"use client";

import { motion } from "framer-motion";
import { Apple, Play, ScanLine } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "@/components/LanguageProvider";

const IOS_URL = "https://apps.apple.com/app/lumina-go";
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
  const Icon = brand === "ios" ? Apple : Play;

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
          <Icon size={20} className="text-white" />
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
              ? "opacity-70 grayscale-[35%]"
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
              height: 28,
              width: 28,
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
              (isComingSoon ? "pointer-events-none" : "hover:text-white hover:decoration-white/60")
            }
          >
            {url.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
