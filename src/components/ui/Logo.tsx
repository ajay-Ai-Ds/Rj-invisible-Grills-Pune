import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean; // If true, rendering logo styled for dark backgrounds (white text)
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 select-none group ${className}`}>
      {/* RJ Invisible Grills Logo Icon SVG */}
      <svg 
        className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* House/Window Outer Outline */}
        <path 
          d="M 6 16 L 24 4 L 42 16 L 42 42 C 42 43.1 41.1 44 40 44 L 8 44 C 6.9 44 6 43.1 6 42 Z" 
          stroke={light ? "#FFFFFF" : "#0F2747"} 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
        {/* Thin Vertical Grill Wires */}
        <line x1="18" y1="12" x2="18" y2="44" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="0.8" opacity="0.3" />
        <line x1="24" y1="4" x2="24" y2="44" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="0.8" opacity="0.3" />
        <line x1="30" y1="12" x2="30" y2="44" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="0.8" opacity="0.3" />
        
        {/* Letter R */}
        <path d="M 13 18 L 13 36" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="3" strokeLinecap="round" />
        <path d="M 13 18 H 18 C 21 18 21 26 18 26 H 13" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 16 26 L 21 36" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="3" strokeLinecap="round" />
        
        {/* Letter J */}
        <path d="M 31 18 V 32 C 31 35 29 37 26 37 C 24 37 23 35 23 33" stroke={light ? "#FFFFFF" : "#0F2747"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Sports Net detail in bottom right */}
        <path d="M 28 32 C 28 40, 36 44, 42 42" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 30 36 L 36 43 M 34 33 L 41 40 M 34 43 L 28 36 M 40 42 L 32 34" stroke="#F97316" strokeWidth="0.8" opacity="0.8" />
        
        {/* Cricket Ball Accent */}
        <circle cx="36" cy="38" r="2.5" fill="#F97316" />
      </svg>

      {/* Corporate Logo Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight text-left">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-xl font-extrabold tracking-tight transition-colors duration-200 ${
                light ? "text-white" : "text-[#0F2747]"
              }`}
            >
              <span className="text-[#F97316]">RJ</span> Invisible Grills
            </span>
          </div>
          <span
            className={`text-[9px] font-bold uppercase tracking-[0.25em] transition-colors duration-200 ${
              light ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Premium Invisible Grills &amp; Nets
          </span>
        </div>
      )}
    </Link>
  );
}
