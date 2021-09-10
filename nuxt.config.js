export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - shinycorals',
    title: 'shinycorals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,

    theme: {
      dark: false,
      options: {
        customProperties: false,
        variations: false,
        // themeCache: {
        //   get: (key) => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value),
        // },
        // minifyTheme,
      },
      themes: {
        light: {
          primary: '#FEE2E2',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
        },
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
      },
    },
    display: 'swap',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    // icon: {
    //   /* icon options */
    //   source: '/shiny_logo.png',
    // },
    manifest: {
      lang: 'en',
      name: 'shinycorals',
      short_name: 'Shiny Logo',
      description: ``,
    },
    meta: {
      theme_color: '#121212',
      nativeUI: true,
      name: 'Shiny Logo',
      author: 'iotron',
      description: ``,
      ogHost: '',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        //  maxSize: 200000,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    // analyze: {
    //   analyzerMode: 'static',
    // },
  },
}
