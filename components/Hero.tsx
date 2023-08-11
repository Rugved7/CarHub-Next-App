"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";  
export default function Hero() {
  const handleScroll = () => {

    
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a Car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Ease your car rental experience with our Effortless Car Service
        </p>
        {/* load the Button component as we will reuse it most of the times */}
        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 font-bold "
          handleClick={handleScroll} // made this function above
        />
      </div>

      {/* Image div */}
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero image"
            fill
            className="object-contain"
          />
          </div>
          <div className="hero__image-overlay" />
        
      </div>
    </div>
  );
}
