import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NAVA AI — Intelligence for a Better Tomorrow",
    short_name: "NAVA AI",
    description:
      "Building a smarter, greener and more human future for Kerala through Artificial Intelligence and sustainable development.",
    start_url: "/",
    display: "standalone",
    background_color: "#060907",
    theme_color: "#00e676",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
