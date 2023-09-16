"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Servicios",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Aires Acondicionados</li>
        <li>Neveras</li>
        <li>Lavadoras</li>
        <li>Refrigeradores</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Aires Acondicionados</li>
        <li>Repuestos</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Jhony Steban Orrego Gutierrez</li>
        <li> Miguel Angel Orrego </li>
        <li>Dahiana Martinez Ortiz</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/presentacion.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Quienes Somos</h2>
          <p className="text-base lg:text-lg">
            <span className="text-3xl font-semibold">S</span>ervitea una empresa que nació en el 2019 con la intención de brindarles la mejor atención
              en servicios a domicilio con equipos de refrigeración y lavadoras contamos con  personal calificado para la atención y satifacion  de nuestros clientes  
              proyectando siempre una imagen de confianza siendo la mejor alternativa para el occidente antioqueño así participamos en el desarrollo de hogares y empresas
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Servicios{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Vendemos{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Personal{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
