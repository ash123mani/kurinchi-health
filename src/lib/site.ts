export const SITE = {
  name: "Kurinchi Health Products",
  tamilName: "குறிஞ்சி ஹெல்த் புரொடக்ட்ஸ்",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://kurinchihealthproducts.com",
  phoneDisplay: "+91 6385 469 100",
  phone: "+916385469100",
  whatsapp: "916385469100",
  email: "hello@kurinchihealthproducts.com",
  fssai: "22418328000741",
  marketBy: "Ratchakar Oil Mill",
  address: {
    line1: "200, Mannaraja Koil Street",
    line2: "Tisaiyanvilai",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    postalCode: "627657",
    country: "IN",
    countryName: "India",
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function fullAddress() {
  const a = SITE.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.postalCode}, ${a.countryName}`;
}
