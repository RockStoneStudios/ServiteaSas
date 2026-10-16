"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // VENTAS
  {
    id: 1,
    title: "Mirage Life New",
    description: "Minisplit on-off 12.000 BTU - 220V - Alto rendimiento",
    image: "/images/projects/mirage-life-new.webp",
    tag: ["Todo", "Ventas"],
  },
  {
    id: 2,
    title: "Mirage Inverter X",
    description: "Minisplit INVERTER 12.000 BTU - Ahorro 60%",
    image: "/images/projects/aires2.png",
    tag: ["Todo", "Ventas"],
  },
  {
    id: 3,
    title: "LG Dual Cool",
    description: "Minisplit on-off 12.000 BTU - Gold Fin",
    image: "/images/projects/aires3.jpg",
    tag: ["Todo", "Ventas"],
  },
  {
    id: 4,
    title: "LG Inverter Dual",
    description: "Minisplit INVERTER - Enfriamiento rápido",
    image: "/images/projects/aires4.jpg",
    tag: ["Todo", "Ventas"],
  },
  // REPARACIONES
  {
    id: 5,
    title: "Mantenimiento Preventivo",
    description: "Limpieza, carga de gas R410A / R32",
    image: "/images/projects/aires5.jpg",
    tag: ["Todo", "Reparaciones"],
  },
  {
    id: 6,
    title: "Instalación Certificada",
    description: "Garantía real en Sopetrán y Occidente",
    image: "/images/projects/aires6.jpg",
    tag: ["Todo", "Reparaciones"],
  },
  // REPUESTOS - aca agregas los que quieras
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
    description: "Askoll 30W Mabe LG 【entity-Samsung¦canonical_name=Samsung】",
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
    <section id="projects" className="w-full py-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text- tracking-widest text-white/60">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          SOPETRÁN • SAN JERÓNIMO • MEDELLÍN
        </div>
        <h2 className="mt-5 text- sm:text-5xl font-black tracking-tight text-white">
          Mis <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Servicios</span>
        </h2>
      </div>

      <div className="flex justify-center mb-8 px-4">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#1a1a1a] p-1.5">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`shrink-0 rounded-full px-5 py-2.5 text- font-medium transition-all ${
                tag === t? "bg-white text-black shadow" : "text-white/60 hover:text-white hover:bg-white/10"
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
            animate={isInView? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
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