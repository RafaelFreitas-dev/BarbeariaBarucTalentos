import { motion } from 'framer-motion'
import { MessageCircle, Scissors } from 'lucide-react'
import Button from '../components/Button'
import { business } from '../config/business'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32">
      {business.heroImage ? (
        <img src={business.heroImage} alt="Barbeiro realizando corte masculino na BARUC TALENTOS" className="absolute inset-0 h-full w-full object-cover opacity-40" fetchPriority="high" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(201,164,76,.22),transparent_55%),linear-gradient(160deg,#151515,#080808_60%)]" />
      )}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 aspect-square w-[min(520px,85vw)] -translate-y-1/2 rounded-full border border-gold/25 shadow-[inset_0_0_0_28px_rgba(201,164,76,.04)]" />
      <div className="container-x relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 font-display text-xs uppercase tracking-[0.25em] text-gold">
            <Scissors className="h-4 w-4" aria-hidden="true" /> Experiência em cuidado masculino
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] sm:text-7xl">
            Seu estilo. <span className="text-gold">Sua identidade.</span> Seu momento.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Na BARUC TALENTOS, cada detalhe importa. Transformamos seu visual em uma expressão de personalidade, confiança e atitude.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button wa={0} size="lg" place="hero" icon={<MessageCircle className="h-5 w-5" />}>Agendar meu horário</Button>
            <Button href="#servicos" variant="outline" size="lg">Conhecer serviços</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
