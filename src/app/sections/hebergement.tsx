import React, { forwardRef, useState } from "react";
import SectionLayout from "../components/SectionLayout";
import HebergementOverlay from "../components/HebergementOverlay";

const HebergementSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <SectionLayout 
      ref={ref} 
      imgSrc="/images/bg_hebergement.png"
      overlayContent={<HebergementOverlay onClose={() => setOpenOverlay(false)} open={openOverlay} />}
      openOverlay={openOverlay}
      onOpenOverlay={() => setOpenOverlay(true)}
    >
      <h1 className="subtitle orbitron">Sauvegarde de donnees</h1>
      <h1 className="title">Hebergement</h1>
    </SectionLayout>
  )
});
HebergementSection.displayName = "Hebergement";
export default HebergementSection;
