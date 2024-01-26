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
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  plugins: [
    '~/plugins/components.js',
  ],

  components: true,

  buildModules: [

  ],

  modules: [
    'bootstrap-vue/nuxt',
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
}
