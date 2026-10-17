// Logo « Mycélium » : le cube garde son sommet, sa base devient racines.
const tones = {
  prusse: { stroke: '#1D3F7A', text: 'text-prusse' },
  papier: { stroke: '#F7F8F4', text: 'text-papier' }
}

export function MyceliumMark({ tone = 'prusse', className = '' }) {
  const { stroke } = tones[tone]
  return (
    <svg viewBox="16 6 68 90" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 61 V27 L50 10 L79 27 V61 M21 27 L50 44 L79 27 M50 44 V62" strokeWidth="4.5" />
        <path d="M79 61 C79 70 72 74 66 82 M21 61 C21 70 28 74 34 84 M50 62 C50 72 47 80 44 90 M49 74 C53 78 58 80 60 88" strokeWidth="2.6" />
      </g>
      <g fill="#B9C94C">
        <circle cx="66" cy="83" r="3.8" />
        <circle cx="34" cy="85" r="3.8" />
        <circle cx="44" cy="91" r="3.8" />
        <circle cx="60" cy="89" r="3.8" />
      </g>
    </svg>
  )
}

export default function Logo({ tone = 'prusse', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <MyceliumMark tone={tone} className="h-9 w-auto" />
      <span className={`font-display text-[1.35rem] font-semibold tracking-[-0.03em] leading-none ${tones[tone].text}`}>
        cryptopole
      </span>
    </span>
  )
}
