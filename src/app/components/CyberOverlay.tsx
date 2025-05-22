import { useEffect } from "react";
import FiberWavesAnimated from "./fiberWaves";
import Image from "next/image";

export default function CyberOverlay({ onClose, open }: { onClose: () => void; open: boolean }) {

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
          <h2 className="text-red-600 text-5xl">Adopter une stratégie globale pour sécuriser vos données et vos systèmes.</h2>
          <button onClick={onClose} className="self-start text-xl font-bold text-white transition hover:text-red-600 hover:rotate-180">✕</button>
        </div>
        <p className="my-8 text-xl mr-10">
          La gestion et la surveillance de la cybersécurité sont essentielles pour protéger les systèmes informatiques contre les menaces croissantes, garantir la confidentialité des données et prévenir les cyberattaques. Une surveillance proactive permet d&apos;identifier et de neutraliser rapidement les vulnérabilités.
        </p>

        <a href="https://cyber.sipco.fr" target="_blank" className="mb-8 text-xl mr-10 font-bold">
          <Image
            src="/images/cyberweb.png"
            alt="Nos certifications: Cyber Malveillance, ESET, LSTI GPL Expert"
            height={570}
            width={570}
            className="object-cover transition rounded-xl"
            draggable={false}
          />
          Découvrez nos prestations en cybersécurité en cliquant ici.
        </a>

        <h3 className="text-2xl text-red-600">Une solution infaillible pour vos données</h3>
        <p className="my-8 text-xl mr-10">
          La méthode 3-2-1 garantit la protection de vos données en toutes circonstance.<br/>Elle consiste à conserver 3 copies de vos fichiers (une principale et deux sauvegardes), réparties sur 2 supports différents, dont 1 en dehors du site principal. <br/> Cette approche limite les risque de pertes dues à des pannes, des erreurs humaines ou des cyberattaques.
        </p>
        <p className="text-xl mr-10">Adopter cette méthode, c&apos;est assurer la pérennité de vos données, même en cas d&apos;imprévu.</p>
        <button className="my-8 transition hover:scale-105">
          <a 
            href="https://outlook.office365.com/book/RendezvousprisedinformationsSIPCO@sipco.fr/" 
            target="_blank"
            className="bg-gradient-to-r from-[#e62525] to-[#730707] w-max py-3 px-4 font-bold rounded-2xl "
          >
            Parler avec un de nos experts
          </a>
        </button>

        <h3 className="text-2xl text-red-600">La cybersécurité, un pilier essentiel pour votre entreprise</h3>

        <p className="text-xl mr-10 my-8">
          Dans un monde numérique en constante évolution, les cybermenaces sont de plus en plus sophistiquées et fréquentes. Protéger vos données sensibles, vos systèmes et vos utilisateurs n’est plus une option, mais une nécessité. Une stratégie de cybersécurité efficace repose sur une combinaison de technologies avancées, de bonnes pratiques et d’une sensibilisation accrue des équipes.<br/><span className="font-bold">Investir dans la cybersécurité, c&apos;est protéger votre activité.</span>
        </p>

        <Image
          src="/images/certification.png"
          alt="Nos certifications: Cyber Malveillance, ESET, LSTI GPL Expert"
          height={570}
          width={570}
          className="object-cover transition"
          draggable={false}
        />
      </div>
    </>
  );
}
