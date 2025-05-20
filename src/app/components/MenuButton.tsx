import { Plus } from "lucide-react";

export default function MenuButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 relative flex items-center justify-center rounded-full bg-transparent outline-none border-none p-0"
      style={{ minWidth: 56, minHeight: 56 }}
      aria-label="Ouvrir le menu"
    >
      {/* Cercle SVG animé */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
        viewBox="0 0 56 56"
        fill="none"
      >
        <defs>
          <linearGradient id="menu-gradient" x1="0" y1="28" x2="56" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF1A1A" />
            <stop offset="1" stopColor="#1e1e1e" />
          </linearGradient>
        </defs>
        <circle
          cx="28"
          cy="28"
          r="25"
          stroke="url(#menu-gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <Plus className="relative z-10 text-red-500 w-7 h-7" />
    </button>
  );
}
