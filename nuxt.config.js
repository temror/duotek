export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  head: {
    title: 'Duotek-test',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/css/main', '@/assets/css/reset'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module', '@nuxtjs/composition-api/module'
  ],
  modules: ['@nuxt/http', '@nuxtjs/pwa'],
  build: {
    postcss: {
      'postcss-url': false,
      'postcss-nested': {},
      'postcss-responsive-type': {},
      'postcss-hexrgba': {}
    },
    preset: {
      autoprefixer: {
        grid: true
      }
    }
  }
}
