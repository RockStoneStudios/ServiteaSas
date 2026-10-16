"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Check, Snowflake, WashingMachine, Wrench, Store, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Servicios",
    id: "skills",
    icon: Wrench,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "Aires Acondicionados",
          "Repuestos de Lavadoras",
          "Repuestos de Refrigeradores",
          "Mantenimiento Preventivo",
          "Carga de Gas R410A / R32",
          "Instalación Certificada"
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5 text- sm:text- text-white/70">
            <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-white/80" />
            </div>
            <span className="leading-tight">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Vendemos",
    id: "education",
    icon: Store,
    content: (
      <div className="grid grid-cols-1 gap-3">
        {[
          { name: "Aires Acondicionados", desc: "Convencional e Inverter 12k a 60k BTU" },
          { name: "Repuestos Originales", desc: "Para lavadoras, neveras y aires" },
          { name: "Insumos Profesionales", desc: "Tubería de cobre, gases, aislantes" },
        ].map((item) => (
          <div key={item.name} className="rounded- border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text- font-semibold text-white">{item.name}</p>
            <p className="text- text-white/40 mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Personal",
    id: "certifications",
    icon: Users,
    content: (
      <div className="space-y-2">
        <p className="text- tracking-[0.15em] text-white/30 uppercase mb-3">Equipo calificado Occidente Antioqueño</p>
        {[
          "Jhony Steban Orrego Gutiérrez",
          "Miguel Ángel Orrego",
          "Dahiana Martínez Ortiz",
          "Luis Santiago Orrego Gutiérrez",
          "Anyi Paola Orrego Gutiérrez",
        ].map((person) => (
          <div key={person} className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text- font-bold text-white shrink-0">
              {person.split(" ")[0][0]}
            </div>
            <span className="text- sm:text- text-white/80 truncate">{person}</span>
            <ShieldCheck className="ml-auto w-4 h-4 text-white/20 shrink-0" />
          </div>
        ))}
      </div>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white w-full" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* FOTO */}
        <div className="md:col-span-5 relative order-2 md:order-1">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] rounded- overflow-hidden border border-white/[0.08] bg-[#111111] max-w- mx-auto md:max-w-none">
            <Image
              src="/images/presentacion.jpg"
              alt="Equipo Servitea"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded- border border-white/10 bg-black/60 backdrop-blur-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded- bg-white text-black flex items-center justify-center shrink-0">
                <Snowflake className="w-5 h-5" />
              </div>
              <div className="min-w-0 leading-tight">
                <p className="text- font-bold text-white">Desde 2019</p>
                <p className="text- text-white/60 mt-0.5">Occidente Antioqueño</p>
              </div>
              <div className="ml-auto text- bg-white text-black px-2.5 py-1 rounded-full font-bold shrink-0">5+ AÑOS</div>
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div className="md:col-span-7 order-1 md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text- tracking-[0.2em] text-white/50 uppercase">
            QUIÉNES SOMOS
          </span>

          <h2 className="mt-4 text- sm:text- md:text- lg:text- font-black tracking-tight leading-[0.9] text-white">
            La mejor alternativa
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent"> para tu hogar y empresa.</span>
          </h2>

          <p className="mt-4 sm:mt-5 text- sm:text- leading-relaxed text-white/50 max-w-">
            <span className="text-white font-semibold">Servitea</span> nació en 2019 con la intención de brindar la mejor atención en servicios a domicilio de equipos de refrigeración y lavadoras. Contamos con personal calificado, proyectando siempre una imagen de confianza y siendo la mejor alternativa para el occidente antioqueño.
          </p>

          <div className="mt-6 sm:mt-8 flex items-center gap-1.5 sm:gap-2 p-1 rounded-full border border-white/[0.08] bg-[#111111] w-full sm:w-fit overflow-x-auto">
            {TAB_DATA.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text- sm:text- font-medium transition-all shrink-0 ${
                  tab === t.id
                  ? "bg-white text-black shadow"
                    : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.title}
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-5 sm:mt-6 min-h- rounded- border border-white/[0.06] bg-[#111111] p-4 sm:p-5"
          >
            {activeTab?.content}
          </motion.div>
        </div>
      </div>
    </section>
  );
}