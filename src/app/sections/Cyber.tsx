import React, { forwardRef, useState } from "react";
import SectionLayout from "../components/SectionLayout";
import CyberOverlay from "../components/CyberOverlay";

const CyberSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <SectionLayout 
      ref={ref} 
      imgSrc="/images/bg_cyber.png"
      overlayContent={<CyberOverlay onClose={() => setOpenOverlay(false)} open={openOverlay} />}
      openOverlay={openOverlay}
      onOpenOverlay={() => setOpenOverlay(true)}
    >
      <h1 className="subtitle orbitron">Protection des donnees</h1>
      <h1 className="title">Cybersecurite</h1>
    </SectionLayout>
  )
});
CyberSection.displayName = "Cyber";
export default CyberSection;
