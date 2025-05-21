import React, { forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";

const DeveloppmentSection = forwardRef<HTMLDivElement>((props, ref) => (
  <SectionLayout ref={ref} imgSrc="/images/computer1.png">
    <h1 className="subtitle orbitron">Application web</h1>
    <h1 className="title">Developpement</h1>
  </SectionLayout>
));
DeveloppmentSection.displayName = "Developpment";
export default DeveloppmentSection;
