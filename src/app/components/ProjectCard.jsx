"use client";
import Image from "next/image";

export default function ProjectCard({ title, description, imgUrl, badge }) {
  return (
    <div className="group relative overflow-hidden rounded- border border-white/[0.08] bg-[#151515] transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1">
      {/* IMAGEN */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-white/[0.04] to-[#0f0f0f] flex items-center justify-center overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute left-3 top-3 rounded-full bg-white text-black text- font-bold px-2.5 py-1 tracking-wide">
            {badge}
          </div>
        )}
      </div>
      {/* TEXTO */}
      <div className="p-4">
        <h3 className="text- font-bold text-white truncate">{title}</h3>
        <p className="mt-1 text- text-white/50 line-clamp-2 leading-snug">{description}</p>
      </div>
    </div>
  );
}