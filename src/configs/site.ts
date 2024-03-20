import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook:
        'https://www.facebook.com/people/Top-Cleaner-Canberra/61557245262497',
    instagram: 'https://instagram.com/topcleanercanberra',
    twitter: 'https://twitter.com/topcleaner_',
    pinterest: 'https://www.pinterest.com.au/topcleanercanberra',
    linkin: 'https://www.linkedin.com/company/top-cleaner-canberra',
    youtube: 'https://www.youtube.com/channel/UC_6_y-1oRQqQRt0lQvvm16g',
    googlemap: '',

    buynsw: 'https://buy.nsw.gov.au/supplier/profile',
    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'TopCleaner',
    name: 'Top Cleaner',
    title: `Top Cleaner Canberra`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://topcleanercanberra.com.au',
    ogImage: 'https://topcleanercanberra.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-canberra',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-canberra',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-canberra',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/house-cleaning-pricing-canberra',
                },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
                { title: 'Sitemap', href: '/sitemap' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@topcleanercanberra.com.au',
        phone: '1302 245 417',
        address: '11 Moore St, Canberra ACT 2601',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 727,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
