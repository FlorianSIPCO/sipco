'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

type Section = {
  slug: string;
  label: string;
};

interface MenuContextType {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  currentSection: string;
  setCurrentSection: (slug: string) => void;
  sections: Section[];
}

const sections: Section[] = [
  { slug: "accueil", label: "Accueil" },
  { slug: "about", label: "À propos" },
  { slug: "hardware", label: "Matériel" },
  { slug: "hebergement", label: "Hébergement" },
  { slug: "cybersecurity", label: "Cybersécurité" },
  { slug: "developpement", label: "Développement Web" },
  { slug: "gallery_contact", label: "Galerie / Contact" },
];

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used within a MenuProvider");
  return ctx;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(sections[0].slug);

  return (
    <MenuContext.Provider
      value={{ menuOpen, setMenuOpen, currentSection, setCurrentSection, sections }}
    >
      {children}
    </MenuContext.Provider>
  );
};
