"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Aire Acondicionados",
    description: "Minisplit MIRAGE on – off 12Btu 220v",
    image: "/images/projects/MIRAGE-LIFE-NEW.webp",
    tag: ["All", "Ventas", "Reparaciones"],
    gitUrl: "/",
    previewUrl: "/",
    price : '1.620.000'
  },
  {
    id: 2,
    title: "Aire Acondicionado",
    description: "Minisplit MIRAGE INVERTER 12Btu 220V",
    image: "/images/projects/aires2.png",
    tag: ["All", "Reparaciones","Ventas"],
    gitUrl: "/",
    previewUrl: "/",
    price : "2.170.000"
  },
  {
    id: 3,
    title: "Aire Acondicionado",
    description: "Minisplit LG on – off 12Btu 220V",
    image: "/images/projects/aires3.jpg",
    tag: ["All", "Ventas", "Reparaciones"],
    price : "1.760.000",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Aire Acondicionados",
    description: "Minisplit LG INVERTER 12Btu 220V ",
    image: "/images/projects/aires4.jpg",
    tag: ["All", "Ventas","Reparaciones"],
    gitUrl: "/",
    previewUrl: "/",
    price : "2.560.000",
  },
  {
    id: 5,
    title: "Aire Acondicionado",
    description: "Minisplit HISENSE on-off 12Btu 220V ",
    image: "/images/projects/aires5.jpg",
    tag: ["All", "Ventas","Reparaciones"],
    gitUrl: "/",
    previewUrl: "/",
    price: '1.540.000'
  },
  {
    id: 6,
    title: "Aire Acondicionado",
    description: "Minisplit HISENSE INVERTER 12Btu 220V",
    image: "/images/projects/aires6.jpg",
    tag: ["All", "Venta", "Reparacion"],
    gitUrl: "/",
    previewUrl: "/",
    price : '1.720.000'
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Servicios
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Ventas"
          isSelected={tag === "Ventas"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Reparaciones"
          isSelected={tag === "Reparaciones"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              price ={project.price}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
