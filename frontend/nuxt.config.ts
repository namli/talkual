// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    NUXT_SECRET: process.env.NUXT_SECRET,
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
  },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth', '@nuxt/image-edge'],
  auth: {
    origin: process.env.ORIGIN,
    basePath: '/api/auth',
  },
  image: {
    strapi: {
      baseURL: `${process.env.STRAPI_BASE_URL}/uploads/`,
    },
  },
});
