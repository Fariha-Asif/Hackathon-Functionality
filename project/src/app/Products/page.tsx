'use client'

import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css"; // Keen Slider styles
import Image from 'next/image'; // Import the Image component
import { Product } from "../../../types/products";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../addToCart/actions";
import swal from 'sweetalert2';

export default function SlideFeature() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
          e.preventDefault();
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${product.name} added to cart`,
            showConfirmButton: false,
            timer: 1000
          })
      
          addToCart(product) 
        }

  return (
    <section className="w-[1000px] lg:w-[1350px] xl:w-[1440px] py-10 bg-white">

      {/* Slider Container */}
      <div className="max-w-[1450px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-8">
        {product.map((product) => (
          <div key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <Link href={`/product/${product.slug.current}`}>
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
              <Link href={`/product/${product.slug.current}`}>
                <button className="bg-black text-white py-2 px-8 rounded-lg mt-4 hover:scale-110 transition-transform duration-300 ease-in-out">
                  View Details
                </button>
              </Link>
            </Link>         
          </div>
        ))}
      </div>
    </section>
  );
}
