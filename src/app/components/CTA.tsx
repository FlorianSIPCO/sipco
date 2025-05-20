export default function CTA({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 flex items-center justify-center bg-transparent p-0 border-none outline-none cursor-pointer transition hover:scale-105"
      style={{ minWidth: 96, minHeight: 96 }}
    >
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        style={{ transform: "rotate(-45deg)" }}
      >
        {/* Losange (losange, stroke gradient) */}
        <defs>
          <linearGradient id="cta-border" x1="0" y1="44" x2="88" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF1A1A" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          x="8" y="8" width="72" height="72"
          stroke="url(#cta-border)"
          strokeWidth="4"
          fill="none"
          
        />
        {/* Croix jaune */}
        <line x1="0" y1="47" x2="0" y2="77" stroke="#FFD600" strokeWidth="3" style={{ transform: "rotate(-45deg)" }}/>
        <line x1="-15" y1="62" x2="15" y2="62" stroke="#FFD600" strokeWidth="3" style={{ transform: "rotate(-45deg)" }}/>
      </svg>
    </button>
  );
}
