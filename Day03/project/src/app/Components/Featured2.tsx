"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Keen Slider styles

export default function Featured2() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 4, spacing: 20 },
  });

  const products = [
    {
      id: 1,
      title: "Vertical Striped Shirt",
      image: "/images/05.png",
      rating: 5.0,
      price: "$212",
      originalPrice: "$232",
      discount: "-20%",
    },
    {
      id: 2,
      title: "Courage Graphic T-shirt",
      image: "/images/06.png",
      rating: 4.0,
      price: "$145",
    },
    {
      id: 3,
      title: "Loose Fit Bermuda Shorts",
      image: "/images/07.png",
      rating: 3.0,
      price: "$80",
    },
    {
      id: 4,
      title: "Faded Skinny Jeans",
      image: "/images/08.png",
      rating: 4.5,
      price: "$210",
    },
  ];

  return (
    <section className="w-[1000px] lg:w-[1350px] xl:w-[1440px] py-10 bg-white">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-10">TOP SELLING</h1>

      {/* Slider Container */}
      <div ref={sliderRef} className="keen-slider max-w-[1450px] mx-auto px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="keen-slider__slide bg-white rounded-lg shadow-md p-5 text-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-auto rounded"
            />
            <h4 className="mt-3 font-medium text-lg">{product.title}</h4>
            <div className="flex justify-center items-center mt-2">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                />
              ))}
              {product.rating % 1 !== 0 && (
                <Star className="w-5 h-5 text-gray-300" />
              )}
              {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gray-300" />
              ))}
              <span className="ml-2 text-gray-600">{product.rating}/5</span>
            </div>
            <p className="mt-2 font-bold text-xl text-black">
              {product.price}
              {product.originalPrice && (
                <span className="ml-2 text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="ml-2 text-green-500">{product.discount}</span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-white border border-black text-black rounded-lg font-semibold hover:bg-gray-200">
          View All
        </button>
      </div>
    </section>
  );
}
