'use client'

import React, { useEffect, useState } from "react";
import Image from 'next/image'; // Import the Image component
import { Product } from "../../../types/products";
import { four2 } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Brands() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four2);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <section className="w-[1000px] lg:w-[1350px] xl:w-[1440px] py-10 bg-white">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-10">BRANDS</h1>

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
                          
          </div>
        ))}
      </div>

    </section>
  );
}
