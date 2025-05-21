"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import React, { forwardRef } from "react"

const HeaderSection = forwardRef<HTMLElement>((props, ref) => (
    <section ref={ref} className="section-anim absolute left-0 top-0 w-screen h-screen overflow-hidden">
        {/* Image de fond animable */}
        <div className="section-img absolute z-0 left-0 top-0 w-screen h-screen pointer-events-none">
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
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold tracking-[0.2em] text-[var(--main-text)] select-none">
                &lt;S.I.P.C.O <span className="font-barlow">/</span>&gt;
            </h1>

            {/* CTA scroll */}
            <div className="flex items-center gap-2 mt-10">
                <motion.span
                    className="block w-2 h-2 bg-[var(--second-text)] rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                    repeat: Infinity,
                    duration: 1.3,
                    ease: "easeInOut",
                    }}
                    aria-hidden
                ></motion.span>
                <span className="text-[var(--second-text)]">Scroller pour continuer</span>
            </div>
        </div>
        <div className="absolute bottom-0 w-full flex items-center justify-between px-14 py-10 z-20">
            <div>
                <div className="flex">
                    <a href="" className="mr-5">Mentions légales</a>
                    <a href="">Politiques de Confidentialité</a>
                </div>
                <h5 className="text-[var(--second-text)]">Copyright 1982 - 2025 SIPCO</h5>
            </div>
            <div className="flex text-[var(--second-text)]">
                <a href="" className="mr-5 hover:text-[var(--main-text)]">CONTACT</a>
                <a href="" className="mr-5 hover:text-[var(--main-text)]">EMAIL</a>
                <a href="" className="mr-5 hover:text-[var(--main-text)]">ADRESSE</a>
            </div>
        </div>
    </section>
));
HeaderSection.displayName = "HeaderSection";
export default HeaderSection;