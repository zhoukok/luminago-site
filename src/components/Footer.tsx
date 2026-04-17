"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer() {
  const { t } = useLanguage();

  const product = [
    { label: t.footer.links.features, href: "#features" },
    { label: t.footer.links.app, href: "#showcase" },
    { label: t.footer.links.download, href: "#download" },
  ];
  const legal = [
    {
      label: t.footer.links.privacy,
      href: "https://docs.luminago.app/privacy",
      external: true,
    },
    {
      label: t.footer.links.contact,
      href: "mailto:luminago@hotack.cn",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/40 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg ring-1 ring-white/15">
                <Image
                  src="/logo.png"
                  alt="Lumina Go"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div className="text-lg font-semibold tracking-tight">
                Lumina Go
              </div>
            </div>
            <p className="mt-4 text-sm text-white/55 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-6">
              <div className="mb-2 text-[11px] uppercase tracking-widest text-white/35 font-mono">
                {t.footer.language}
              </div>
              <LanguageSwitcher />
            </div>
          </div>

          <FooterCol title={t.footer.cols.product} items={product} />
          <FooterCol title={t.footer.cols.legal} items={legal} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {t.footer.copyright} · {t.footer.company_zh}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="mb-3 text-[11px] uppercase tracking-widest text-white/35 font-mono">
        {title}
      </div>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              target={i.external ? "_blank" : undefined}
              rel={i.external ? "noopener noreferrer" : undefined}
              className="text-white/65 hover:text-white transition"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
