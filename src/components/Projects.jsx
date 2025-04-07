import { useState } from "react";
import { Card } from "./Card";
import { projects } from "../data/projectsData";
import { HiPlus } from "react-icons/hi2";
import { motion } from "framer-motion";

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(2);
    } else {
      setVisibleCount((prev) => prev + 2);
    }
  };

  const displayedProjects = projects.slice(0, visibleCount);

  return (
    <motion.section
      id="work"
      className="flex flex-col justify-center items-center px-4 my-10 md:my-20 w-full overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-5 md:mb-7">
        Projects
      </h1>

      <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-slate-600 max-w-[40rem] text-center mb-8 md:mb-10">
        Aqui estão alguns dos projetos que desenvolvi, focando em design
        moderno.
      </p>

      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center w-full max-w-screen-xl px-4">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title + index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: index * 0.02 }}
          >
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              secondaryDescription={project.secondaryDescription}
              githubLink={project.githubLink}
              reverse={project.reverse}
            />
          </motion.div>
        ))}
      </div>

      {projects.length > 2 && (
        <button
          onClick={handleToggle}
          className="mt-20 px-6 py-3 bg-[#00BFFF] hover:bg-[#1ec8ff] text-white font-semibold rounded-2xl transition duration-300 flex items-center gap-2 shadow-[0_0_15px_#00BFFF] hover:shadow-[0_0_25px_#00BFFF] active:shadow-[0_0_30px_#00BFFF] focus:shadow-[0_0_30px_#00BFFF] animate-bounce"
        >
          {visibleCount >= projects.length ? "Ver menos" : "Ver mais"}
          <HiPlus
            className={`transition-transform duration-300 text-xl ${
              visibleCount >= projects.length ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      )}
    </motion.section>
  );
};
