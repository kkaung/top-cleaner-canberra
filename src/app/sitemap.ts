import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/house-cleaning-pricing-canberra',
        '/blog',
        '/frequently-asked-questions',
        '/house-cleaning-checklist',

        '/deep-cleaning-canberra',
        '/regular-cleaning-canberra',
        '/end-of-lease-cleaning-canberra',
        '/office-cleaning-canberra',
        '/oven-cleaning-canberra',
        '/carpet-cleaning-canberra',
        '/window-cleaning-canberra',
        '/after-builder-cleaning-canberra',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
