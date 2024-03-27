"use client";
import Image from "next/image";
import Link from "next/link";
import headerNavLinks from "~/data/headerNavLinks";
import Logo from "/public/images/logo2.png";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const siteMetadata = {
  title: "wingtone",
  author: "yi-an chao",
  headerTitle: "wingtone",
  description: "wingtone",
  language: "en-us",
  siteUrl: "",
  siteRepo: "",
  siteLogo: "public/images/icon.png",
  socialBanner: "public/images/icon.png",
  locale: "en-US",
};

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="inset-0 flex max-h-24 justify-between">
        <div className="">
          <Image src={Logo} alt="Logo" width={400} height={500} />
        </div>
        <div className="mr-10 flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="font-semibold text-links hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
            {/* <ModeToggle /> */}
        </div>  
      </div>
    </header>
  );
};

export default Navbar;
