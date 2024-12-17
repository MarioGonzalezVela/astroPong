import { defineCollection ,z} from "astro:content";

const products = defineCollection({

    schema: z.object({
        name:z.string(),
        price:z.number(),
        img:z.string(),
        description:z.string(),
        buy:z.object({
            spain:z.string().url(),
        }),
    })
})

export const collections = { products }