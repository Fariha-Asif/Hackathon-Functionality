"use client";

import React from "react";
import Image from "next/image";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      image: "/images/tshirt1.jpg", // Replace with actual image path
      name: "T-shirt with Tape Details",
      price: "$120",
      oldPrice: null,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/images/jeans.jpg", // Replace with actual image path
      name: "Skinny Fit Jeans",
      price: "$240",
      oldPrice: "$260",
      rating: 4.8,
    },
    {
      id: 3,
      image: "/images/shirt.jpg", // Replace with actual image path
      name: "Checkered Shirt",
      price: "$180",
      oldPrice: null,
      rating: 4.2,
    },
    {
      id: 4,
      image: "/images/tshirt2.jpg", // Replace with actual image path
      name: "Sleeve Striped T-shirt",
      price: "$130",
      oldPrice: "$180",
      rating: 4.3,
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-8">NEW ARRIVALS</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="h-40 w-40 object-contain mb-4"
              />

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

              {/* Rating */}
              <p className="text-yellow-500 text-sm mb-2">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </p>

              {/* Price */}
              <div className="text-gray-800 font-bold">
                <span>{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
