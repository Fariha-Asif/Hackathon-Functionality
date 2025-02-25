import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, 
  useCdn: false, // Set to false for dynamic queries
});



export async function sanityFetch({query, params = {}}: {query:string, params?: any}){
    return await client.fetch(query, params)
}

