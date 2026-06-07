import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import Lenis from 'lenis'
import { Navigation } from './components/Navigation'
import { Preloader } from './components/Preloader'
import { Hero } from './components/Hero'
import { LogoMarquee } from './components/LogoMarquee'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useScrollTrigger } from './hooks/useScrollTrigger'

const PainSolution = lazy(() => import('./components/PainSolution').then((m) => ({ default: m.PainSolution })))
const Services = lazy(() => import('./components/Services').then((m) => ({ default: m.Services })))
const SocialProof = lazy(() => import('./components/SocialProof').then((m) => ({ default: m.SocialProof })))
const CaseStudies = lazy(() => import('./components/CaseStudies').then((m) => ({ default: m.CaseStudies })))
const Process = lazy(() => import('./components/Process').then((m) => ({ default: m.Process })))
const Testimonials = lazy(() => import('./components/Testimonials').then((m) => ({ default: m.Testimonials })))
const FinalCTA = lazy(() => import('./components/FinalCTA').then((m) => ({ default: m.FinalCTA })))
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })))

function App() {
  const [loading, setLoading] = useState(true)
  const progress = useScrollProgress()
  useScrollTrigger()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({ lerp: 0.09 })
    let rafId = 0
    const raf = (time: number): void => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  const fallback = useMemo(() => <div className="px-6 py-10 text-slate-400">Loading section…</div>, [])

  return (
    <main className="bg-slate-950 text-slate-100">
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <Navigation scrollProgress={progress} />
      <Hero />
      <LogoMarquee />
      <Suspense fallback={fallback}>
        <PainSolution />
        <Services />
        <SocialProof />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
