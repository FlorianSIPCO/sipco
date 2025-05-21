import React, { forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";

const HebergementSection = forwardRef<HTMLDivElement>((props, ref) => (
  <SectionLayout ref={ref} imgSrc="/images/bg_hebergement.png">
    <h1 className="subtitle orbitron">Sauvegarde de donnees</h1>
    <h1 className="title">Hebergement</h1>
  </SectionLayout>
));
HebergementSection.displayName = "Hebergement";
export default HebergementSection;
