import React, { forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";

const HardwareSection = forwardRef<HTMLDivElement>((props, ref) => (
  <SectionLayout ref={ref} imgSrc="/images/bg_hardware1.png">
    <h1 className="subtitle orbitron">Maintenance informatique</h1>
    <h1 className="title">Hardware</h1>
  </SectionLayout>
));
HardwareSection.displayName = "Hardware";
export default HardwareSection;