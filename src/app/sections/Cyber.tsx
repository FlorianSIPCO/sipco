import React, { forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";

const CyberSection = forwardRef<HTMLDivElement>((props, ref) => (
  <SectionLayout ref={ref} imgSrc="/images/bg_cyber.png">
    <h1 className="subtitle orbitron">Protection des donnees</h1>
    <h1 className="title">Cybersecurite</h1>
  </SectionLayout>
));
CyberSection.displayName = "Cyber";
export default CyberSection;
