import Image from "next/image";
import { ReactNode } from "react";

type SectionLayoutProps = {
  bgImage: string;
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  menu?: ReactNode;
  progressBar?: ReactNode;
  cta?: ReactNode;
  overlay?: ReactNode;
  showOverlay?: boolean;
  children?: ReactNode; // fallback for custom
  className?: string;
};

export default function SectionLayout({
  bgImage,
  logo,
  title,
  subtitle,
  menu,
  progressBar,
  cta,
  overlay,
  showOverlay = false,
  children,
  className
}: SectionLayoutProps) {
  return (
    <section className={`relative min-h-screen w-full overflow-hidden flex flex-col z-10 ${className || ""}`}>
      {/* Background image */}
      <Image
        src={bgImage}
        alt="background"
        fill
        priority
        className="object-contain z-0 transition-all duration-700 ease-in-out"
      />
      {/* Overlay bandeau */}
      {overlay && (
        <div
          className={`absolute top-0 right-0 h-full z-30 transition-all duration-700 ease-in-out`}
          style={{
            width: showOverlay ? "40vw" : 0,
            opacity: showOverlay ? 1 : 0,
            pointerEvents: showOverlay ? "auto" : "none",
            background: "rgba(245,245,245,0.98)",
            boxShadow: showOverlay ? "-8px 0 24px #0002" : "none"
          }}
        >
          {overlay}
        </div>
      )}

      {/* Logo SIPCO */}
      {logo && (
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20">{logo}</div>
      )}

      {/* Menu et progressBar */}
      <div className="absolute top-10 right-10 flex flex-col items-center z-20">
        {menu}
        {progressBar}
      </div>

      {/* Titre/sous-titre */}
      <div className="flex flex-col items-left justify-center h-screen ml-[53%] pb-[6%] z-20">
        {subtitle}
        {title}
      </div>

      {/* CTA */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="pointer-events-auto">{cta}</div>
      </div>

      {/* Pour du custom si besoin */}
      {children}
    </section>
  );
}
