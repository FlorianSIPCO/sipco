'use client'

// import React, { useEffect, useRef } from "react";
// import { useMenu } from '../context/MenuContext'
// import gsap from "gsap";

// export const MenuOverlay: React.FC = () => {
//   const { menuOpen, setMenuOpen, currentSection, sections } = useMenu();
//   const overlayRef = useRef<HTMLDivElement | null>(null);
//   const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

//   // Animations GSAP
//   useEffect(() => {
//     if (menuOpen) {
//       gsap.fromTo(
//         overlayRef.current,
//         { y: "-100%", opacity: 0 },
//         { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
//       );
//       gsap.fromTo(
//         itemsRef.current,
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, delay: 0.2 }
//       );
//     }
//   }, [menuOpen]);

//   // Close on ESC key
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "Escape" && menuOpen) setMenuOpen(false);
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [menuOpen, setMenuOpen]);

//   // Click outside overlay to close (accessibilité)
//   useEffect(() => {
//     const onClick = (e: MouseEvent) => {
//       if (menuOpen && overlayRef.current && e.target === overlayRef.current) {
//         setMenuOpen(false);
//       }
//     };
//     if (menuOpen) document.addEventListener("mousedown", onClick);
//     return () => document.removeEventListener("mousedown", onClick);
//   }, [menuOpen, setMenuOpen]);

//   if (!menuOpen) return null;

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-[1000] bg-black bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500"
//       style={{ willChange: "transform, opacity" }}
//       aria-modal="true"
//       tabIndex={-1}
//     >
//       <button
//         aria-label="Fermer le menu"
//         className="absolute top-8 right-8 text-white text-3xl md:text-5xl hover:scale-125 transition"
//         onClick={() => setMenuOpen(false)}
//       >
//         ×
//       </button>
//       <nav className="space-y-8">
//         {sections.map((section, i) => (
//           <div
//             key={section.slug}
//             ref={el => {itemsRef.current[i] = el} }
//             className={`text-4xl md:text-6xl font-bold cursor-pointer select-none px-4 py-2 rounded-lg transition-all duration-300
//               ${
//                 currentSection === section.slug
//                   ? "text-cyan-400 scale-110 bg-white/5"
//                   : "text-white hover:text-cyan-200 hover:bg-white/10"
//               }`}
//             onClick={() => {
//               document.getElementById(section.slug)?.scrollIntoView({ behavior: "smooth" });
//               setMenuOpen(false);
//             }}
//           >
//             {section.label}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import { SECTIONS, SectionItem } from "../data/menuSection";
import gsap from "gsap";
import Image from "next/image";
import { useMenu } from "../context/MenuContext";

export const MenuOverlay: React.FC = () => {
  const { menuOpen, setMenuOpen, currentSection } = useMenu();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const diamondRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const sectionToShow: SectionItem =
    SECTIONS.find(s => s.slug === (hovered || currentSection)) || SECTIONS[0];

  // GSAP apparition menu/items
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        overlayRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
      );
      gsap.fromTo(
        itemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, delay: 0.2 }
      );
      gsap.fromTo(
        diamondRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.3, ease: "expo.out" }
      );
    }
  }, [menuOpen]);

  // Animation image au changement de section hovered/courant
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "expo.out" }
      );
    }
  }, [sectionToShow.preview]);

  if (!menuOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] bg-black bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center"
      style={{ willChange: "transform, opacity" }}
      aria-modal="true"
      tabIndex={-1}
    >
      {/* LOGO SIPCO */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <Image
          src="/images/logo.png"
          alt="SIPCO"
          width={160}
          height={36}
          priority
          className="object-contain"
        />
      </div>
      {/* CLOSE BUTTON */}
      <button
        aria-label="Fermer le menu"
        className="absolute top-8 right-8 text-red-500 text-3xl md:text-5xl hover:scale-125 transition"
        onClick={() => setMenuOpen(false)}
      >
        ×
      </button>
      {/* RED DIAGONAL LINES */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 border-t-2 border-red-600" style={{ transform: "rotate(-30deg) scaleY(1.1)" }} />
        <div className="absolute bottom-0 right-0 w-1/2 border-b-2 border-red-600" style={{ transform: "rotate(-30deg) scaleY(1.1)" }} />
      </div>
      {/* MAIN FLEX */}
      <div className="relative flex flex-row w-full max-w-6xl justify-between items-center h-[60vh]">
        {/* MENU */}
        <nav className="flex flex-col justify-center gap-3 z-10 ml-12">
          {SECTIONS.map((section, i) => (
            <div
              key={section.slug}
              ref={el => { itemsRef.current[i] = el; }}
              className={`
                font-orbitron tracking-wide 
                text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase cursor-pointer
                transition-all duration-300
                ${section.slug === (hovered || currentSection)
                  ? "text-white scale-110 drop-shadow-lg"
                  : "text-neutral-500 hover:text-red-700 hover:scale-105"}
              `}
              onMouseEnter={() => setHovered(section.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                document.getElementById(section.slug)?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              {section.label}
            </div>
          ))}
        </nav>
        {/* DIAMOND IMAGE */}
        <div className="z-10 flex-1 flex justify-center items-center">
          <div
            ref={diamondRef}
            className="relative w-48 h-48 md:w-64 md:h-64"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              border: "3px solid #e11d48",
              boxShadow: "10px 12px 30px #e11d48a0",
              background: "#15151aee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              ref={imageRef}
              src={sectionToShow.preview}
              alt={sectionToShow.label}
              fill
              style={{ objectFit: "cover", borderRadius: 18 }}
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

