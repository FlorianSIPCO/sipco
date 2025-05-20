"use client";
import { useState, FC } from "react";
import SectionLayout from "../components/SectionLayout";
import CTA from "../components/CTA";
import AboutOverlay from "../components/AboutOverlay";
import MenuButton from "../components/MenuButton";
import ProgressBar from "../components/ProgressBar";
import Image from "next/image";

type AboutSectionProps = {
  className?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ className }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <SectionLayout
      bgImage="/images/bg_about.png"
      className={className}
      logo={
        <Image src="/images/logo.png" alt="SIPCO Logo" width={180} height={50} />
      }
      subtitle={
        <h2 className="subtitle text-left">A propos</h2>
      }
      title={
        <h1 className="title text-left mt-[-0.5em]">Qui sommes nous ?</h1>
      }
      menu={
        <MenuButton onClick={() => alert("Ouverture menu !")} />
      }
      progressBar={
        <ProgressBar progress={30} />
      }
      cta={
        !showOverlay ? (
          <CTA onClick={() => setShowOverlay(true)} />
        ) : null
      }
      overlay={
        showOverlay ? (
          <AboutOverlay onClose={() => setShowOverlay(false)} />
        ) : null
      }
      showOverlay={showOverlay}
    />
  );
}

export default AboutSection;