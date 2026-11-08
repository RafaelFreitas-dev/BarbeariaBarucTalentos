import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../config/business'
import { useLockBody } from '../hooks/useLockBody'
import Button from './Button'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useLockBody(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition duration-300 ${scrolled || open ? 'border-b border-gold/20 bg-ink/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/85 transition hover:text-gold">{l.label}</a>
          ))}
          <Button wa={0} place="header" className="!px-5 !py-2.5">Agendar horário</Button>
        </nav>
        <button
          className="p-2 text-gold lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/20 lg:hidden"
          >
            <div className="container-x flex flex-col gap-5 py-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-lg uppercase tracking-widest text-white hover:text-gold">{l.label}</a>
              ))}
              <Button wa={0} place="menu_mobile" className="w-full">Agendar horário</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
