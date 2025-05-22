"use client";
import { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "../sections/Header";
import AboutSection from "../sections/About";
import HardwareSection from "../sections/Hardware";
import HebergementSection from "../sections/hebergement";
import CyberSection from "../sections/Cyber";
import DeveloppmentSection from "../sections/Developpment";
import React from "react";
import AboutOverlay from "./AboutOverlay";
import HardewareOverlay from "./HardwareOverlay";
import HebergementOverlay from "./HebergementOverlay";
import CyberOverlay from "./CyberOverlay";
import DeveloppmentOverlay from "./DeveloppmentOverlay";
gsap.registerPlugin(ScrollTrigger);

export default function Storytelling() {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const hardwareRef = useRef<HTMLDivElement>(null);
    const hebergementRef = useRef<HTMLDivElement>(null);
    const cyberRef = useRef<HTMLDivElement>(null);
    const devRef = useRef<HTMLDivElement>(null);

    const refs = useMemo(() => [headerRef, aboutRef, hardwareRef, hebergementRef, cyberRef, devRef], []);

    // Bloque le scroll du body quand overlay ouvert
    useEffect(() => {
        if (isOverlayOpen) {
        document.body.classList.add("overflow-hidden");
        } else {
        document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOverlayOpen]);

    // const components = [
    //     HeaderSection,
    //     (props) => <AboutSection {...props} onOpenOverlay={() => setIsOverlayOpen(true)} />,
    //     HardwareSection, 
    //     HebergementSection,
    //     CyberSection,
    //     DeveloppmentSection
    // ];

    // const refs = useRef(
    //     Array.from({ length: components.length }, () => React.createRef<HTMLDivElement>())
    // ).current;

    const TOTAL_SCROLL = refs.length * 100;

    useEffect(() => {
        setVisible(false);
        const t = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(t);
    }, []);

    // Logique de scroll
    useEffect(() => {
        if (!visible) return;
        refs.forEach((ref, i) => {
        if (ref.current) {
            gsap.set(ref.current, {
            zIndex: 6 - i,
            opacity: i === 0 ? 1 : 0,
            scale: 1,
            });
        }
        });

        const DURATION = refs.length; // nombre de sections
        const TOTAL_SCROLL = DURATION * 1200; // ajuster si besoins

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".story-container",
            start: "top top",
            end: `+=${TOTAL_SCROLL}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const index = Math.round(progress * (refs.length - 1));
                setActiveIndex(index)
            }
            // markers: true, // active pour debug
        },
        });

        // Pour chaque transition
        for (let i = 0; i < refs.length - 1; i++) {
        tl.to(refs[i].current, {
            scale: 1.2,
            opacity: 0,
            duration: 0.7,
            ease: "power2.inOut",
        }, i)
        tl.fromTo(
            refs[i + 1].current,
            {opacity: 0, scale: 1.4},
            {opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut",},
            i + 0.15);
        }

        // Clean
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [visible, refs.length, TOTAL_SCROLL, refs]);
    

    return (
    <div>
        <div 
            className="story-container"
            style={{
                position: "fixed",
                left: 0, top: 0, width: "100vw", height: "100vh",
                overflow: "hidden",
                background: "black",
                pointerEvents: "auto",
                opacity: visible ? 1 : 0,
                transition: "opacity 3s cubic-bezier(.4,0,.2,1)"
            }}>
                {/* {refs.map((ref, i) => {
                    const SectionComponent = components[i];
                    return (
                        <div
                        key={i}
                        ref={ref}
                        style={{
                            zIndex: i === activeIndex ? 100 : 1,
                            pointerEvents: i === activeIndex ? "auto" : "none",
                            position: "absolute",
                            left: 0, top: 0, width: "100vw", height: "100vh",
                        }}
                        >
                        <SectionComponent />
                        </div>
                    )
                })} */}
            <div
                ref={headerRef}
                style={{
                    zIndex: activeIndex === 0 ? 100 : 1,
                    pointerEvents: activeIndex === 0 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <HeaderSection />
            </div>
            <div
                ref={aboutRef}
                style={{
                    zIndex: activeIndex === 1 ? 100 : 1,
                    pointerEvents: activeIndex === 1 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <AboutSection />
            </div>
            <div
                ref={hardwareRef}
                style={{
                    zIndex: activeIndex === 2 ? 100 : 1,
                    pointerEvents: activeIndex === 2 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <HardwareSection />
            </div>
            <div
                ref={hebergementRef}
                style={{
                    zIndex: activeIndex === 3 ? 100 : 1,
                    pointerEvents: activeIndex === 3 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <HebergementSection />
            </div>
            <div
                ref={cyberRef}
                style={{
                    zIndex: activeIndex === 4 ? 100 : 1,
                    pointerEvents: activeIndex === 4 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <CyberSection />
            </div>
            <div
                ref={devRef}
                style={{
                    zIndex: activeIndex === 5 ? 100 : 1,
                    pointerEvents: activeIndex === 5 ? "auto" : "none",
                    position: "absolute",
                    left: 0, top: 0, width: "100vw", height: "100vh",
                }}
            >
                <DeveloppmentSection />
            </div>
        </div>
        {/* Affichage overlay en global */}
        {isOverlayOpen && <AboutOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />}
        {isOverlayOpen && <HardewareOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />}
        {isOverlayOpen && <HebergementOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />}
        {isOverlayOpen && <CyberOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />}
        {isOverlayOpen && <DeveloppmentOverlay open={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />}
            
        {/* Scroll area storytelling (DOIT être hors du container pin) */}
        {visible && (
            <div style={{ height: `${TOTAL_SCROLL}px` }}>
                <div className="flex flex-col items-center justify-between h-full">
                <h1 className="text-red-500 text-5xl">Contact</h1>
                <footer className="bg-black w-full h-40 text-2xl flex justify-center items-center">le footer...</footer>
                </div>
            </div>
        )}
    </div>
    );
}
