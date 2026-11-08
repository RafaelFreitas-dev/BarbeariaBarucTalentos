import type { ReactNode } from 'react'
import { business } from '../config/business'
import { track, type EventName } from '../utils/analytics'
import { whatsappHref } from '../utils/whatsapp'

interface Props {
  children: ReactNode
  variant?: 'solid' | 'outline'
  size?: 'md' | 'lg'
  className?: string
  /** Link interno/externo comum */
  href?: string
  /** Índice do WhatsApp (0 ou 1). Gera link real e registra o evento antes de abrir. */
  wa?: 0 | 1
  event?: EventName
  /** Onde o botão está (para análise) */
  place?: string
  icon?: ReactNode
}

export default function Button({ children, variant = 'solid', size = 'md', className = '', href, wa, event, place, icon }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm border-2 border-gold font-display font-bold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,164,76,.35)] active:translate-y-0'
  const pad = size === 'lg' ? 'px-8 py-5 text-base sm:px-10' : 'px-6 py-3.5 text-sm'
  const look =
    variant === 'solid'
      ? 'bg-gradient-to-br from-gold2 via-gold to-[#a9852f] text-ink hover:brightness-110'
      : 'bg-transparent text-gold hover:bg-gold hover:text-ink'
  const cls = `${base} ${pad} ${look} ${className}`

  if (wa !== undefined) {
    const contact = business.whatsapps[wa]
    return (
      <a
        className={cls}
        href={whatsappHref(contact)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track(event ?? 'click_agendamento', { whatsapp: contact.id, place: place ?? 'geral' })}
      >
        {icon}
        {children}
      </a>
    )
  }
  return (
    <a className={cls} href={href ?? '#'}>
      {icon}
      {children}
    </a>
  )
}
