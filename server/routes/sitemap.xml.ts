import { serverQueryContent } from '#content/server';
import {SitemapStream, streamToPromise} from 'sitemap';

export default defineEventHandler(async(event) => {
    const config = useRuntimeConfig();

    const docs = await serverQueryContent(event).find();
    const sitemap = new SitemapStream({hostname: config.public.host});

    // Add all static sites
    sitemap.write({ url: '/', changefreq: 'monthly' });

    docs.forEach((doc) => {
        sitemap.write({ 
            url: doc._path,
            changefreq: 'monthly',
        });
    });

    sitemap.end();

    return streamToPromise(sitemap);
});
