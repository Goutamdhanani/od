import { useEffect, useRef } from 'react'
import { animateCounter } from '../utils/animations'
import { testimonials } from '../utils/constants'
import { Section } from './shared/Section'

export const SocialProof = () => {
  const refs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const tweens = refs.current.map((node, i) => {
      if (!node) return null
      const values = [42, 11, 94]
      return animateCounter(node, values[i])
    })
    return () => {
      tweens.forEach((tween) => tween?.kill())
    }
  }, [])

  return (
    <Section id="proof">
      <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
          <p className="text-sm uppercase text-cyan-300">Featured Result</p>
          <h3 className="mt-3 text-2xl font-bold text-slate-100">+87% SQL growth for a B2B fintech in 90 days</h3>
          <p className="mt-3 text-sm text-slate-400">Repositioned offer, rebuilt narrative arc, and streamlined conversion UX.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['Conversion Lift', 'Revenue Impact', 'Retention'].map((item, index) => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center">
              <span ref={(el) => { refs.current[index] = el }} className="text-2xl font-bold text-violet-300">0</span>
              <p className="text-xs text-slate-400">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-300">
            “{item.quote}”
            <footer className="mt-3 text-xs text-slate-500">{item.author} • {item.role}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
