"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[80svh] md:min-h-screen w-full h-full overflow-hidden">
      <div className="absolute w-full px-4 top-6 md:top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}&{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="https://res.cloudinary.com/dcghgoebb/image/upload/v1788982149/LockTop_efxcjg.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="https://res.cloudinary.com/dcghgoebb/image/upload/v1788982149/LockMain_d4katx.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-[56px] md:w-[70px] z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-4 md:bottom-[10px] px-4">
        <div className="cursive text-base sm:text-lg md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full h-full flex items-start justify-center absolute inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcghgoebb/video/upload/v1788982094/encryption_u387qo.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;