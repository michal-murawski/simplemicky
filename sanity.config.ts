import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';
import { getStartedPlugin } from './sanity/plugins/sanity-plugin-tutorial';

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
    basePath: '/studio',
    name: 'simplemickey_content_studio',
    title: 'simplemickey Content Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',

    plugins: [deskTool({}), visionTool(), ...(isDev ? devOnlyPlugins : [])],

    schema: {
        types: schemaTypes,
    },
});
