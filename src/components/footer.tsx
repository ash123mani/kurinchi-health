import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE, fullAddress, whatsappLink } from "@/lib/site";
import { CATEGORIES } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 bg-forest text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-xs text-sm leading-7 text-cream/70">
            Traditional cold pressed oils, natural sweeteners and handmade care
            products from Tirunelveli, Tamil Nadu.
          </p>
          <p lang="ta" className="tamil mt-3 max-w-xs text-sm text-cream/70">
            {SITE.tamilTagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-cream/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream/70">
              FSSAI {SITE.fssai}
            </span>
            <span className="rounded-full border border-cream/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream/70">
              100% Natural
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/50">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "All Products" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-turmeric-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/50">
            Categories
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {CATEGORIES.filter((category) => category.id !== "all").map(
              (category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="text-cream/75 transition-colors hover:text-turmeric-2"
                  >
                    {category.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/50">
            Visit / Contact
          </h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-cream/75">
            <p>{fullAddress()}</p>
            <p>
              <a
                href={`tel:${SITE.phone}`}
                className="transition-colors hover:text-turmeric-2"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-turmeric-2"
              >
                {SITE.email}
              </a>
            </p>
            <p className="text-cream/55">{SITE.hours}</p>
          </address>
          <a
            href={whatsappLink(
              `Hi ${SITE.name}, I would like to place an order.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-5 min-h-0! px-5! py-2.5! text-[13px]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-2xl text-cream/40">
            Product benefits are traditional descriptions, not medical advice.
            Consult a qualified professional for health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
