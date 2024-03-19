import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.linkedin.com/company/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://www.pinterest.com.au/',
    linkin: 'https://www.linkedin.com/company/',
    youtube: 'https://www.youtube.com/channel/',
    googlemap: '',

    buynsw: 'https://buy.nsw.gov.au/supplier/profile',
    yelp: 'https://www.yelp.com/biz/',
};

export const siteConfig = {
    logo: 'TopCleaner',
    name: 'Top Cleaner',
    title: `Top Cleaner - Cleaning Service Canberra`,
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
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@moreclean.com.au',
        phone: '1302 245 417',
        address: '401/249 George St, 2017 NSW',
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
