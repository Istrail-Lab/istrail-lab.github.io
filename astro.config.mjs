import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Use environment variables to set the site URL and base path.
const site = process.env.ASTRO_SITE || "https://istrail-laboratory.github.io";
const base = process.env.ASTRO_BASE || "/";

// For Brown CS deployment, if the site includes cs.brown.edu, use the full path as base
const isBrownCS = site.includes('cs.brown.edu');
if (isBrownCS && !base.includes('/people/sistrail')) {
  base = '/people/sistrail/';
}

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
