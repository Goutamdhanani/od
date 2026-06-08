import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { testimonials } from '../utils/constants'
import { Section } from './shared/Section'

export const Testimonials = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const nodes = refs.current
    nodes.forEach((node) => {
      if (node && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        VanillaTilt.init(node, { max: 7, speed: 350 })
      }
    })

    return () => {
      nodes.forEach((node) => node?.vanillaTilt?.destroy())
    }
  }, [])

  return (
    <Section>
      <h2 className="text-3xl font-black text-slate-100">What Clients Say</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <div key={item.author} ref={(el) => { refs.current[index] = el }} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-200">“{item.quote}”</p>
            <p className="mt-4 text-sm text-slate-400">{item.author}</p>
            <p className="text-xs text-slate-500">{item.role}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
