import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import CategoriesSection from "./components/CategoriesSection";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col bg-[#0a0a0a] text-white selection:bg-purple-500/30 overflow-x-hidden w-full">
    <Navbar />

      {/* FONDO AMBIENT */}
      <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h- w- rounded-full bg-purple-600/20 blur-" />
        <div className="absolute right-[-5%] top-[20%] h- w- rounded-full bg-blue-600/15 blur-" />
        <div className="absolute bottom-[10%] left-[30%] h- w- rounded-full bg-pink-600/10 blur-" />
      </div>

      {/* 1. HERO */}
      <div className="relative">
        <HeroSection />
      </div>

      {/* 2. ACHIEVEMENTS */}
      <div className="container mx-auto px-6 lg:px-12 -mt-12 relative z-20">
        <div className="rounded- border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-2 shadow-2xl">
           <AchievementsSection />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">

        {/* 3. ABOUT - ANTES py-24 md:py-32 - AHORA COMPACTO */}
        <section id="about" className="py-8 md:py-12 border-t border-white/[0.06] mt-12">
          <AboutSection />
        </section>

        

        {/* 5. PROJECTS */}
        <section id="projects" className="py-8 md:py-12 border-t border-white/[0.06]">
          <ProjectsSection />
        </section>

        {/* 6. CONTACT - ANTES py-20 md:py-20 - AHORA PEGADITO */}
        <section id="contact" className="py-8 md:py-12">
          <div className="relative rounded- border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-6 md:p-10 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 pointer-events-none" />
            <EmailSection />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}