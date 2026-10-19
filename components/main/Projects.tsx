import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 md:py-20"
      id="projects"
    >
      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-center">
        My Projects
      </h1>
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-10 px-4 sm:px-6 md:px-10">
        <ProjectCard
          src="/Cardly.png"
          title="Cardly"
          description="FUTURE OF ACADEMIC REPORTING, Ask it. Or tell it to do it, The Cardly AI Agent answers questions and takes action across your school."
        />
        <ProjectCard
          src="/ClinikiQ.png"
          title="ClinikiQ"
          description="CliniQ listens to your consultations, writes your notes, and remembers every patient, so you can ask your records anything."
        />
        <ProjectCard
          src="/liteparcel.png"
          title="LiteparcelNg"
          description="Delivery That Travels With You. The smart way to send packages across Africa and beyond. Connect with trusted travelers already going your way."
        />
      </div>
    </div>
  );
};

export default Projects;