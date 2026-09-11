import React from "react";
import Elegant_outfits_nobg from "../assets/Elegant_outfits_nobg.png";

const Hero = () => {
  return (
    <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-12 lg:px-20 py-12">

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">

        <p className="text-sm font-semibold uppercase tracking-widest">
          Welcome to ShopSphere
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Discover Your
          <span className="block">Perfect Style</span>
        </h1>

        <p className="max-w-lg text-base md:text-lg">
          Explore our latest collection of fashion, accessories and
          everyday essentials — all in one place.
        </p>

        <button className="px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200">
          Shop Now
        </button>

      </div>

      {/* Right Content */}
      <div className="flex justify-center items-center">
        <img
          className="w-full max-w-md lg:max-w-lg  object-cover"
          src={Elegant_outfits_nobg}
          alt="Elegant outfits"
        />
      </div>

    </section>
  );
};

export default Hero;


