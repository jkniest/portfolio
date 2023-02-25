// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-link-checker'
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
            host: 'http://localhost:3000'
        }
    },
    content: {
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark'
            },
        }
    }
})
