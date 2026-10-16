"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, ArrowUpRight } from "lucide-react";

const categoriaData = {
  "todos-los-productos": {
    titulo: "Todos los Productos",
    desc: "Catálogo completo Servitea - Occidente Antioqueño",
    imagenes: ["/images/projects/MIRAGE-LIFE-NEW.webp", "/images/projects/aires2.png", "/images/projects/aires3.jpg", "/images/projects/aires4.jpg", "/images/projects/aires5.jpg", "/images/projects/aires6.jpg"],
  },
  "accesorios-e-insumos": {
    titulo: "Accesorios e Insumos",
    desc: "Termostatos, Control Remoto, Protectores de Voltaje",
    imagenes: ["/images/projects/aires3.jpg", "/images/projects/aires4.jpg"],
  },
  "aires-acondicionados": {
    titulo: "Aires Acondicionados",
    desc: "Cassette, Piso Techo, Centrales",
    imagenes: ["/images/projects/MIRAGE-LIFE-NEW.webp", "/images/projects/aires2.png"],
  },
  "repuestos-para-lavadoras": {
    titulo: "Repuestos para Lavadoras",
    desc: "Bombas, Tarjetas, Presostatos, Correas",
    imagenes: ["/images/projects/aires5.jpg", "/images/projects/aires6.jpg"],
  },
  "repuestos-para-refrigeradores": {
    titulo: "Repuestos para Refrigeradores",
    desc: "Termostatos, Relays, Filtros, Motoventiladores",
    imagenes: ["/images/projects/aires3.jpg", "/images/projects/aires4.jpg"],
  },
  "tuberia-de-cobre": {
    titulo: "Tubería de Cobre",
    desc: "Tubería Flexible y Rígida",
    imagenes: ["/images/projects/aires2.png"],
  },
  "minisplits": {
    titulo: "Minisplits",
    desc: "Minisplits Inverter, Convencionales, Clase A",
    imagenes: ["/images/projects/MIRAGE-LIFE-NEW.webp"],
  },
};

export default function CategoriaPage() {
  const params = useParams();
  const slug = params.slug;
  const data = categoriaData[slug] || categoriaData["todos-los-productos"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-10 px-6">
      <div className="max-w- mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text- text-white/50 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <h1 className="text- md:text- font-black text-white tracking-tight leading-none">
              {data.titulo}
            </h1>
            <p className="mt-3 text-white/50 text-">{data.desc}</p>
          </div>
          <a href="https://wa.me/573137206362" target="_blank" className="h-fit inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text- font-bold hover:bg-zinc-100 transition-colors">
            Cotizar por WhatsApp <Phone className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.imagenes.map((img, i) => (
            <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded- border border-white/[0.08] bg-[#111111]">
              <Image
                src={img}
                alt={`${data.titulo} ${i}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text- font-medium">{data.titulo}</span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.imagenes.length === 0 && (
          <div className="rounded- border border-white/[0.08] bg-[#111111] p-10 text-center">
            <p className="text-white/50 text-">Pronto subiremos fotos de {data.titulo}</p>
          </div>
        )}
      </div>
    </div>
  );
}