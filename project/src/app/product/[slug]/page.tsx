
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: Promise<{slug: string }>; 
}

async function getProduct(slug: string): Promise<Product | null> {
    console.log("Fetching product with slug:", slug); // Log the slug
    

    return client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{
            _id,
            name,
            image,
            price,
            description,
            sizes,
            new,
            colors,
            discountPercent
        }`,
        { slug }
    );

}


export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-red-500">Product not found.</h1>
            </div>
        );
    }


    return (
        <div className="max-w-7xl mx-auto px-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl font-bold">
                        {product.name}
                    </h2>
                    <p className="text-2xl font-bold">
                        ${product.price}
                    </p>
                    <p className="text-2xl font-sans">
                        {product.description}
                    </p>
                    <p className="text-2xl font-sans">
                        <h3 className="font-bold">Sizes</h3> {product.sizes?.join(", ")}
                    </p>
                    <p className="text-2xl font-sans">
                    <h3 className="font-bold">Colors</h3> {product.colors?.join(", ")}
                    </p>
                    <p className="text-2xl font-sans">
                        {product.new ? "New Arrival" : "Regular"}
                    </p>
                    <p className="text-xl font-semibold text-green-500">
                        {product.discountPercent} % off!
                    </p>
                    <button className="bg-black text-white py-2 px-8 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
