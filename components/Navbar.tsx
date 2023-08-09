import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-16">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {/* Loading button component and all the things in this button component are props ans they are denoted in button and types/index component*/}
        <Button
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-black text-bold rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
