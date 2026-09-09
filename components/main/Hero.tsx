import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover pointer-events-none"
      >
        <source
          src="https://res.cloudinary.com/dcghgoebb/video/upload/v1788981709/blackhole_atslo4.webm"
          type="video/webm"
        />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;