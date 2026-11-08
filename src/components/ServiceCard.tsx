import type { Service } from '../config/business'
import Button from './Button'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-md border border-gold/15 bg-ink2 transition duration-300 hover:-translate-y-1.5 hover:border-gold">
        <div className="aspect-[4/3] overflow-hidden">
          <Placeholder src={service.image} alt={service.name} icon={service.icon} className="transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide">{service.name}</h3>
          <p className="flex-1 text-sm text-muted">{service.description}</p>
          <p className="font-display text-sm uppercase tracking-widest text-gold">{service.price || 'Consulte nossos valores'}</p>
          <Button wa={0} place={`servico_${service.id}`} className="mt-2 w-full">
            Agendar agora
          </Button>
        </div>
      </article>
    </Reveal>
  )
}
