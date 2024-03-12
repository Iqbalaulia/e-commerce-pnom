export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce-pnom',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ]
  },

  css: [
    '~/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  plugins: [
    '~/plugins/components.js',
    '~/plugins/aos.js',
    '~/utils/helpers.js'
  ],

  components: true,

  buildModules: [

  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  bootstrapVue: {
    icons: true
  },

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      }
    }
  },
  env: {
    baseURL: process.env.PNOM_BASE_URL,
    versionName: "1", //rubah versi di sini
    versionCode: 1, // dan di sini
  },
}
