import Image from "next/image";
import React, { forwardRef, ReactNode, useRef, useEffect } from "react";
import CTA from "./CTA";
import MenuButton from "./MenuButton";
import gsap from "gsap";

type SectionLayoutProps = {
  imgSrc: string;
  children?: ReactNode;
  overlayContent?: ReactNode;
  openOverlay?: boolean;
  onOpenOverlay?: () => void;
};

const SectionLayout = forwardRef<HTMLDivElement, SectionLayoutProps>(
  ({ imgSrc, children, overlayContent, onOpenOverlay, openOverlay }, ref) => {
    const imgRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Init position au montage
    useEffect(() => {
      if (imgRef.current && overlayRef.current) {
        gsap.set(imgRef.current, { x: 0, scaleX: 1 });
        gsap.set(overlayRef.current, { x: "50vw", opacity: 0 });
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
      }
    }, []);

    // Animation à l'ouverture/fermeture
    useEffect(() => {
      if (!imgRef.current || !overlayRef.current || !contentRef.current) return;
      if (openOverlay) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            gsap.to(imgRef.current, {
              x: "-28vw",
              scaleX: 0.7,
              duration: 1.1,
              ease: "power3.inOut",
              onComplete: () => {
                gsap.to(overlayRef.current, {
                  x: 0,
                  opacity: 1,
                  duration: 1.5,
                  ease: "power3.inOut"
                });
              }
            });
          }
        });
      } else {
        gsap.to(overlayRef.current, {
          x: "50vw",
          opacity: 0,
          duration: 1.5,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(imgRef.current, {
              x: 0,
              scaleX: 1,
              duration: 0.6,
              ease: "power3.inOut",
              onComplete: () => {
                gsap.to(contentRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out"
                });
              }
            });
          }
        });
      }
    }, [openOverlay]);

    return (
      <div
        ref={ref}
        className="section-anim absolute left-0 top-0 w-screen h-screen overflow-hidden"
      >
        {/* BG IMAGE */}
        <div ref={imgRef} className="section-img absolute inset-0 z-0 pointer-events-none">
          <Image
            src={imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* LOGO - CENTRÉ HAUT */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20 flex items-center">
          <Image src='/images/logo.png' alt="Logo SIPCO" width={220} height={60} />
        </div>

        {/* MENU BUTTON */}
        <div className="absolute top-10 right-10 z-20 flex flex-col items-center gap-5">
          <MenuButton />
        </div>

        {/* CTA - CENTRÉ VERTICALEMENT */}
        {!openOverlay && onOpenOverlay && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-90">
            <CTA onClick={onOpenOverlay} />
          </div>
        )}

        {/* CONTENU */}
        <div ref={contentRef} className="absolute top-2/5 left-2/4 ml-10 transform z-30 flex flex-col items-start">
          {children}
        </div>

        {/* OVERLAY DROITE */}
        <div
          ref={overlayRef}
          className="absolute right-0 top-0 h-full w-[40vw] bg-white bg-opacity-90 shadow-2xl z-40"
          style={{
            pointerEvents: openOverlay ? "auto" : "none",
          }}
        >
          {overlayContent}
        </div>
      </div>
    );
  }
);
SectionLayout.displayName = "SectionLayout";
export default SectionLayout;
