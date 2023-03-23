import { previewData } from 'next/headers';
import { PreviewSuspense } from '@/components/PreviewSuspense';
import { sanityClient } from '@/sanity/sanity.client';
import { cache } from 'react';
import { Hero } from '@/app/(app)/Hero';

const clientFetch = cache(sanityClient.fetch.bind(sanityClient));

export default async function AppPage() {
    if (previewData()) {
        return <PreviewSuspense fallback="Loading...">as as</PreviewSuspense>;
    }

    return (
        <div>
            <Hero />
        </div>
    );
}
