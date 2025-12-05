export default function MoodflixLogo({ size = 'md' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <svg
      viewBox="0 0 48 48"
      className={sizes[size]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Film strip left */}
      <rect x="4" y="10" width="8" height="28" rx="1" fill="#7C7CFF" opacity="0.8" />
      <rect x="6" y="12" width="4" height="4" fill="#0B0B0F" />
      <rect x="6" y="20" width="4" height="4" fill="#0B0B0F" />
      <rect x="6" y="28" width="4" height="4" fill="#0B0B0F" />

      {/* Center film frame */}
      <g>
        <rect x="16" y="8" width="16" height="32" rx="2" fill="#F472B6" opacity="0.9" />
        <rect x="18" y="10" width="12" height="28" rx="1" fill="#0B0B0F" />
        
        {/* Movie scene inside frame */}
        <circle cx="24" cy="20" r="4" fill="#7C7CFF" opacity="0.7" />
        <path d="M 20 28 Q 24 26 28 28" stroke="#7C7CFF" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Film strip right */}
      <rect x="36" y="10" width="8" height="28" rx="1" fill="#7C7CFF" opacity="0.8" />
      <rect x="38" y="12" width="4" height="4" fill="#0B0B0F" />
      <rect x="38" y="20" width="4" height="4" fill="#0B0B0F" />
      <rect x="38" y="28" width="4" height="4" fill="#0B0B0F" />

      {/* Glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="16" y="8" width="16" height="32" rx="2" fill="none" stroke="#7C7CFF" strokeWidth="1.5" opacity="0.3" filter="url(#glow)" />
    </svg>
  )
}
