import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css"; // Keen Slider styles
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Product } from "../../../types/products";
import { four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function SlideFeature() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <section className="w-[1000px] lg:w-[1350px] xl:w-[1440px] py-10 bg-white">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-10">NEW ARRIVALS</h1>

      {/* Slider Container */}
      <div className="max-w-[1450px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-8">
        {product.map((product) => (
          <div key={product._id}>
            {product.image && (
              <Image
                src={urlFor(product.image).url() || ''}
                alt={product.name || 'Product image'}
                width={200}
                height={200}
                priority // Optional: Improve performance for above-the-fold images
                className="w-full"
              />
            )}
            <div className="font-bold">
              {product.name} <br/>
              ${product.price}
            </div>
            <div>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
            </div>                         
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link href="/Products">
          <button className="px-6 py-3 bg-white border border-black text-black rounded-lg font-semibold hover:bg-gray-200">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
}
