import { useEffect, useState } from "react";
import Image from "next/image";
import FiberWavesAnimated from "./fiberWaves";

export default function AboutOverlay({ onClose, open }: { onClose: () => void; open: boolean }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

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
          <h2 className="text-red-600 text-5xl">SIPCO depuis 1982</h2>
          <button onClick={onClose} className="self-start text-xl font-bold text-white transition hover:text-red-600 hover:rotate-180">✕</button>
        </div>
        <p className="my-8 text-xl mr-10">
          Fondée en 1982 pour faire face aux besoins croissants du secteur agroalimentaire en informatique, Sipco a très rapidement ciblé une clientèle plus large.<br/> De la grande entreprise internationale à la PME-PMI, de l’artisan au particulier, de l’éducation nationale aux collectivités locales, SIPCO propose des solutions multiples pour répondre aux exigences de sa clientèle.
        </p>
        
        {/* VIDEO */}
        <div className="w-full flex justify-left mr-10">
          <div
            className="relative max-w-full aspect-video rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
            onClick={() => setShowVideoModal(true)}
          >
            <Image
              src="/images/video.png"
              alt="Voir la vidéo SIPCO"
              height={570}
              width={570}
              className="object-cover transition"
              draggable={false}
            />
            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center transition hover:scale-110">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" fill="#000" fillOpacity="0.38"/>
                <polygon points="32,25 60,40 32,55" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>

        <p className="my-8 text-xl mr-10">
          Affiliée au réseau Alliance du Numérique, SIPCO bénéficie d’accords particuliers avec les plus grands acteurs du marché, aussi bien sur le matériel que sur les logiciels.
        </p>
        <Image
          src="/images/data.png"
          alt="Voir la vidéo SIPCO"
          height={570}
          width={570}
          className="object-cover transition rounded-xl"
          draggable={false}
        />

        <p className="my-8 text-xl mr-10">
          Nous sommes une équipe jeune qui suit l&apos;évolution des technologies pour vous offrir des services de qualité et répondant à la demande du marché.
        </p>
      </div>


      {/* MODAL VIDEO FULLSCREEN */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video mx-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-3xl text-white z-20 transition"
              aria-label="Fermer la vidéo"
            >
              ✕
            </button>
            <iframe
              className="rounded-xl shadow-xl w-full h-full"
              src="https://www.youtube.com/embed/zT1owUXATfs?autoplay=1&rel=0"
              title="SIPCO présentation"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
