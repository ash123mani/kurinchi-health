import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Kurinchi",
    description: SITE.shortDescription,
    start_url: "/",
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
