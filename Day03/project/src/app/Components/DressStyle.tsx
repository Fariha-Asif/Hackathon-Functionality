import React from "react";
import Image from "next/image";

export default function DressStyle() {
  return (
    <section className="bg-gray-100 w-[1239px] mx-auto py-10 px-4 rounded-lg">
      {/* Header */}
      <h1 className="text-center font-black text-3xl mb-8">BROWSE BY DRESS STYLE</h1>

      {/* Grid Layout */}
      <div className="flex flex-col lg:grid grid-cols-5 gap-4">
        {/* Casual */}
        <div className="relative col-span-2 h-[289px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/09.png" // Replace with your image path
            alt="Casual Style"
            width={620}
            height={289}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 text-black font-bold text-xl">
            Casual
          </span>
        </div>

        {/* Formal */}
        <div className="relative col-span-3 h-[289px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/10.png" // Replace with your image path
            alt="Formal Style"
            width={620}
            height={289}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 text-black font-bold text-xl">
            Formal
          </span>
        </div>

        {/* Party */}
        <div className="relative col-span-3 h-[289px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/11.png" // Replace with your image path
            alt="Party Style"
            width={620}
            height={289}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 text-black font-bold text-xl">
            Party
          </span>
        </div>

        {/* Gym */}
        <div className="relative col-span-2 h-[289px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/12.png" // Replace with your image path
            alt="Gym Style"
            width={620}
            height={289}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 text-black font-bold text-xl">
            Gym
          </span>
        </div>
      </div>
    </section>
  );
}
