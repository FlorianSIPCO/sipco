"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import HeaderSection from "@/app/sections/Header";
import AboutSection from "@/app/sections/About";

export default function Home() {
  const [step, setStep] = useState<"home" | "header">("home");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // counter
  useEffect(() => {
    if (step !== "home" || !loading) return;
    if (progress >= 100) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
      return;
    }
    const timeout = setTimeout(() => setProgress((p) => p + 2), 25); // animation speed
    return () => clearTimeout(timeout);
  }, [progress, loading, step]);

  // Callback on clic
  const handleStart = () => {
    setStep("header")
  }

  return (
    <main className="h-screen w-full">   
      <AnimatePresence mode="wait">
        {step === "home" && (
          <motion.div
            key="home"
            className="h-screen flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 1.2 }}
          >
            <Image 
              src="/images/logo_1.png"
              alt="Logo SIPCO"
              width={400}
              height={400}
              className="mb-2"
            />
            <div className="flex flex-col items-center w-full max-w-sm">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.h1
                    key="loading"
                    className="mb-2 select-none text-red-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {progress}%
                  </motion.h1>
                ) : (
                  <motion.button
                    key="start"
                    className="font-orbitron cta-gradient mb-2 cursor-pointer transition focus:outline-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={handleStart}
                  >
                    Débuter votre expérience
                  </motion.button>
                )}
              </AnimatePresence>
              {/* line */}
              <motion.hr
                className="border-t-2 border-[var(--second-text)] w-40 mx-auto mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: loading ? 0 : 0.5, duration: 0.5, type: "spring" }}
                style={{ originX: 0 }}
              />
            </div>
          </motion.div>
        )}  

        {step === "header" && (
          <motion.div
            key="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
          >
            <HeaderSection className="snap-start" />
            <AboutSection className="snap-start" />
          </motion.div>
        )}
      </AnimatePresence> 
    </main>
  );
}
