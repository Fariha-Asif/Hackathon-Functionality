import { groq } from "next-sanity";


export const allProducts = groq`(*[_type == "products"])`;
console.log(allProducts);

export const four = groq`(*[_type == "products"][0...4])`;
console.log(four);

export const four1 = groq`(*[_type == "products"][4...8])`;
console.log(four1);

export const four2 = groq`(*[_type == "products"][8...12])`;
console.log(four2);