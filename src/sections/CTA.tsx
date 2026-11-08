import { MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import { business } from '../config/business'

export default function CTA() {
  return (
    <section className="border-y border-gold bg-black py-24">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="h2">Seu próximo visual <span className="text-gold">começa aqui!</span></h2>
          <p className="mt-5 max-w-lg text-muted">
            Não deixe para depois o cuidado que você merece. Entre em contato com nossa equipe e encontre o melhor horário para renovar seu estilo.
          </p>
          <div className="mt-8">
            <Button wa={0} size="lg" place="cta" icon={<MessageCircle className="h-5 w-5" />}>Quero agendar agora!</Button>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-gold/40">
            <Placeholder src={business.ctaImage} alt="Cliente satisfeito após corte na BARUC TALENTOS" icon="crown" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
