import { SitemapStream, streamToPromise } from 'sitemap';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({ hostname: config.public.siteUrl });

  // Add all static sites
  sitemap.write({ url: '/', changefreq: 'monthly' });

  docs.forEach((doc) => {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    });
  });

  sitemap.end();

  return streamToPromise(sitemap);
});
