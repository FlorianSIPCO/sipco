"use client";

import Image from "next/image";
import React, { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";

const HeaderSection = forwardRef<HTMLElement>((props, ref) => {
    // Refs locaux pour chaque élément à animer
    const imgRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Reset state: tout caché au départ
        if (imgRef.current) gsap.set(imgRef.current, { opacity: 0 });
        if (h1Ref.current) gsap.set(h1Ref.current, { opacity: 0 });
        if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0});
        if (footerRef.current) gsap.set(footerRef.current, { opacity: 0 });

        // 2. Animation séquentielle
        gsap.to(imgRef.current,   { opacity: 1, duration: 2, delay: 1.2, ease: "power2.out" });
        gsap.to(h1Ref.current,    { opacity: 1, y: 0, duration: 1.6, delay: 2, ease: "power2.out" });
        gsap.to(ctaRef.current,   { opacity: 1, y: 0, duration: 1.4, delay: 2.4, ease: "power2.out" });
        gsap.to(footerRef.current,{ opacity: 1, y: 0, duration: 1.2, delay: 2.4, ease: "power2.out" });
    }, []);

    return (
        <section ref={ref} className="section-anim absolute left-0 top-0 w-screen h-screen overflow-hidden">
            {/* Image de fond animable */}
            <div ref={imgRef} className="section-img absolute z-0 left-0 top-0 w-screen h-screen pointer-events-none">
                <Image
                    src='/images/bg_home.png'
                    alt="Image de fond d'un ordinateur style cyberpunk"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* Central content */}
            <div className="section-content relative z-10 flex flex-col items-center min-h-screen justify-center pointer-events-auto">
                <h1
                  ref={h1Ref}
                  className="font-orbitron text-5xl md:text-7xl font-bold tracking-[0.2em] text-[var(--main-text)] select-none"
                >
                    &lt;S.I.P.C.O <span className="font-barlow">/</span>&gt;
                </h1>
                {/* CTA scroll */}
                <div ref={ctaRef} className="flex items-center gap-2 mt-10">
                    <span
                        className="block w-2 h-2 bg-[var(--second-text)] rounded-full sipco-bounce"
                        aria-hidden
                    ></span>
                    <span className="text-[var(--second-text)]">Scroller pour continuer</span>
                </div>
            </div>
            <div ref={footerRef} className="absolute bottom-0 w-full flex items-center justify-between px-14 py-10 z-20">
                <div>
                    <div className="flex">
                        <a href="" className="mr-5">Mentions légales</a>
                        <a href="">Politiques de Confidentialité</a>
                    </div>
                    <h5 className="text-[var(--second-text)]">Copyright 1982 - 2025 SIPCO</h5>
                </div>
                <div className="flex text-[var(--second-text)]">
                    <a href="" className="mr-5 hover:text-[var(--main-text)]">PRENDRE RENDEZ-VOUS</a>
                    <a href="" className="mr-5 hover:text-[var(--main-text)]">CONTACT</a>
                </div>
            </div>
        </section>
    );
});
HeaderSection.displayName = "HeaderSection";
export default HeaderSection;
