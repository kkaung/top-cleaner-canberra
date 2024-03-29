import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import React from 'react';
import Commitment from '@/components/commitment';


import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';

import Featuring from './_components/featuring';
import { ServicesDialog } from '@/components/services-dialog';
import Services from './_components/services';
import About from '@/components/about';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `Canberra's Top-Rated House Cleaning Service`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our cleaners. Book online in 60 seconds!`,
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews location="Sydney" />
                <HowWork />
                <Features />
                <Services />
                <Checklist />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
            </Shell>
        </>
    );
}
