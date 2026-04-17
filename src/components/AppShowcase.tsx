"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const SHOTS = [
  "/screenshots/s1.png",
  "/screenshots/s2.png",
  "/screenshots/s3.png",
  "/screenshots/s4.png",
  "/screenshots/s5.png",
  "/screenshots/s6.png",
];

export function AppShowcase() {
  const { t } = useLanguage();
  return (
    <section id="showcase" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono tracking-widest uppercase text-brand-300">
            {t.showcase.section_eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t.showcase.section_title}
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            {t.showcase.section_lead}
          </p>
        </div>

        <div className="mt-16">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
            {SHOTS.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="snap-center flex-none w-64 lg:w-auto"
                style={{
                  transform:
                    i % 2 === 1
                      ? "translateY(28px)"
                      : i === 2
                      ? "translateY(-12px)"
                      : undefined,
                }}
              >
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] ring-1 ring-white/5 shadow-[0_20px_60px_-10px_rgba(0,15,240,0.35)]">
                  <Image
                    src={src}
                    alt={`Lumina Go screenshot ${i + 1}`}
                    fill
                    sizes="(min-width:1024px) 15vw, 256px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
