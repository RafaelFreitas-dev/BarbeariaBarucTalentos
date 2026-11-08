import { Crown, Droplets, Eye, Palette, Scissors, Sparkles, type LucideIcon } from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  sparkles: Sparkles,
  crown: Crown,
  droplets: Droplets,
  eye: Eye,
  palette: Palette,
}

interface Props {
  src?: string
  alt: string
  icon?: keyof typeof iconMap
  className?: string
  fit?: 'cover' | 'contain'
}

/** Mostra a foto quando informada em config/business.ts; senão, um espaço elegante com ícone. */
export default function Placeholder({ src, alt, icon = 'scissors', className = '', fit = 'cover' }: Props) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`} />
  }
  const Icon = iconMap[icon] ?? Scissors
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid h-full w-full place-items-center bg-[repeating-linear-gradient(45deg,#151515_0_14px,#1b1b1b_14px_28px)] text-gold ${className}`}
    >
      <Icon className="h-12 w-12 opacity-80" strokeWidth={1.2} aria-hidden="true" />
    </div>
  )
}
