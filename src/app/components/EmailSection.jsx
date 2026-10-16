"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Camera
} from "lucide-react";

// Usamos tus SVGs que ya tienes, no lucide para FB/IG
import FbIcon from "../../../public/facebook.svg";
import IgIcon from "../../../public/instagram.svg";

const EmailSection = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative py-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* IZQUIERDA */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-20 -left-20 w- h- bg-purple-600/20 blur- rounded-full pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text- tracking-widest text-white/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              RESPONDEMOS EN 5 MIN
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.9]">
              ¿Qué esperas para
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> seguirnos?</span>
            </h2>

            <p className="mt-4 text- leading-relaxed text-white/50 max-w-">
              Mira el amor con el que instalamos y reparamos aires, lavadoras y refrigeradores en el Occidente.
            </p>

            <div className="mt-8 grid gap-3">
              <a href="tel:3137206362" className="flex items-center gap-4 rounded- border border-white/[0.06] bg-[#111111] p-4 hover:bg-white/[0.04] transition-colors group">
                <div className="w-10 h-10 rounded- bg-white text-black flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text- text-white/40">Llámanos</p>
                  <p className="text- font-bold text-white">313 720 6362</p>
                </div>
                <ArrowRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-all" />
              </a>

              <div className="flex items-center gap-4 rounded- border border-white/[0.06] bg-[#111111] p-4">
                <div className="w-10 h-10 rounded- bg-white/[0.06] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <p className="text- text-white/40">Cobertura</p>
                  <p className="text- font-medium text-white">Sopetrán, San Jerónimo, Medellín</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text- tracking-[0.2em] text-white/30 uppercase mb-3">Síguenos</p>
              <div className="flex gap-3">
                <Link href="https://www.facebook.com/servitea.antioquia" target="_blank" className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Image src={FbIcon} alt="fb" width={20} height={20} />
                </Link>
                <Link href="https://www.instagram.com/servitea_antioquia" target="_blank" className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Image src={IgIcon} alt="ig" width={20} height={20} />
                </Link>
                <Link href="https://wa.me/573137206362" target="_blank" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA - FORM */}
        <div className="lg:col-span-7">
          <div className="relative rounded- border border-white/[0.08] bg-[#111111] p-6 md:p-8">
            <h3 className="text-white font-bold text-">Cotiza tu servicio</h3>
            <p className="text-white/40 text- mt-1">Te respondemos hoy mismo</p>

            <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text- text-white/60 mb-2 block">Nombre</label>
                  <input required placeholder="Osvaldo Rios" className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded- px-4 py-3.5 text- text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50" />
                </div>
                <div>
                  <label className="text- text-white/60 mb-2 block">WhatsApp</label>
                  <input required placeholder="313 720 6362" className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded- px-4 py-3.5 text- text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50" />
                </div>
              </div>
              <div>
                <label className="text- text-white/60 mb-2 block">¿Qué necesitas?</label>
                <select className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded- px-4 py-3.5 text- text-white">
                  <option>Instalación de Aire</option>
                  <option>Reparación / Mantenimiento</option>
                  <option>Repuesto Lavadora / Refrigerador</option>
                </select>
              </div>
              <div>
                <label className="text- text-white/60 mb-2 block">Cuéntanos</label>
                <textarea rows={4} placeholder="Ej: Necesito instalar un minisplit de 12k en Sopetrán..." className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded- px-4 py-3.5 text- text-white placeholder:text-white/20 resize-none" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black font-semibold py-4 text- hover:bg-zinc-100">
                {sent? "¡Enviado! Te escribimos ya" : "Enviar cotización"}
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text- text-white/30 flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" /> Respuesta promedio: 5 min
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;