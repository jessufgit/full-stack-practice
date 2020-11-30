export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: "universal",
  head: {
    titleTemplate: " %s - One Schedule To Rule Them All",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "A daily scheduler to keep track of my appointments"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  vue: {
    config: {
  //     productionTip: false,
      devtools: true
    }
  }
};
