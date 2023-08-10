"use client";

import React from "react";
import Image from "next/image";
import { Buttonprops } from "@/types";
export default function Button({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: Buttonprops) {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title} {/* Title should be sent as a prop in Hero Component*/}
      </span>
      <div className="relative w-6 h-6">
      {rightIcon && (
        <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
      )}
      </div>
    </button>
  );
}
