"use client";

import React from "react";

const BrandLogos = () => {
  return (
    <section className="w-[1000px] h-[80px] lg:w-[1440px] lg:h-[100px] lg:mt-9 bg-black py-6">
      <div className="container mx-auto flex flex-wrap justify-center gap-20">
        {/* Brand Logos */}
        <span className="text-white text-xl font-semibold">VERSACE</span>
        <span className="text-white text-xl font-semibold">ZARA</span>
        <span className="text-white text-xl font-semibold">GUCCI</span>
        <span className="text-white text-xl font-semibold">PRADA</span>
        <span className="text-white text-xl font-semibold">Calvin Klein</span>
      </div>
    </section>
  );
};

export default BrandLogos;
