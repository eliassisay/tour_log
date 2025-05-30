import tailwindcss from "@tailwindcss/vite";

import "./lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [

      tailwindcss(),
    ],
    server: {
      fs: {
        // Allow serving files from node_modules if necessary
        allow: ["../node_modules"],
      },
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
