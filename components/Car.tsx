"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Button from "@/components/Button";
import Details from "./Details";

interface CarCardProps {
  car: CarProps;
}

export default function Car({ car }: CarCardProps) {
  // Returning the props in the carProps object
  const { city_mpg, year, make, model, transmission, drive } = car;

// State to render the View More button
const [isOpen,setIsOpen] = useState(false)

  // calculate car rent
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text -[14px] font-medium">/day</span>
      </p>
      {/* Rendering the image for the cars */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="Car Image"
          fill
          priority
          className="object-contain"
        />
      </div>
      {/* Creating all the remaining information */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {/* Displaying the miles type */}
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {/* Displaying the Transmission type */}
             {city_mpg} MPG
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="Steering wheel"
            />
            <p className="text-[14px]">
              {/* Displaying the Drive type */}
             {drive.toUpperCase()}
            </p>
          </div>

        </div>
        {/* Rendering he Button  */}
        <div className="car-card__btn-container">
          <Button
          title="View More Details"
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles = "text-white text-[14px] leading-[18px] font-bold" 
          rightIcon = '/right-arrow.svg'
          handleClick={()=> setIsOpen(true)} 
          />
        </div>
      </div>
      {/* Displaying car details */}
      <Details isOpen={isOpen} closeModal={()=> setIsOpen(false)} car={car}/>
    </div>
  );
}
