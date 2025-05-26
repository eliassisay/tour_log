// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-05-15',
//   devtools: { enabled: true }

// })
export default defineNuxtConfig({
  vite: {
    server: {
      fs: {
        // Allow serving files from node_modules if necessary
        allow: ["../node_modules"],
      },
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
