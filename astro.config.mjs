import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Use environment variables to set the site URL and base path.
const site = process.env.ASTRO_SITE || "https://istrail-laboratory.github.io";
const base = process.env.ASTRO_BASE || "/";

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
  },
  assetsInclude: ["**/*.mov"],
});
