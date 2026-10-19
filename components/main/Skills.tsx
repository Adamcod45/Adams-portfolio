import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden px-4 py-10 pb-24 md:py-20 md:pb-80"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 md:gap-5 items-center max-w-5xl">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            playsInline
            loop
            muted
            autoPlay
            src="https://res.cloudinary.com/dcghgoebb/video/upload/v1788981897/cards-video_bqnnml.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;