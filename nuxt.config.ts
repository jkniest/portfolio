// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-link-checker',
        '@nuxt/image-edge',
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
            host: process.env.NUXT_ENV_VERCEL_URL ? `https://${process.env.NUXT_ENV_VERCEL_URL}` : 'http://localhost:3000'
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
    image: {
        provider: 'vercel',
        screens: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
        }
    }
})
