import { Hero } from '@/components/landing/hero'
import { Problema } from '@/components/landing/problema'
import { Vision } from '@/components/landing/vision'
import { Enfoque } from '@/components/landing/enfoque'
import { QuienSoy } from '@/components/landing/quien-soy'
// import { CtaIntermedio } from '@/components/landing/cta-intermedio'
import { Faq } from '@/components/landing/faq'
import { CtaFinal } from '@/components/landing/cta-final'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <Problema />
      <Vision />
      <Enfoque />
      <QuienSoy />
      {/* <CtaIntermedio /> */}
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  )
}
