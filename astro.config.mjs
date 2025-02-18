import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Function to normalize base URL
function normalizeBase(base) {
  if (!base) return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

// Get environment variables
const site = process.env.ASTRO_SITE || "https://istrail-laboratory.github.io";
let base = process.env.ASTRO_BASE || "/";

// For Brown CS deployment, use the full path as base
if (site.includes('cs.brown.edu')) {
  base = '/people/sistrail/';
}

// Normalize the base URL
base = normalizeBase(base);

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
