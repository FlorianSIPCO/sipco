import Image from "next/image";
import React, { forwardRef, ReactNode } from "react";
import CTA from "./CTA";
import MenuButton from "./MenuButton";

type SectionLayoutProps = {
  imgSrc: string;
  children?: ReactNode;
};

const SectionLayout = forwardRef<HTMLDivElement, SectionLayoutProps>(
  ({ imgSrc, children }, ref) => (
    <div
      ref={ref}
      className="section-anim absolute left-0 top-0 w-screen h-screen overflow-hidden"
    >
      {/* BG IMAGE */}
      <div className="section-img absolute inset-0 z-0 pointer-events-none">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* LOGO - CENTRÉ HAUT */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20 flex items-center">
        <Image src='/images/logo.png' alt="Logo SIPCO" width={220} height={60} />
      </div>

      {/* MENU BUTTON + PROGRESSBAR - EN HAUT À DROITE */}
      <div className="absolute top-10 right-10 z-20 flex flex-col items-center gap-5">
        <MenuButton />
      </div>

      {/* CTA - CENTRÉ VERTICALEMENT */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <CTA />
      </div>

      {/* CONTENU PERSONNALISÉ (titre, description...) */}
      <div className="absolute top-4/11 left-6/12 ml-10 transform z-30 flex flex-col items-start">
        {children}
      </div>
    </div>
  )
);
SectionLayout.displayName = "SectionLayout";
export default SectionLayout;
