import { useEffect } from "react";
import FiberWavesAnimated from "./fiberWaves";

export default function HebergementOverlay({ onClose, open }: { onClose: () => void; open: boolean }) {

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount (au cas ou)
    return () => {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open])
    
  return (
    <>
      {/* Waves */}
      <div className="absolute left-[-40px] top-0 h-full w-[100px] z-90 pointer-events-none select-none">
        <FiberWavesAnimated />
      </div>
      {/* Content */}
      <div className="w-full h-full flex flex-col px-20 py-12 overflow-y-auto bg-black">
        <div className="flex justify-between items-center">
          <h2 className="text-red-600 text-5xl">Hébergement</h2>
          <button onClick={onClose} className="self-end text-xl font-bold text-white transition hover:text-red-600 hover:rotate-180">✕</button>
        </div>
        <p className="my-8 text-xl mr-10">[Insère ici ton contenu…]</p>
      </div>
    </>
  );
}
