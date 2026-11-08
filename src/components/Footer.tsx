import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { business, navLinks } from '../config/business'
import { track } from '../utils/analytics'
import { whatsappHref } from '../utils/whatsapp'
import Logo from './Logo'

export default function Footer() {
  const soon = <span className="text-muted/70">Em breve</span>
  return (
    <footer className="border-t border-gold/30 bg-ink pb-28 pt-14">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 font-serif italic text-gold2">{business.tagline}</p>
        </div>
        <nav aria-label="Rodapé">
          <h4 className="eyebrow">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}><a className="hover:text-gold" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h4 className="eyebrow">Telefones</h4>
          <ul className="space-y-2 text-sm text-muted">
            {business.whatsapps.map((c) => (
              <li key={c.id}>
                <a
                  className="inline-flex items-center gap-2 hover:text-gold"
                  href={whatsappHref(c)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(c.id === 1 ? 'click_whatsapp_1' : 'click_whatsapp_2', { whatsapp: c.id, place: 'rodape' })}
                >
                  <MessageCircle className="h-4 w-4" /> {c.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              {business.instagram ? <a className="hover:text-gold" href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> : soon}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Visite-nos</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{business.address || soon}</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" />{business.hours || soon}</li>
          </ul>
        </div>
      </div>
      <p className="container-x mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
