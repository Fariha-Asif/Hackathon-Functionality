"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
];

export default function HappyCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white w-[550px] ml-52 lg:w-[1100px] lg:max-w-[1239px] lg:mx-auto py-10 px-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-black text-3xl">OUR HAPPY CUSTOMERS</h1>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Review Content */}
      <div className="lg:flex lg:space-x-4 lg:overflow-x-auto lg:no-scrollbar lg:scroll-smooth">
        {/* For Small Screens */}
        <div className="lg:hidden">
          <div className="min-w-[100%] bg-gray-100 rounded-lg p-4 shadow-md">
            {/* Stars */}
            <div className="flex items-center mb-3">
              {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                <span key={i} className="text-yellow-500 mr-1">★</span>
              ))}
            </div>
            {/* Customer Name */}
            <div className="flex items-center mb-2">
              <span className="font-bold">{reviews[currentIndex].name}</span>
              <span className="ml-2 text-green-500 font-semibold">✔</span>
              </div>
              {/* Review */}
            <p className="text-gray-600 text-sm">{reviews[currentIndex].review}</p>
          </div>
        </div>

        {/* For Large Screens */}
        <div className="hidden lg:flex lg:space-x-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="min-w-[350px] bg-gray-100 rounded-lg p-4 shadow-md"
            >
              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-500 mr-1">★</span>
                ))}
              </div>
              {/* Customer Name */}
              <div className="flex items-center mb-2">
                <span className="font-bold">{review.name}</span>
                <span className="ml-2 w-6 pl-1 text-white rounded-full bg-green-500 font-semibold">✔</span>
              </div>
              {/* Review */}
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
