import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    songs: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'songs/*.md',
      schema: z.object({
        title: z.string(),
        artist: z.string(),
        code: z.string(),
      }),
    })
  },
})