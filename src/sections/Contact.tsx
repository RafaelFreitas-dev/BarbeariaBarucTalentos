import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { business } from '../config/business'

function Info({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 border-b border-white/10 py-4">
      <span className="mt-1 text-gold" aria-hidden="true">{icon}</span>
      <div>
        <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">{label}</p>
        <div className="text-muted">{children}</div>
      </div>
    </li>
  )
}

export default function Contact() {
  const soon = 'Em breve'
  return (
    <section id="contato" className="py-24">
      <div className="container-x">
        <span className="eyebrow">Contato e agendamento</span>
        <h2 className="h2">Fale com a <span className="text-gold">BARUC TALENTOS</span></h2>
        <div className="gold-line" />
        <div className="grid gap-6 md:grid-cols-2">
          {business.whatsapps.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <div className="rounded-md border border-gold/30 bg-ink2 p-8 text-center">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">{c.label}</p>
                <p className="my-3 font-display text-3xl font-bold">{c.display}</p>
                <Button
                  wa={i as 0 | 1}
                  event={c.id === 1 ? 'click_whatsapp_1' : 'click_whatsapp_2'}
                  place="contato"
                  className="w-full"
                  icon={<MessageCircle className="h-5 w-5" />}
                >
                  Falar com {c.label.toLowerCase()}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
          <Info icon={<MapPin />} label="Endereço">{business.address || soon}</Info>
          <Info icon={<Clock />} label="Horário de funcionamento">{business.hours || soon}</Info>
          <Info icon={<Instagram />} label="Instagram">
            {business.instagram ? <a className="underline hover:text-gold" href={business.instagram} target="_blank" rel="noopener noreferrer">Seguir no Instagram</a> : soon}
          </Info>
          <Info icon={<MapPin />} label="Localização">
            {business.mapsUrl ? <a className="underline hover:text-gold" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a> : soon}
          </Info>
        </ul>
        {business.address && (
          <iframe
            title="Localização da BARUC TALENTOS no Google Maps"
            className="mt-8 h-72 w-full rounded-md border border-gold/30"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
          />
        )}
      </div>
    </section>
  )
}
