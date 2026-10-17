"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // VENTAS (Nuevos aires acondicionados)
  {
    id: 2,
    title: "Aux Inverter",
    description: "Minisplit Inverter Alta Eficiencia - Ahorro de energía",
    image: "/aux-inverter.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },
  {
    id: 3,
    title: "Hisense Inverter",
    description: "Tecnología Inverter avanzada con control inteligente",
    image: "/hisense_inverter.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },
  {
    id: 4,
    title: "LG Inverter",
    description: "Enfriamiento rápido y silencioso con garantía",
    image: "/lg-inverter.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },
  {
    id: 18,
    title: "Midea Minisplit",
    description: "Climatización confiable para tus espacios",
    image: "/midea.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },
  {
    id: 19,
    title: "Mirage Inverter",
    description: "Alto rendimiento y diseño moderno",
    image: "/mirage.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },
  {
    id: 20,
    title: "Rowa Climatización",
    description: "Equipos potentes y de excelente durabilidad",
    image: "/rowa.jpeg",
    tag: ["Todo", "Ventas"],
    badge: "AIRE",
  },

  // REPARACIONES
 

  // REPUESTOS
  {
    id: 10,
    title: "Sensor Temperatura",
    description: "Termistor NTC 5K / 10K universal aire",
    image: "/descarga.jpg",
    tag: ["Todo", "Repuestos"],
    badge: "AIRE",
  },
  {
    id: 11,
    title: "Compresor Aire 12K",
    description: "Rotativo R410A 12K a 24K BTU",
    image: "/compresor.jpg",
    tag: ["Todo", "Repuestos"],
    badge: "AIRE",
  },
  {
    id: 12,
    title: "Bomba Desagüe Lavadora",
    description: "Askoll 30W Mabe LG Samsung",
    image: "/bomba.webp",
    tag: ["Todo", "Repuestos"],
    badge: "LAVADORA",
  },
  {
    id: 13,
    title: "Transmisión Lavadora",
    description: "Mecanismo completo 4.5kg a 21kg",
    image: "/transmision.webp",
    tag: ["Todo", "Repuestos"],
    badge: "LAVADORA",
  },
  {
    id: 14,
    title: "Varillas Suspensión",
    description: "Kit 4 varillas 65cm W10780045",
    image: "/varillas.webp",
    tag: ["Todo", "Repuestos"],
    badge: "LAVADORA",
  },
  {
    id: 15,
    title: "Motor Evaporador Nevera",
    description: "110V 297250000",
    image: "/evaporador.jpg",
    tag: ["Todo", "Repuestos"],
    badge: "NEVERA",
  },
  {
    id: 16,
    title: "Resistencia Deshielo",
    description: "260W LG 5300JB1092B",
    image: "/deshielo.jpg",
    tag: ["Todo", "Repuestos"],
    badge: "NEVERA",
  },
  {
    id: 17,
    title: "Tarjeta Aire Inverter",
    description: "Universal con control remoto",
    image: "/inverter.jpg",
    tag: ["Todo", "Repuestos"],
    badge: "AIRE",
  },
];

const TAGS = ["Todo", "Ventas", "Reparaciones", "Repuestos"];

export default function ProjectsSection() {
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const filtered = projectsData.filter((p) => p.tag.includes(tag));

  return (
    <section id="projects" className="w-full py-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs sm:text-sm tracking-widest text-white/60">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate">SOPETRÁN • SAN JERÓNIMO • MEDELLÍN</span>
        </div>
        <h2 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight text-white">
          Mis <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Servicios</span>
        </h2>
      </div>

      {/* Barra de etiquetas con scroll horizontal adaptada para móviles */}
      <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#1a1a1a] p-1.5 shrink-0 mx-auto">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                tag === t ? "bg-white text-black shadow" : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((project, i) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            layout
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              badge={project.badge}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}