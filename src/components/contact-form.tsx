"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/lib/format";
import { whatsappLink } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-forest focus:ring-2 focus:ring-forest/10";

type ContactFormProps = {
  products: { slug: string; name: string }[];
  labels: Dictionary["contact"]["form"];
  whatsappTemplate: string;
  siteName: string;
};

export function ContactForm({
  products,
  labels,
  whatsappTemplate,
  siteName,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = formatMessage(whatsappTemplate, {
      site: siteName,
      name: name || "-",
      phone: phone || "-",
      product: product || "-",
      message: message || "-",
    });
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3"
          >
            {labels.name}
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3"
          >
            {labels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            autoComplete="tel"
            placeholder={labels.phonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="product"
          className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3"
        >
          {labels.product}
        </label>
        <select
          id="product"
          name="product"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          className={inputClass}
        >
          <option value="">{labels.productPlaceholder}</option>
          {products.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3"
        >
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder={labels.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        {labels.submit}
      </button>
      <p className="text-center text-xs text-ink-3">{labels.note}</p>
    </form>
  );
}
