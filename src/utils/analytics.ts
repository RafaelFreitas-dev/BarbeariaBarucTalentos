/**
 * Rastreamento preparado para GA4 e Meta Pixel.
 * - IDs ficam em variáveis de ambiente (.env), nunca no código.
 * - Os scripts só são carregados APÓS o consentimento do visitante.
 * - Nenhum dado pessoal é enviado.
 */
export type EventName =
  | 'page_view'
  | 'click_whatsapp_1'
  | 'click_whatsapp_2'
  | 'click_agendamento'
  | 'view_services'
  | 'view_gallery'

type Params = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const CONSENT_KEY = 'baruc_consent'
const GA4 = import.meta.env.VITE_GA4_ID
const PIXEL = import.meta.env.VITE_META_PIXEL_ID

export const trackingConfigured = Boolean(GA4 || PIXEL)

export function getConsent(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: 'granted' | 'denied'): void {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* armazenamento indisponível */
  }
  if (value === 'granted') initAnalytics(true)
}

let initialized = false

export function initAnalytics(sendPageView = false): void {
  if (initialized || getConsent() !== 'granted') return
  initialized = true
  window.dataLayer = window.dataLayer || []

  if (GA4) {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4)}`
    document.head.appendChild(s)
    window.gtag('js', new Date())
    window.gtag('config', GA4, { send_page_view: false })
  }

  if (PIXEL) {
    type Fbq = ((...a: unknown[]) => void) & { queue: unknown[]; push: unknown; loaded: boolean; version: string; callMethod?: (...a: unknown[]) => void }
    const n = function (...a: unknown[]) {
      if (n.callMethod) n.callMethod(...a)
      else n.queue.push(a)
    } as Fbq
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    window.fbq = n
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)
    window.fbq('init', PIXEL)
  }
  // Consentimento dado agora: registra a visualização da página atual
  if (sendPageView) track('page_view')
}

export function track(event: EventName, params: Params = {}): void {
  if (getConsent() !== 'granted') return
  try {
    window.dataLayer?.push({ event, ...params })
    if (window.gtag && GA4) {
      window.gtag('event', event === 'page_view' ? 'page_view' : event, params)
    }
    if (window.fbq && PIXEL) {
      if (event === 'page_view') window.fbq('track', 'PageView')
      else window.fbq('trackCustom', event, params)
    }
  } catch {
    /* nunca quebrar a navegação por causa de analytics */
  }
}
