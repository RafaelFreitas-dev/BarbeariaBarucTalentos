import { useEffect } from 'react'
import ConsentBanner from '../components/ConsentBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'
import About from '../sections/About'
import Contact from '../sections/Contact'
import CTA from '../sections/CTA'
import Differentials from '../sections/Differentials'
import Gallery from '../sections/Gallery'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import { track } from '../utils/analytics'

export default function Home() {
  useEffect(() => {
    track('page_view')
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Gallery />
        <CTA />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
    </>
  )
}
