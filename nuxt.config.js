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
      { hid: 'description', name: 'description', content: 'SHINY CORALS PRESCHOOL is very methodical and new-age conceptual preschool of ESHANPUTRA LEARNWISE. Established in 2019, this preschool concentrates on the overall development of children. With its very rich curriculum for children’s 7 winged developments, it introduces digital smart classroom for every class. We strongly believe that learning begins with the family; the school’s goal is to extend and develope that process in a spirit of cooperation among students, teachers, and parents. We also believe that a small student to teacher ratio is of utmost importance to give students the attention they need to reach their full potential. "We value trust, fairness, cooperation, and sensitivity, and expect students to learn to reach outside themselves and respect the dignity of others. Our students will not only graduate from SHINY CORALS PRESCHOOL with strong academic skills and a readiness for high school, they will also grow as individuals and learn about the importance of social responsibility." Our Teachers are well trained educators and having fair experience in education sectors. Our teaching Assistants are well groomed and very well behaved which will win hearts of our children. Our staffs are always helpful via conferences and monthly meetings throughout the school year.' },
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
          accent: '#A78BFA',
          success: '#22C55E',
          info: '#EF4444',
          warning: '#DC2626',
          gray: '#27272A',
          lightgray:'#D1D5DB',
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
        wght: [400],
      },
      Montserrat: {
        wght: [700],
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
      description: `SHINY CORALS PRESCHOOL is very methodical and new-age conceptual preschool of ESHANPUTRA LEARNWISE. Established in 2019, this preschool concentrates on the overall development of children. With its very rich curriculum for children’s 7 winged developments, it introduces digital smart classroom for every class. We strongly believe that learning begins with the family; the school’s goal is to extend and develope that process in a spirit of cooperation among students, teachers, and parents. We also believe that a small student to teacher ratio is of utmost importance to give students the attention they need to reach their full potential. "We value trust, fairness, cooperation, and sensitivity, and expect students to learn to reach outside themselves and respect the dignity of others. Our students will not only graduate from SHINY CORALS PRESCHOOL with strong academic skills and a readiness for high school, they will also grow as individuals and learn about the importance of social responsibility." Our Teachers are well trained educators and having fair experience in education sectors. Our teaching Assistants are well groomed and very well behaved which will win hearts of our children. Our staffs are always helpful via conferences and monthly meetings throughout the school year.`,
    },
    meta: {
      theme_color: '#121212',
      nativeUI: true,
      name: 'Shiny Logo',
      author: 'iotron',
      description: `SHINY CORALS PRESCHOOL is very methodical and new-age conceptual preschool of ESHANPUTRA LEARNWISE. Established in 2019, this preschool concentrates on the overall development of children. With its very rich curriculum for children’s 7 winged developments, it introduces digital smart classroom for every class. We strongly believe that learning begins with the family; the school’s goal is to extend and develope that process in a spirit of cooperation among students, teachers, and parents. We also believe that a small student to teacher ratio is of utmost importance to give students the attention they need to reach their full potential. "We value trust, fairness, cooperation, and sensitivity, and expect students to learn to reach outside themselves and respect the dignity of others. Our students will not only graduate from SHINY CORALS PRESCHOOL with strong academic skills and a readiness for high school, they will also grow as individuals and learn about the importance of social responsibility." Our Teachers are well trained educators and having fair experience in education sectors. Our teaching Assistants are well groomed and very well behaved which will win hearts of our children. Our staffs are always helpful via conferences and monthly meetings throughout the school year.`,
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
