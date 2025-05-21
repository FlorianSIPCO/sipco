import React, { forwardRef } from "react";
import SectionLayout from "../components/SectionLayout";

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => (
  <SectionLayout ref={ref} imgSrc="/images/bg_about.png">
    <h1 className="subtitle orbitron">A propos</h1>
    <h1 className="title">Qui sommes nous ?</h1>
  </SectionLayout>
));
AboutSection.displayName = "About";

export default AboutSection;
