"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/cn";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#showcase", label: t.nav.app },
    { href: "#download", label: t.nav.download },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/15 group-hover:ring-brand-400/80 transition">
              <Image
                src="/logo.png"
                alt="Lumina Go"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="text-[17px] font-semibold tracking-tight">
              Lumina Go
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/75">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#download"
              className="rounded-full bg-white text-ink px-4 py-1.5 text-sm font-medium hover:bg-brand-50 transition"
            >
              {t.nav.download}
            </a>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <LanguageSwitcher />
              <a
                href="#download"
                className="rounded-full bg-white text-ink px-4 py-1.5 text-sm font-medium"
              >
                {t.nav.download}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
