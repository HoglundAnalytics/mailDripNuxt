const strapiBaseUri = process.env.API_URL || 'https://strapi-6ge4.onrender.com'
// const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: { strapiBaseUri },
  generate: {
    routes() {
      return this.$strapi.find('Pages').then((data) => {
        return data.name.map(({ name }) => `/${name}`)
      })
    },
  },
  server: {
    host: '0.0.0.0',
  },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    script: [{ src: '/insight.js' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@plugins/haaForm' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
  ],
  strapi: {
    entities: ['pages', 'categories'],
    url: strapiBaseUri,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
