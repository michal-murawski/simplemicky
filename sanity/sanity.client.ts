import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"

export const sanityClient = createClient({
    projectId,
    dataset,
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
