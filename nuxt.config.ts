// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-link-checker',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxt/devtools',
    ['@nuxtjs/google-fonts', {
      families: {
        'Barlow Condensed': [600],
        Montserrat: true
      },
      download: true
    }],
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore'
      ]
    }]
  ],
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler'
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.APP_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  experimental: {
    viewTransition: true,
    typedPages: true
  },
  ogImage: {
    fonts: [
      'Barlow Condensed:600',
      'Montserrat:200'
    ]
  },
  imports: {
    dirs: ['stores']
  },
  routeRules: {
    '/blog/**': { isr: 3000 }
  }
});
