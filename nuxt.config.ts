// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-lodash",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/device",
    "nuxt-gtag",
    "@nuxtjs/color-mode",
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: true,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
  },

});