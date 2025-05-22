import React, { forwardRef, useState } from "react";
import SectionLayout from "../components/SectionLayout";
import HardewareOverlay from "../components/HardwareOverlay";

const HardwareSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <SectionLayout 
      ref={ref} 
      imgSrc="/images/bg_hardware1.png"
      overlayContent={<HardewareOverlay onClose={() => setOpenOverlay(false) } open={openOverlay} />}
      openOverlay={openOverlay}
      onOpenOverlay={() => setOpenOverlay(true)}
    >

      <h1 className="subtitle orbitron">Maintenance informatique</h1>
      <h1 className="title">Hardware</h1>
    </SectionLayout>
  )
});
HardwareSection.displayName = "Hardware";
export default HardwareSection;