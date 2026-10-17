// Grand Mycélium de l'accueil : le cube (la technique) dont les racines rejoignent trois terrains.
export default function HeroArt({ roots }) {
  return (
    <svg viewBox="0 0 400 460" className="w-full h-auto" role="img" aria-label={roots.join(', ')}>
      {/* trame de points, discrète */}
      <g fill="#1D3F7A" fillOpacity="0.12">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((__, col) => (
            <circle key={`${row}-${col}`} cx={40 + col * 46} cy={30 + row * 30} r="1.4" />
          ))
        )}
      </g>

      {/* cube */}
      <g fill="none" stroke="#1D3F7A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M105 205 V95 L200 40 L295 95 V205 M105 95 L200 150 L295 95 M200 150 V262" />
      </g>
      <path d="M200 150 L295 95 V205 L200 262 Z" fill="#1D3F7A" fillOpacity="0.06" />

      {/* racines principales */}
      <g fill="none" stroke="#1D3F7A" strokeWidth="1.8" strokeLinecap="round">
        <path d="M295 205 C295 245 272 262 255 292 C243 314 246 342 236 372" />
        <path d="M105 205 C105 245 128 262 145 292 C157 314 146 344 152 378" />
        <path d="M200 262 C200 300 194 330 192 372 C191 392 196 408 200 424" />
      </g>
      {/* radicelles */}
      <g fill="none" stroke="#1D3F7A" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round">
        <path d="M255 292 C276 304 298 314 312 340" />
        <path d="M145 292 C126 304 106 318 94 346" />
        <path d="M193 330 C208 340 220 348 228 366" />
        <path d="M236 372 C234 388 226 398 218 410" />
        <path d="M152 378 C146 394 136 402 126 412" />
        <path d="M312 340 C322 354 336 360 350 366" />
        <path d="M94 346 C84 360 70 366 56 370" />
      </g>

      {/* nœuds lichen */}
      <g fill="#B9C94C">
        <circle cx="236" cy="372" r="6" />
        <circle cx="152" cy="378" r="6" />
        <circle cx="200" cy="424" r="6" />
        <circle cx="312" cy="340" r="4" />
        <circle cx="94" cy="346" r="4" />
        <circle cx="228" cy="366" r="3" />
        <circle cx="218" cy="410" r="3" />
        <circle cx="126" cy="412" r="3" />
        <circle cx="350" cy="366" r="3" />
        <circle cx="56" cy="370" r="3" />
      </g>

      {/* terrains */}
      <g fontFamily="IBM Plex Mono, ui-monospace, monospace" fontSize="12" letterSpacing="0.8" fill="#4F6020">
        <text x="250" y="392">{roots[0].toUpperCase()}</text>
        <text x="138" y="400" textAnchor="end">{roots[1].toUpperCase()}</text>
        <text x="212" y="446">{roots[2].toUpperCase()}</text>
      </g>
    </svg>
  )
}
