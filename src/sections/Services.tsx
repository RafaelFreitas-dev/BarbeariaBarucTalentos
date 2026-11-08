import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { services } from '../config/business'
import { track } from '../utils/analytics'

export default function Services() {
  return (
    <section id="servicos" className="py-24">
      <motion.div className="container-x" onViewportEnter={() => track('view_services')} viewport={{ once: true, amount: 0.15 }}>
        <span className="eyebrow">O que fazemos</span>
        <h2 className="h2">Nossos <span className="text-gold">serviços</span></h2>
        <div className="gold-line" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
