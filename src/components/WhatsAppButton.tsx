import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { business } from '../config/business'
import { track } from '../utils/analytics'
import { whatsappHref } from '../utils/whatsapp'

/** Botão flutuante: abre um mini-menu para escolher o atendimento 1 ou 2. */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex flex-col gap-2" id="wa-menu">
            {business.whatsapps.map((c) => (
              <a
                key={c.id}
                href={whatsappHref(c)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { track(c.id === 1 ? 'click_whatsapp_1' : 'click_whatsapp_2', { whatsapp: c.id, place: 'flutuante' }); setOpen(false) }}
                className="rounded-md border border-gold bg-ink px-5 py-3 text-right shadow-xl transition hover:bg-gold hover:text-ink"
              >
                <span className="block font-display text-sm font-bold uppercase tracking-widest">{c.label}</span>
                <span className="text-xs text-muted">{c.display}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar opções de WhatsApp' : 'Falar no WhatsApp'}
        aria-expanded={open}
        aria-controls="wa-menu"
        className="grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_22px_rgba(0,0,0,.5)] transition hover:scale-105"
      >
        {open ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" fill="currentColor" />}
      </button>
    </div>
  )
}
