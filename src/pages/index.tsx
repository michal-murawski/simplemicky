import {sanityClient} from '@/sanity/sanity.client';
import {cache} from 'react';
import {Hero} from '@/modules/home/Hero';

const clientFetch = cache(sanityClient.fetch.bind(sanityClient));

export default function AppPage() {

    return (
        <Hero />
    );
}
