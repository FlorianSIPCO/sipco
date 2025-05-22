'use client'

import { useEffect } from "react";
import { useMenu } from "../context/MenuContext";

export const SectionTracker: React.FC = () => {
  const { setCurrentSection, sections } = useMenu();

  useEffect(() => {
    const onScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.slug);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Ajuste le seuil selon ton design :
          if (
            rect.top < window.innerHeight * 0.35 &&
            rect.bottom > window.innerHeight * 0.3
          ) {
            setCurrentSection(section.slug);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Premier check
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections, setCurrentSection]);

  return null;
};
