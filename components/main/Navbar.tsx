import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between gap-3 mx-auto max-w-7xl">
        <a href="#about-me" className="flex flex-row items-center shrink-0">
          <Image
            src="/favicon.ico"
            alt="Adam logo"
            width={40}
            height={40}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full drop-shadow-[0_0_8px_#a48fff88] hover:animate-slowspin transition duration-300"
          />
          <span className="font-bold ml-[10px] hover:animate-slowspin hidden md:block text-gray-300">
            Adam
          </span>
        </a>

        <div className="flex-1 max-w-[500px] flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-4 sm:px-5 py-2 md:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm md:text-base md:mr-10">
          <a href="#about-me" className="cursor-pointer whitespace-nowrap">About me</a>
          <a href="#skills" className="cursor-pointer whitespace-nowrap">Skills</a>
          <a href="#projects" className="cursor-pointer whitespace-nowrap">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;