import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7c9kq9u6",
  dataset: "production",
  apiVersion: "2025-01-18", 
  useCdn: false, // Set to false for dynamic queries
});



export async function sanityFetch({query, params = {}}: {query:string, params?: any}){
    return await client.fetch(query, params)
}

