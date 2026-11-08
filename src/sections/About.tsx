import { Scissors } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="sobre" className="bg-ink2 py-24">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Sobre nós</span>
          <h2 className="h2">Talento, <span className="text-gold">atitude</span> e cuidado.</h2>
          <div className="gold-line" />
          <p className="text-muted">
            A BARUC TALENTOS nasceu para valorizar quem você é. Aqui, cada corte e cada barba são pensados para refletir sua identidade, elevar sua autoestima e transmitir confiança.
          </p>
          <p className="mt-4 text-muted">Atendimento próximo, atenção aos detalhes e respeito ao estilo de cada cliente.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center rounded-full border border-gold/40">
            <div className="absolute inset-4 rounded-full border border-gold/20" />
            <Scissors className="h-24 w-24 text-gold" strokeWidth={1} aria-hidden="true" />
            <p className="absolute bottom-10 font-serif italic text-gold2">Seu visual fala por você.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
