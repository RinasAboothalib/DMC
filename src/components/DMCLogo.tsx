import React from 'react';

interface DMCLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  isLightMode?: boolean; // When placed on dark backgrounds
}

export const DMCLogo: React.FC<DMCLogoProps> = ({
  className = '',
  size = 44,
  showWordmark = true,
  isLightMode = false,
}) => {
  // 16 radial petals geometry with 3 layered shades from the official DMC logo
  const petalCount = 16;
  const angles = Array.from({ length: petalCount }, (_, i) => (i * 360) / petalCount);
  const midAngles = Array.from({ length: petalCount }, (_, i) => ((i + 0.5) * 360) / petalCount);

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching the official DMC logo from Facebook / image.png */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="DMC Immigration Consultants official logo"
      >
        <defs>
          <radialGradient id="dmcLeafGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="65%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#14532D" />
          </radialGradient>
        </defs>

        {/* Outer petal tier - Vibrant accent green */}
        <g transform="translate(100, 100)">
          {angles.map((deg, idx) => (
            <path
              key={`outer-${idx}`}
              d="M0 -96 C16 -60 22 -30 0 0 C-22 -30 -16 -60 0 -96 Z"
              fill="#22C55E"
              opacity="0.95"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Mid-tier overlapping petals - Rich leaf green */}
        <g transform="translate(100, 100)">
          {midAngles.map((deg, idx) => (
            <path
              key={`mid-${idx}`}
              d="M0 -84 C18 -52 18 -26 0 0 C-18 -26 -18 -52 0 -84 Z"
              fill="#16A34A"
              opacity="0.92"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Inner tier petals - Deep forest emerald */}
        <g transform="translate(100, 100)">
          {angles.map((deg, idx) => (
            <path
              key={`inner-${idx}`}
              d="M0 -68 C14 -40 14 -18 0 0 C-14 -18 -14 -40 0 -68 Z"
              fill="#14532D"
              opacity="0.88"
              transform={`rotate(${deg + 11.25})`}
            />
          ))}
        </g>

        {/* Central Core Circle with subtle gradient */}
        <circle cx="100" cy="100" r="50" fill="url(#dmcLeafGlow)" />

        {/* Crisp Center Brand Typography in white matching official logo */}
        <text
          x="100"
          y="98"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="36"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-1px"
        >
          dmc
        </text>
        <text
          x="100"
          y="120"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="13"
          fontWeight="500"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.5px"
        >
          immigration
        </text>
      </svg>

      {/* Accompanying Wordmark (Clean display typography) */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`text-xl font-extrabold tracking-tight ${
                isLightMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              DMC
            </span>
            <span className="text-xl font-bold tracking-tight text-[#16A34A]">
              Immigration
            </span>
          </div>
          <span
            className={`text-[10px] tracking-wider uppercase font-semibold mt-1 ${
              isLightMode ? 'text-emerald-200/80' : 'text-slate-500'
            }`}
          >
            Consultants · Dubai
          </span>
        </div>
      )}
    </div>
  );
};
