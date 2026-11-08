import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { GalleryItem } from '../config/business'
import { useLockBody } from '../hooks/useLockBody'
import Placeholder from './Placeholder'

interface Props {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onChange: (i: number) => void
}

export default function GalleryModal({ items, index, onClose, onChange }: Props) {
  const open = index !== null
  useLockBody(open)

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items.length, onChange, onClose])

  const item = index !== null ? items[index] : null
  const nav = 'absolute top-1/2 -translate-y-1/2 rounded-full border border-gold/50 bg-ink/80 p-3 text-gold hover:bg-gold hover:text-ink'

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button aria-label="Fechar" onClick={onClose} className="absolute right-4 top-[calc(1rem+env(safe-area-inset-top,0px))] rounded-full p-2 text-white hover:text-gold">
            <X className="h-8 w-8" />
          </button>
          <button aria-label="Anterior" className={`${nav} left-3`} onClick={(e) => { e.stopPropagation(); onChange((index - 1 + items.length) % items.length) }}>
            <ChevronLeft />
          </button>
          <button aria-label="Próxima" className={`${nav} right-3`} onClick={(e) => { e.stopPropagation(); onChange((index + 1) % items.length) }}>
            <ChevronRight />
          </button>
          <motion.figure
            key={item.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square overflow-hidden rounded-md border border-gold">
              <Placeholder src={item.image} alt={item.title} fit="contain" />
            </div>
            <figcaption className="mt-3 text-center font-display uppercase tracking-widest text-gold">{item.title}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
