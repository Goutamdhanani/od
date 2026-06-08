import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useParticles } from '../hooks/useParticles'
import { Button } from './shared/Button'
import { Section } from './shared/Section'

const words = ['for SaaS challengers', 'for category leaders', 'for ambitious founders']

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const canvasRef = useParticles()

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length)
    }, 1800)
    return () => window.clearInterval(id)
  }, [])

  const cards = useMemo(() => ['Positioning', 'Design Systems', 'CRO'], [])

  return (
    <Section id="top" className="relative overflow-hidden pt-40">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true" />
      <div className="relative grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-300/30 px-4 py-1 text-xs uppercase tracking-widest text-cyan-300">
            premium digital product studio
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-100 md:text-6xl">
            We craft <span className="text-violet-400">high-conversion</span> growth websites.
          </h1>
          <p className="mt-5 text-lg text-slate-300">Kinetic narrative systems {words[wordIndex]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Start Your Project</Button>
            <Button variant="secondary">See Case Studies</Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">Trusted by 60+ SaaS teams • Avg +42% landing conversion lift</p>
        </div>
        <div className="relative min-h-80">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              animate={{ y: [0, -8, 0], rotate: [0, index * 2, 0] }}
              transition={{ duration: 3 + index, repeat: Number.POSITIVE_INFINITY }}
              className="absolute rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-5 text-slate-100"
              style={{ top: `${index * 28 + 30}px`, left: `${index * 40 + 20}px` }}
            >
              {card}
            </motion.div>
          ))}
          <div className="absolute -right-2 top-2/3 rounded-full border border-cyan-300/30 px-4 py-2 text-xs text-cyan-200">
            Orbit: Web + Product + Growth
          </div>
        </div>
      </div>
      <div className="relative mt-16 grid grid-cols-3 gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center">
        {[
          ['120', 'Projects launched'],
          ['98', 'Client NPS'],
          ['3.2', 'Avg ROI multiple'],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-2xl font-bold text-cyan-300">{value}</p>
            <p className="text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
