// Icônes maison : grille 24, trait 1,5, extrémités rondes. Un seul point lichen par icône de domaine.
function Icon({ children, className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

const Seed = ({ cx, cy }) => <circle cx={cx} cy={cy} r="1.6" fill="#B9C94C" stroke="none" />

export const ArrowRight = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
export const ArrowUpRight = (p) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9" /></Icon>
export const MenuIcon = (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
export const CloseIcon = (p) => <Icon {...p}><path d="M6 6l12 12M18 6 6 18" /></Icon>
export const MailIcon = (p) => <Icon {...p}><path d="M3.5 6.5h17v11h-17z" /><path d="m4 7 8 6 8-6" /></Icon>
export const MapPinIcon = (p) => <Icon {...p}><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" /><circle cx="12" cy="10" r="2" /></Icon>
export const LinkedinIcon = (p) => (
  <Icon {...p}>
    <path d="M4 4h16v16H4z" />
    <path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3" />
  </Icon>
)
export const GithubIcon = (p) => (
  <Icon {...p}>
    <path d="M9 19c-4 1.4-4-2-6-2.4M15 21v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.9 5.8 3.2 5.8 3.2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Icon>
)

export const LoopIcon = (p) => (
  <Icon {...p}>
    <path d="M5.5 9.5A7 7 0 0 1 18 7.5M18.5 14.5A7 7 0 0 1 6 16.5M18 4v3.5h-3.5M6 20v-3.5h3.5" />
    <Seed cx="12" cy="12" />
  </Icon>
)
export const PulseIcon = (p) => (
  <Icon {...p}>
    <path d="M3 12h4l2-5 4 10 2-5h6" />
    <Seed cx="21" cy="12" />
  </Icon>
)
export const FactoryIcon = (p) => (
  <Icon {...p}>
    <path d="M3 20V10l5 3v-3l5 3V5h3v15M2.5 20h19" />
    <Seed cx="19" cy="9" />
  </Icon>
)
export const CommunityIcon = (p) => (
  <Icon {...p}>
    <circle cx="6" cy="7" r="2.2" />
    <circle cx="18" cy="7" r="2.2" />
    <circle cx="12" cy="18.5" r="2.2" />
    <path d="M8.2 7h7.6M7 9l4 7.5M17 9l-4 7.5" />
    <Seed cx="12" cy="11" />
  </Icon>
)
