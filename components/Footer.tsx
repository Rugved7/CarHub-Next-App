import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md : flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* render logo  */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-800">
            CarHub 2023 - Created by Rugved <br /> All rights Reserved &copy;
          </p>
        </div>
        {/* Mapping the titles */}

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>{" "}
              {/* This shows all the titles */}
              {/* Mapping the links in the titles (content in the 3 titles )*/}
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-800"
                >
                  {item.title} {/* This shows all the items*/}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10">
          <div className="footer__copyrights-link">
            <p>@ Copyright (c) . all rights reserved</p>
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>

            <Link href="/" className="text-gray-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      
    </footer>
  );
}
