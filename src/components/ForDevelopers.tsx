"use client";

import { motion } from "framer-motion";
import { Github, BookOpen, Activity } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ButtonLink } from "@/components/ui/Button";

const CURL = `curl -s "https://proxy.luminago.app/api/streaming?title=dune&country=us" | jq`;

export function ForDevelopers() {
  const { t } = useLanguage();
  return (
    <section id="developers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-brand-300">
              {t.developers.section_eyebrow}
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t.developers.section_title}
            </h2>
            <p className="mt-4 text-white/65 text-lg leading-relaxed">
              {t.developers.section_lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="https://github.com/zhoukok"
                variant="secondary"
                size="md"
                target="_blank"
                rel="noopener"
              >
                <Github size={16} />
                {t.developers.btn_github}
              </ButtonLink>
              <ButtonLink
                href="https://docs.luminago.app"
                variant="secondary"
                size="md"
                target="_blank"
                rel="noopener"
              >
                <BookOpen size={16} />
                {t.developers.btn_docs}
              </ButtonLink>
              <ButtonLink
                href="https://proxy.luminago.app/health"
                variant="ghost"
                size="md"
                target="_blank"
                rel="noopener"
              >
                <Activity size={16} />
                {t.developers.btn_api}
              </ButtonLink>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-ink-soft shadow-[0_30px_80px_-20px_rgba(0,15,240,0.4)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-[11px] font-mono text-white/40 tracking-wider">
                  bash · curl
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs text-white/50 mb-2 font-mono">
                  {t.developers.curl_caption}
                </div>
                <pre className="text-[13px] leading-6 text-brand-100 font-mono overflow-x-auto whitespace-pre-wrap break-all">
                  <span className="text-white/40">$ </span>
                  {CURL}
                </pre>
                <div className="mt-5 text-[13px] leading-6 text-white/65 font-mono">
                  <div className="text-white/35"># sample response</div>
                  <div>{'{'}</div>
                  <div>  <span className="text-emerald-300">&quot;query&quot;</span>: &quot;dune&quot;,</div>
                  <div>  <span className="text-emerald-300">&quot;region&quot;</span>: &quot;us&quot;,</div>
                  <div>  <span className="text-emerald-300">&quot;streams&quot;</span>: [</div>
                  <div>    {'{'} <span className="text-brand-300">&quot;service&quot;</span>: &quot;netflix&quot;, <span className="text-brand-300">&quot;type&quot;</span>: &quot;subscription&quot; {'}'},</div>
                  <div>    {'{'} <span className="text-brand-300">&quot;service&quot;</span>: &quot;apple_tv&quot;,  <span className="text-brand-300">&quot;type&quot;</span>: &quot;rent&quot; {'}'}</div>
                  <div>  ]</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
