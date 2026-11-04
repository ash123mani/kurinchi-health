export const SITE = {
  name: "Kurinchi Health Products",
  tamilName: "குறிஞ்சி ஹெல்த் புரொடக்ட்ஸ்",
  title:
    "Kurinchi Health Products — Cold Pressed Oils, Natural Sweeteners & Handmade Care",
  tagline: "Quality • Purity • Health",
  tamilTagline: "தரம் • தூய்மை • ஆரோக்கியம்",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://kurinchihealthproducts.com",
  description:
    "Kurinchi Health Products brings you traditional cold pressed coconut, gingelly and groundnut oils, organic country sugar, Himalayan rock salt, palm jaggery, palm candy, handmade coconut oil soap and herbal hair oil. 100% natural, chemical-free products made by traditional methods in Tirunelveli, Tamil Nadu.",
  shortDescription:
    "Traditional cold pressed oils, natural sweeteners and handmade care products. Quality • Purity • Health.",
  phoneDisplay: "+91 73734 46688",
  phone: "+917373446688",
  whatsapp: "917373446688",
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
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  keywords: [
    "cold pressed coconut oil",
    "cold pressed gingelly oil",
    "cold pressed groundnut oil",
    "wood pressed oil Tamil Nadu",
    "chekku ennai",
    "செக்கு தேங்காய் எண்ணெய்",
    "செக்கு நல்லெண்ணை",
    "செக்கு கடலை எண்ணெய்",
    "organic country sugar",
    "naattu sarkarai",
    "Himalayan rock salt",
    "induppu",
    "palm jaggery",
    "karupatti",
    "palm candy",
    "panangkarkandu",
    "handmade coconut oil soap",
    "herbal hair oil",
    "Kurinchi Health Products",
    "Tirunelveli natural products",
    "Tamil Nadu cold pressed oil",
    "natural health products India",
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productEnquiryLink(productName: string) {
  return whatsappLink(
    `Hi ${SITE.name}, I would like to know more about ${productName}. Please share the available sizes and price.`,
  );
}

export function fullAddress() {
  const a = SITE.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.postalCode}, ${a.countryName}`;
}
