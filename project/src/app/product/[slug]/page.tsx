'use client'

import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { addToCart } from "@/app/addToCart/actions";

interface ProductPageProps {
    params: { slug: string };
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

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct = await getProduct(slug);
            setProduct(fetchedProduct);
            setLoading(false);
        }
        fetchProduct();
    }, [slug]);

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${product.name} added to cart`,
            showConfirmButton: false,
            timer: 1000
        });

        addToCart(product);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">${product.price}</span>
                        {product.discountPercent && (
                            <span className="text-xl font-semibold text-green-500">
                                -{product.discountPercent}%
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500">
                        {product.description}
                    </p>
                    <div>
                        <h3 className="text-xl font-bold mb-3">Select Colors</h3>
                        <div className="flex gap-2">
                            {product.colors?.map((color: string, index: number) => (
                                <div
                                    key={index}
                                    className="w-8 h-8 rounded-full border border-gray-900"
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">Choose Size</h3>
                        <div className="flex gap-2">
                            {product.sizes?.map((size: string, index: number) => (
                                <button
                                    key={index}
                                    className="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        className="bg-black text-white py-3 px-8 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                        onClick={(e) => handleAddToCart(e, product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}