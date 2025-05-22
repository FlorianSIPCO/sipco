"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Storytelling from "./components/Storytelling";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Animation d'intro (step)
  const [step, setStep] = useState<"intro" | "story">("intro");
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // refs for intro
  const introRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ref pour fade-in header
  const headerStoryRef = useRef<HTMLDivElement>(null);

  // Intro progress counter
  useEffect(() => {
    if (step !== "intro") return;
    if (progress < 100) {
      const t = setTimeout(() => setProgress((p) => p + 2), 25);
      return () => clearTimeout(t);
    }
    if (counterRef.current && buttonRef.current) {
      gsap.timeline()
      .to(counterRef.current, { opacity: 0, y: -20, duration: 0.5 })
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
    }
  }, [progress, step]);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, y: 30 });
    }
  }, [step])

  // OnClick -> passage à l'expérience immersive
  const handleStart = () => {
    if (introRef.current) {
      gsap.to(introRef.current, {
        opacity: 0,
        y: -60,
        duration: 0.7,
        onComplete: () => {
          setStep("story");
          setTimeout(() => setIsReady(true), 0);
        }
      })
    }
  }

  useEffect(() => {
    if (step === "story" && headerStoryRef.current) {
      // GSAP: Fade-in header section à l'arrivée
      gsap.fromTo(headerStoryRef.current, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.1, ease: "power2.out" }
      );
    }
  }, [step]);

  return (
    <main className="w-full">
      {step === "intro" ? (
        <div ref={introRef} style={{ opacity: 1 }} className="h-screen flex flex-col items-center justify-center">
          <Image 
            src="/images/logo_1.png"
            alt="Logo SIPCO"
            width={400}
            height={400}
            className="mb-2"
          />
          <div className="flex flex-col items-center w-full max-w-sm">
            <h1
              ref={counterRef}
              className="absolute inset-0 flex items-center top-40 justify-center select-none text-red-700 transition-opacity"
              style={{
                opacity: progress < 100 ? 1 : 0,
                pointerEvents: progress < 100 ? "auto" : "none",
                transition: "opacity 0.5s, transform 0.5s"
              }}
            >
              {progress}%
            </h1>

            {/* Bouton */}
            <button
              ref={buttonRef}
              className="relative inset-0 flex items-center justify-center font-orbitron cta-gradient py-2 px-6 rounded mb-2 cursor-pointer transition focus:outline-none"
              style={{
                opacity: progress === 100 ? 1 : 0,
                pointerEvents: progress === 100 ? "auto" : "none",
                transform: progress === 100 ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s, transform 0.5s"
              }}
              onClick={handleStart}
            >
              Débuter votre expérience
            </button>
            <hr className="border-t-2 border-[var(--second-text)] w-40 mx-auto mt-2" />
          </div>
        </div>
      ) : null}
             
      {step === "story" && isReady && (
        <Storytelling />
      )}
    </main>
  );
}
