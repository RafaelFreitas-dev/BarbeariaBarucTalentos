export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#inicio" aria-label="BARUC TALENTOS – início" className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#080808" stroke="#C9A44C" strokeWidth="2" />
        <circle cx="24" cy="24" r="18" fill="none" stroke="#C9A44C" strokeOpacity=".35" />
        <path d="M15 15l18 18M33 15L15 33" stroke="#C9A44C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="15" cy="33" r="3" fill="none" stroke="#E8CF8A" strokeWidth="2" />
        <circle cx="33" cy="33" r="3" fill="none" stroke="#E8CF8A" strokeWidth="2" />
      </svg>
      <span className="font-display leading-none">
        <span className="block text-lg font-bold tracking-[0.22em] text-white">BARUC</span>
        <span className="block text-[0.7rem] tracking-[0.5em] text-gold">TALENTOS</span>
      </span>
    </a>
  )
}
