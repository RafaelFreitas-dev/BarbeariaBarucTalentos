import { Armchair, Gem, HeartHandshake, Search, UserCheck, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'

const items = [
  { icon: UserCheck, title: 'Atendimento personalizado', text: 'Ouvimos você e indicamos o que combina com o seu estilo.' },
  { icon: Gem, title: 'Profissionais especializados', text: 'Equipe treinada e atualizada nas melhores técnicas.' },
  { icon: Armchair, title: 'Ambiente confortável', text: 'Um espaço pensado para você relaxar enquanto se cuida.' },
  { icon: Zap, title: 'Técnicas modernas', text: 'Métodos atuais para um resultado preciso e duradouro.' },
  { icon: Search, title: 'Atenção aos detalhes', text: 'Cada risco, linha e transição feitos com precisão.' },
  { icon: HeartHandshake, title: 'Compromisso com a satisfação', text: 'Seu resultado só termina quando você gosta do que vê.' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-ink2 py-24">
      <div className="container-x">
        <span className="eyebrow">Nosso diferencial</span>
        <h2 className="h2">Mais que uma barbearia.<br /><span className="text-gold">Uma experiência.</span></h2>
        <div className="gold-line" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-md border border-gold/20 bg-ink p-7 transition hover:border-gold">
                <Icon className="mb-4 h-9 w-9 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
