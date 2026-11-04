import Link from "next/link";
import { lang } from "next/root-params";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const requested = await lang();
  const locale = isLocale(requested) ? requested : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <main id="main" className="section">
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="eyebrow">{dictionary.notFound.eyebrow}</span>
        <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink-2">
          {dictionary.notFound.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, "/products")}
            className="btn-primary"
          >
            {dictionary.notFound.browse}
          </Link>
          <Link href={localePath(locale)} className="btn-secondary">
            {dictionary.notFound.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
