const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/layouts.scss',
    '~/assets/scss/typography.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    [
      "storyblok-nuxt", 
      {
        accessToken: 
          process.env.NODE_ENV ==  'production' 
            ? 'Py7qqe3x1iRZsTQQg3HriQtt'
            : 'tdCqo7r0m8uk2mH5ou1Nbwtt',
        cacheProvider: "memory"
      }
    ]
  ],

  generate: {
    routes : function() {
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=Py7qqe3x1iRZsTQQg3HriQtt&starts_with=blog&cv=' + 
        Math.floor(Date.now() / 1e3)
      )
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug);
        return [
          '/',
          '/blog',
          '/about',
          ...blogPosts
        ]
      });
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/colours.scss',
    ]
  },

  // router: {
  //   base: '/blog/'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
