"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { SITE, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line/80 bg-cream/90 backdrop-blur-xl"
          : "border-transparent bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-site flex h-[74px] items-center justify-between gap-4">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm font-semibold text-ink-2 transition-colors hover:text-forest"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappLink(
              `Hi ${SITE.name}, I would like to place an order.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-0! px-5! py-2.5! text-[13px]"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/60 text-forest lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
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
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="container-site flex flex-col gap-1 py-4"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
          <a
            href={whatsappLink(
              `Hi ${SITE.name}, I would like to place an order.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-2"
          >
            Order on WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="mt-1 px-4 py-2 text-center text-sm font-semibold text-ink-2"
          >
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
