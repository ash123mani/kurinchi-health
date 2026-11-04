import Link from "next/link";
import { Logo } from "@/components/logo";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getCategories } from "@/i18n/products";
import { formatMessage } from "@/lib/format";
import { SITE, fullAddress, whatsappLink } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const { common, brand, structured, whatsapp } = dictionary;
  const year = new Date().getFullYear();
  const categories = getCategories(locale).filter(
    (category) => category.id !== "all",
  );

  const explore = [
    { href: "/", label: common.footer.home },
    { href: "/products", label: common.footer.allProducts },
    { href: "/about", label: common.footer.about },
    { href: "/contact", label: common.footer.contact },
  ];

  return (
    <footer className="relative z-10 mt-20 bg-forest text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo
            locale={locale}
            primary={brand.logoPrimary}
            secondary={brand.logoSecondary}
            homeLabel={formatMessage(common.a11y.logoHome, {
              name: brand.name,
            })}
            onDark
          />
          <p className="mt-5 max-w-xs text-sm leading-7 text-cream/70">
            {structured.websiteDescription}
          </p>
          <p
            lang={locale === "en" ? "ta" : "en"}
            className={
              locale === "en"
                ? "tamil mt-3 max-w-xs text-sm text-cream/70"
                : "mt-3 max-w-xs text-sm text-cream/70"
            }
          >
            {brand.secondaryTagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-cream/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream/70">
              {formatMessage(common.badges.fssai, { fssai: SITE.fssai })}
            </span>
            <span className="rounded-full border border-cream/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream/70">
              {common.badges.natural}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/50">
            {common.footer.explore}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
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
            {common.footer.categories}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`${localePath(locale, "/products")}?category=${category.id}`}
                  className="text-cream/75 transition-colors hover:text-turmeric-2"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-cream/50">
            {common.footer.visitContact}
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
            <p className="text-cream/55">{common.hours}</p>
          </address>
          <a
            href={whatsappLink(
              formatMessage(whatsapp.order, { site: brand.name }),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-5 min-h-0! px-5! py-2.5! text-[13px]"
          >
            {common.actions.chatWhatsApp}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {formatMessage(common.footer.rights, {
              year: String(year),
              site: brand.name,
            })}
          </p>
          <p className="max-w-2xl text-cream/40">
            {common.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
