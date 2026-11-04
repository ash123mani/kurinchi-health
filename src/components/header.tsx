"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SITE, whatsappLink } from "@/lib/site";

type HeaderProps = {
  locale: Locale;
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  orderMessage: string;
};

export function Header({
  locale,
  brand,
  nav,
  common,
  orderMessage,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentPath =
    pathname.replace(/^\/(en|ta)(?=\/|$)/, "") || "/";

  const items = [
    { href: "/", label: nav.home },
    { href: "/products", label: nav.products },
    { href: "/about", label: nav.about },
    { href: "/contact", label: nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? currentPath === "/"
      : currentPath === href || currentPath.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line/80 bg-cream/90 backdrop-blur-xl"
          : "border-transparent bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-site flex h-[74px] items-center justify-between gap-4">
        <Logo
          locale={locale}
          primary={brand.logoPrimary}
          secondary={brand.logoSecondary}
          homeLabel={common.a11y.logoHome.replace("{name}", brand.name)}
        />

        <nav
          aria-label={common.a11y.mainNav}
          className="hidden items-center gap-1 lg:flex"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              hrefLang={locale}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-forest/8 text-forest"
                  : "text-ink-2 hover:bg-forest/5 hover:text-forest"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher
            locale={locale}
            label={common.language.other}
            ariaLabel={common.language.switchToAria}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs font-bold text-ink-2 transition-colors hover:border-forest/40 hover:text-forest"
            compact
          />
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm font-semibold text-ink-2 transition-colors hover:text-forest"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappLink(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-0! px-5! py-2.5! text-[13px]"
          >
            {common.actions.orderWhatsApp}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/60 text-forest lg:hidden"
          aria-label={open ? common.a11y.closeMenu : common.a11y.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-cream/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label={common.a11y.mobileNav}
          className="container-site flex flex-col gap-1 py-4"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              hrefLang={locale}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                isActive(item.href)
                  ? "bg-forest text-cream"
                  : "text-ink-2 hover:bg-forest/5"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher
            locale={locale}
            label={common.language.other}
            ariaLabel={common.language.switchToAria}
            className="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-ink-2 hover:bg-forest/5"
          />
          <a
            href={whatsappLink(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-2"
          >
            {common.actions.orderWhatsApp}
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="mt-1 px-4 py-2 text-center text-sm font-semibold text-ink-2"
          >
            {common.actions.call.replace("{phone}", SITE.phoneDisplay)}
          </a>
        </nav>
      </div>
    </header>
  );
}
