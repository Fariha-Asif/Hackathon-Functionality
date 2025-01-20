import { groq } from "next-sanity";


export const allProducts = groq`(*[_type == "products"])`;
console.log(allProducts);

export const four = groq`(*[_type == "products"][0...4])`;
console.log(four);