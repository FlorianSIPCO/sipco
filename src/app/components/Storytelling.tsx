"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "../sections/Header";
import AboutSection from "../sections/About";
import HardwareSection from "../sections/Hardware";
import HebergementSection from "../sections/hebergement";
import CyberSection from "../sections/Cyber";
import DeveloppmentSection from "../sections/Developpment";
gsap.registerPlugin(ScrollTrigger);

export default function Storytelling() {
    const components = [HeaderSection, AboutSection, HardwareSection, HebergementSection, CyberSection, DeveloppmentSection];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refs = Array.from({ length: components.length }, () => useRef<HTMLDivElement>(null));

    const TOTAL_SCROLL = refs.length * 300;

    // Logique de scroll
    useEffect(() => {
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
    }, [components.length, TOTAL_SCROLL, refs]);

    return (
    <div>
        <div className="story-container" style={{
            position: "fixed",
            left: 0, top: 0, width: "100vw", height: "100vh",
            overflow: "hidden",
            background: "black",
            pointerEvents: "auto"
        }}>
            {refs.map((ref, i) => {
            const SectionComponent = components[i];
            return (
                <>
                    <SectionComponent
                        key={i}
                        ref={ref}
                    />
                </>
            )
        })}
        </div>
        {/* Scroll area storytelling (DOIT être hors du container pin) */}
        <div style={{ height: `${TOTAL_SCROLL}px` }}>
            <div className="flex flex-col items-center justify-between h-full">

            <h1 className="text-red-500 text-5xl">Contact</h1>
            <footer className="bg-black w-full h-40 text-2xl flex justify-center items-center">le footer...</footer>
            </div>
        </div>
    </div>
    );
}
