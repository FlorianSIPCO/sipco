"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
    className?: string;
}

export default function HeaderSection({ className }: Props) {
    return (
        <section className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 ${className || ""}`}>
            <Image
                src="/images/bg_home.png"
                alt="Fond d'écran avec un ordinateur style cyberpunk"
                fill
                priority
                className="object-cover z-0"
                sizes="100vw"
            />

            {/* Central content */}
            <div className="relative z-20 flex flex-col items-center gap-12">
                {/* animated title */}
                <motion.h1
                    className="font-orbitron text-5xl md:text-7xl font-bold tracking-[0.2em] text-[var(--main-text)] select-none"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    &lt;S.I.P.C.O <span className="font-barlow">/</span>&gt;
                </motion.h1>

                {/* CTA scroll */}
                <motion.div
                    className="flex items-center gap-2 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
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
                </motion.div>
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
    )
}