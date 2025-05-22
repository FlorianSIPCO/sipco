import React, { useState, forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";
import AboutOverlay from "../components/AboutOverlay";

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <SectionLayout
      ref={ref}
      imgSrc="/images/bg_about.png"
      overlayContent={<AboutOverlay onClose={() => setOpenOverlay(false)} open={openOverlay} />}
      openOverlay={openOverlay}
      onOpenOverlay={() => setOpenOverlay(true)}
    >
      <h1 className="subtitle orbitron">A propos</h1>
      <h1 className="title">Qui sommes nous ?</h1>
    </SectionLayout>
  );
});
AboutSection.displayName = "About";
export default AboutSection;
