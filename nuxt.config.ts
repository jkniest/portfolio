// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-link-checker',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        ['@nuxtjs/google-fonts', {
            families: {
                'Barlow Condensed': [600],
                'Montserrat': true
            },
            download: true
        }]
    ],
    typescript: {
        strict: true
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    runtimeConfig: {
        public: {
            host: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
        }
    },
    content: {
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark'
            },
        }
    },
    colorMode: {
        classSuffix: ''
    }
})
