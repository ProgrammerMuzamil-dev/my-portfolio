import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import { projects } from "../../projectsDeatial/projects.js";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const displayData =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <div>
      <section className="mt-10 overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[2rem] rounded-md w-full bg-gradient-to-r from-transparent to-cyan-400"></span>
          <span className="uppercase  tracking-[0.35em] text-sm font-semibold text-cyan-400">
            Projects
          </span>
          <span className="h-[2rem] rounded-md w-full bg-gradient-to-l from-transparent to-cyan-400"></span>
        </div>
        <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 md:text-xl text-[#94A3B8]  text-center">
          Explore a collection of projects that reflect my journey as a frontend
          developer. From responsive landing pages to interactive web
          applications, each project demonstrates my focus on clean code, modern
          UI, and seamless user experiences.
        </p>
      </section>
      <section className="flex items-center justify-center mt-8">
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </section>
      <section className="grid grid-cols-1 gap-8 px-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {displayData.map((project) => (
          <div
            key={project.id}
            className="
        group
        overflow-hidden
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:bg-white/10
        hover:shadow-[0_20px_60px_rgba(14,165,233,0.25)]
      "
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 transition-all duration-500 scale-110 opacity-0 bg-cyan-400/20 blur-3xl group-hover:opacity-100"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 object-cover w-full h-64 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold transition-colors duration-300 text-slate-100 group-hover:text-cyan-400">
                {project.title}
              </h2>

              <p className="mt-3 text-slate-400">{project.category}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
