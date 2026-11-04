import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="eyebrow">404</span>
        <h1 className="display mt-4 text-4xl text-forest sm:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink-2">
          The page you are looking for may have moved. Browse our products or
          head back to the home page.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className="btn-primary">
            Browse products
          </Link>
          <Link href="/" className="btn-secondary">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
