import type { MetadataRoute } from "next";
import { en } from "@/i18n/dictionaries/en";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: en.brand.name,
    short_name: "Kurinchi",
    description: en.meta.siteShortDescription,
    start_url: "/en",
    display: "standalone",
    background_color: "#FAF6EC",
    theme_color: "#1F3D2B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
