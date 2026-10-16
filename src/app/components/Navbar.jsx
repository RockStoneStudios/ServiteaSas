"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.08] bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6">
        <Link href={"/"} className="flex min-w-0 items-center gap-2.5">
          <Image src={"/servitea.png"} alt="servitea" width={36} height={36} className="shrink-0 rounded-" />
          <div className="flex min-w-0 flex-col leading-none">
            <span className="truncate text- font-bold text-white">Servitea</span>
            <span className="text- tracking-[0.2em] text-white/50 uppercase">Antioquia</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l,i) => <NavLink key={i} href={l.path} title={l.title} />)}
        </div>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white"
        >
          {navbarOpen? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;