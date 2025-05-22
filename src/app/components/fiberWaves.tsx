"use client";
import { useRef, useEffect } from "react";

export default function FiberWavesAnimated({ className = "" }: { className?: string }) {
  // refs for each path
  const pathRefs = [useRef<SVGPathElement>(null), useRef<SVGPathElement>(null), useRef<SVGPathElement>(null), useRef<SVGPathElement>(null)];

  // Paramètres pour chaque wave
  const curves = [
    { base: [20, 900, 10, 800, 30, 700, 60, 600, 20, 500, -10, 400, 40, 300, 70, 200, 20, 100, 0, 0, 30, 0], amp: 24, phase: 0 },    // Blue 1
    { base: [40, 900, 60, 800, 40, 700, 10, 600, 50, 500, 80, 400, 20, 300, -10, 200, 40, 100, 60, 0, 50, 0], amp: 30, phase: 1.2 }, // Blue 2
    { base: [60, 900, 50, 800, 70, 700, 80, 600, 60, 500, 40, 400, 80, 300, 90, 200, 60, 100, 80, 0, 70, 0], amp: 26, phase: 2.3 },  // Orange 1
    { base: [15, 900, 25, 800, 35, 700, 55, 600, 25, 500, 5, 400, 55, 300, 75, 200, 20, 100, 25, 0, 35, 0], amp: 17, phase: 3.7 }   // Orange 2
  ];

  // Fonction pour construire le d d'un path à partir d'un tableau de points
  function buildD(points: number[]) {
    return `M${points[0]} ${points[1]} Q${points[0]} ${points[3]}, ${points[4]} ${points[5]} Q${points[6]} ${points[7]}, ${points[8]} ${points[9]} Q${points[10]} ${points[11]}, ${points[12]} ${points[13]} Q${points[14]} ${points[15]}, ${points[16]} ${points[17]} Q${points[18]} ${points[19]}, ${points[20]} ${points[21]}`;
  }

  useEffect(() => {
    let frame = 0;
    function animate() {
      frame++;
      curves.forEach((curve, i) => {
        const freq = 0.7 + i * 0.25;
        const amp = curve.amp;
        const points = curve.base.map((pt, idx) => {
          // N'anime que les Y des points de contrôle (tous les Y impairs sauf le premier)
          if (idx % 2 === 1 && idx !== 1) {
            return pt + Math.sin(frame * 0.015 * freq + curve.phase + idx) * amp * (0.25 + (idx / curve.base.length));
          }
          return pt;
        });
        if (pathRefs[i].current) {
          pathRefs[i].current.setAttribute("d", buildD(points));
        }
      });
      requestAnimationFrame(animate);
    }
    animate();
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <svg
      className={className}
      width="80"
      height="100%"
      viewBox="0 0 80 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", height: "100%" }}
    >
      <defs>
        <linearGradient id="blue-light" x1="0" y1="0" x2="80" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29f0ff" />
          <stop offset="1" stopColor="#1740ff" />
        </linearGradient>
        <linearGradient id="orange-light" x1="80" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD600" />
          <stop offset="1" stopColor="#FF1A1A" />
        </linearGradient>
        <filter id="glow" x="-40" y="-40" width="160" height="980" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Blue wave 1 */}
      <path
        ref={pathRefs[0]}
        stroke="url(#blue-light)"
        strokeWidth="2.5"
        filter="url(#glow)"
        fill="none"
        opacity="0.85"
      />
      {/* Blue wave 2 */}
      <path
        ref={pathRefs[1]}
        stroke="url(#blue-light)"
        strokeWidth="2"
        filter="url(#glow)"
        fill="none"
        opacity="0.5"
      />
      {/* Orange wave 1 */}
      <path
        ref={pathRefs[2]}
        stroke="url(#orange-light)"
        strokeWidth="2.2"
        filter="url(#glow)"
        fill="none"
        opacity="0.7"
      />
      {/* Orange wave 2 */}
      <path
        ref={pathRefs[3]}
        stroke="url(#orange-light)"
        strokeWidth="1.5"
        filter="url(#glow)"
        fill="none"
        opacity="0.38"
      />
    </svg>
  );
}
