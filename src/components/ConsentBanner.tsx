import { useState } from 'react'
import { getConsent, setConsent, trackingConfigured } from '../utils/analytics'

/** Só aparece se GA4/Pixel estiverem configurados e o visitante ainda não escolheu. */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(trackingConfigured && getConsent() === null)
  if (!visible) return null
  const choose = (v: 'granted' | 'denied') => { setConsent(v); setVisible(false) }
  return (
    <div role="dialog" aria-label="Privacidade" className="fixed inset-x-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] z-[70] mx-auto max-w-xl rounded-md border border-gold/40 bg-ink2 p-4 text-sm shadow-2xl">
      <p className="text-muted">Usamos medições anônimas para melhorar o site. Você aceita?</p>
      <div className="mt-3 flex gap-3">
        <button onClick={() => choose('granted')} className="rounded-sm bg-gold px-4 py-2 font-semibold text-ink">Aceitar</button>
        <button onClick={() => choose('denied')} className="rounded-sm border border-gold/50 px-4 py-2 text-gold">Recusar</button>
      </div>
    </div>
  )
}
