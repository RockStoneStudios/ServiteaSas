"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-x-hidden pt-28 pb-10 sm:pt-32 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs sm:text-sm text-[#ADB7BE] backdrop-blur-md mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="truncate">Disponible para nuevos proyectos</span>
            </motion.div>

            <h1 className="text-white mb-5 sm:mb-6 text-4xl leading-[0.85] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300">
                Somos,
              </span>
              <br />
              <span className="text-white block min-h-[1.1em]">
                <TypeAnimation
                  sequence={["Servitea", 2000, "Instalamos", 2000, "Reparamos", 2000, "Innovamos", 2000]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  cursor={false}
                  className="bg-gradient-to-r from-white to-white/70 bg-clip-text"
                />
              </span>
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Refrescamos tus espacios para que tus ideas fluyan libremente.
              <span className="text-white/70"> Climatización profesional en Antioquia.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0">
              <Link
                href="#contact"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-all"
              >
                Cotiza tu proyecto
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projects"
                className="flex w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:bg-white/[0.08] transition-colors"
              >
                Ver trabajos
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 flex items-center gap-3 justify-center lg:justify-start text-sm text-white/40">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400 border-2 border-[#0a0a0a]" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#0a0a0a]" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-[#0a0a0a]" />
              </div>
              <span>+120 clientes felices</span>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full order-2 max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-purple-600/30 blur-3xl rounded-full" />
              <div className="relative h-full w-full rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl p-3 shadow-[0_0_80px_-20px_rgba(120,119,198,0.3)]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[#181818]">
                  <Image
                    src="/images/hero.png"
                    alt="Servitea"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#1e1e1e]/90 backdrop-blur-xl px-4 py-3 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-none">Servicio 24/7</p>
                      <p className="text-xs text-white/60 mt-1">En todo el Occidente</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;