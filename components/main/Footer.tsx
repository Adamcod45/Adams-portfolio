import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg px-4 py-6 md:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-around gap-6 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-3 cursor-pointer">
              <FaWhatsapp />
              <span className="text-[15px] ml-[6px]">WhatsApp</span>
            </p>
            <p className="flex flex-row items-center my-3 cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-3 cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-bold text-[16px]">About</div>
            <p className="my-3 cursor-pointer text-[15px]">Become Sponsor</p>
            <p className="my-3 cursor-pointer text-[15px]">Learning about me</p>
            <p className="my-3 cursor-pointer text-[15px] break-all text-center">
              obatayoadam1@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-4 mb-2 text-sm md:text-[15px] text-center">
          &copy; Adam 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;