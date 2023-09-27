import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://istrail-laboratory.github.io",
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
                    return;
                }
                warn(warning);
            },
        },
    },
    assetsInclude: ["**/*.mov"],
});
