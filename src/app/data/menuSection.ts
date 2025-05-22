// src/data/menuSections.ts
export type SectionItem = {
  slug: string;
  label: string;
  preview: string; // url vers l'image
};

export const SECTIONS: SectionItem[] = [
  {
    slug: "accueil",
    label: "ACCUEIL",
    preview: "/images/bg_home.png",
  },
  {
    slug: "about",
    label: "QUI SOMMES NOUS ?",
    preview: "/images/bg_about.png",
  },
  {
    slug: "hardware",
    label: "MAINTENANCE",
    preview: "/images/bg_hardware1.png",
  },
  {
    slug: "hebergement",
    label: "HEBERGEMENT",
    preview: "/images/bg_hebergement.png",
  },
  {
    slug: "cybersecurity",
    label: "CYBERSECURITE",
    preview: "/images/bg_cyber.png",
  },
  {
    slug: "developpement",
    label: "DEVELOPPEMENT WEB",
    preview: "/images/computer1.png",
  },
];
