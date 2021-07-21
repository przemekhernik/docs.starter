import path from 'path';

export default {
  target: 'static',
  buildDir: 'dist',
  srcDir: 'src',
  head: {
    title: process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  modules: ['@nuxt/content'],
  plugins: ['@/plugins/init'],
  content: {
    dir: path.resolve(__dirname, 'content'),
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: [
    'assets/styles/_normalize.scss',
    'assets/styles/_typography.scss',
    'assets/styles/_components.scss'
  ],
  styleResources: {
    scss: ['./assets/styles/_mixins.scss', './assets/styles/_variables.scss']
  },
  alias: {
    '@images': path.resolve(__dirname, 'assets/images'),
    '@fonts': path.resolve(__dirname, 'assets/fonts'),
    '@scripts': path.resolve(__dirname, 'assets/scripts'),
    '@static': path.resolve(__dirname, 'src/static'),
    '@styles': path.resolve(__dirname, 'assets/styles')
  }
};
