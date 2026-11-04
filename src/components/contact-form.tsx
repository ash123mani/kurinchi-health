"use client";

import { useState, type FormEvent } from "react";
import { PRODUCTS } from "@/lib/products";
import { SITE, whatsappLink } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-line bg-white/80 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-forest focus:ring-2 focus:ring-forest/10";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Hi ${SITE.name},`,
      "",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      product ? `Product: ${product}` : "",
      message ? `Message: ${message}` : "",
      "",
      "Please share availability, sizes and price.",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3">
            Your name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            placeholder="Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            autoComplete="tel"
            placeholder="+91"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3">
          Product of interest
        </label>
        <select
          id="product"
          name="product"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          className={inputClass}
        >
          <option value="">Select a product (optional)</option>
          {PRODUCTS.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-ink-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder="Tell us the quantity, size or any question you have."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        Send enquiry on WhatsApp
      </button>
      <p className="text-center text-xs text-ink-3">
        This opens WhatsApp with your message ready to send. No account or
        payment is needed.
      </p>
    </form>
  );
}
