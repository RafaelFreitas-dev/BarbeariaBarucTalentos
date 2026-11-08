import { motion } from 'framer-motion'
import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'
import Placeholder from '../components/Placeholder'
import { gallery } from '../config/business'
import { track } from '../utils/analytics'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <section id="galeria" className="py-24">
      <motion.div className="container-x" onViewportEnter={() => track('view_gallery')} viewport={{ once: true, amount: 0.15 }}>
        <span className="eyebrow">Galeria de trabalhos</span>
        <h2 className="h2">Inspiração para o seu <span className="text-gold">próximo corte.</span></h2>
        <div className="gold-line" />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((g, i) => (
            <li key={g.id}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Ampliar: ${g.title}`}
                className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-md border border-gold/20 transition hover:border-gold"
              >
                <Placeholder src={g.image} alt={g.title} className="transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-left font-display text-sm uppercase tracking-widest">{g.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
      <GalleryModal items={gallery} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}
