"use client";
import Link from "next/link";
import {
  Package, Thermometer, AirVent, Snowflake,
  Settings, Droplets, Fan, Wrench,
  Boxes, Pipette, Wind, WashingMachine, Refrigerator, ArrowUpRight
} from "lucide-react";

const items = [
  { title: "Todos los Productos", sub: "", slug: "todos-los-productos", icon: Boxes },
  { title: "Accesorios e Insumos", sub: "Termostatos, Control Remoto, Protectores", slug: "accesorios-e-insumos", icon: Thermometer },
  { title: "Aires Acondicionados", sub: "Cassette, Piso Techo, Centrales", slug: "aires-acondicionados", icon: AirVent },
  { title: "Aires Acondicionados Daikin", sub: "Sistemas VRV y Mini-Split", slug: "daikin", icon: AirVent },
  { title: "Aires Acondicionados McQuay", sub: "Paquetes McQuay", slug: "mcquay", icon: AirVent },
  { title: "Aires Acondicionados 【entity-Samsung¦canonical_name=Samsung】", sub: "Cassette 360", slug: "【entity-samsung¦canonical_name=Samsung】", icon: AirVent },
  { title: "Aislante Térmico", sub: "", slug: "aislante-termico", icon: Package },
  { title: "Chillers", sub: "", slug: "chillers", icon: Snowflake },
  { title: "Compresores", sub: "", slug: "compresores", icon: Settings },
  { title: "Gas Refrigerante", sub: "R410A, R22, R32", slug: "gas-refrigerante", icon: Droplets },
  { title: "Manejadoras Hospitalarias", sub: "", slug: "manejadoras-hospitalarias", icon: Fan },
  { title: "Minisplits", sub: "Inverter, Convencionales", slug: "minisplits", icon: Wind },
  { title: "Motores", sub: "Motores Weg", slug: "motores", icon: Wrench },
  { title: "Tubería de Cobre", sub: "Flexible, Rígida", slug: "tuberia-de-cobre", icon: Pipette },
  { title: "Repuestos para Lavadoras", sub: "Bombas, Tarjetas, Presostatos", slug: "repuestos-para-lavadoras", icon: WashingMachine },
  { title: "Repuestos para Refrigeradores", sub: "Termostatos, Relays, Filtros", slug: "repuestos-para-refrigeradores", icon: Refrigerator },
];

export default function CategoriesSectionDark() {
  return (
    <div className="w-full py-8">
      <div className="max-w- mx-auto px-6 lg:px-0">
        <h2 className="text-center font-black text-white uppercase tracking-[0.15em] text- md:text- py-5 px-4 rounded-t- border border-white/[0.08] bg-white/[0.03]">
          Aires Acondicionados Convencionales e Inverter Ahorradores de Energía
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-b- overflow-hidden border-x border-b border-white/[0.08] bg-[#111111]">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/categoria/${item.slug}`}
              className="group relative flex items-start justify-between gap-5 p-6 bg-[#111111] hover:bg-white/[0.04] border-b border-r border-white/[0.06] transition-all"
            >
              <div className="flex-1">
                <h3 className="font-bold text- leading-[1.25] text-white">
                  {item.title}
                </h3>
                {item.sub && (
                  <p className="mt-2 text- leading-[1.4] text-white/50 line-clamp-2 max-w-">
                    {item.sub}
                  </p>
                )}
              </div>
              <div className="shrink-0 flex flex-col items-end gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded- bg-white/[0.06] border border-white/[0.08] group-hover:bg-white group-hover:text-black transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}