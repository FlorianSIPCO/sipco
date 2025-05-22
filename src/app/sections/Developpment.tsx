import React, { forwardRef, useState } from "react";
import SectionLayout from "../components/SectionLayout";
import DeveloppmentOverlay from "../components/DeveloppmentOverlay";

const DeveloppmentSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [openOverlay, setOpenOverlay] = useState(false);
  
  return (
    <SectionLayout 
      ref={ref} 
      imgSrc="/images/computer1.png"
      overlayContent={<DeveloppmentOverlay onClose={() => setOpenOverlay(false)} open={openOverlay} />}
      openOverlay={openOverlay}
      onOpenOverlay={() => setOpenOverlay(true)}
    >
      <h1 className="subtitle orbitron">Application web</h1>
      <h1 className="title">Developpement</h1>
    </SectionLayout>
  )
});
DeveloppmentSection.displayName = "Developpment";
export default DeveloppmentSection;
