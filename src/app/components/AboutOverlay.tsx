export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full h-full flex flex-col px-10 py-12 overflow-y-auto">
      {/* Fermer bouton */}
      <button onClick={onClose} className="self-end mb-6 text-xl font-bold text-gray-500 hover:text-black">Fermer ✕</button>
      {/* Contenu (textes, images, vidéos, etc.) */}
      <h2 className="title mb-4">Notre histoire</h2>
      <p className="mb-6">[Insère ici ton contenu…]</p>
      {/* Ajoute ici ce que tu veux : images, vidéos, etc. */}
    </div>
  );
}
