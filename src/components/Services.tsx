import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { services } from '../utils/constants'
import { Card } from './shared/Card'
import { Section } from './shared/Section'

export const Services = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const nodes = refs.current
    nodes.forEach((node) => {
      if (node) {
        VanillaTilt.init(node, {
          max: 10,
          speed: 450,
          glare: true,
          'max-glare': 0.15,
        })
      }
    })

    return () => {
      nodes.forEach((node) => {
        node?.vanillaTilt?.destroy()
      })
    }
  }, [])

  return (
    <Section id="services">
      <h2 className="text-3xl font-black text-slate-100">Core Services</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={service.title} ref={(el) => { refs.current[index] = el }}>
            <h3 className="font-semibold text-slate-100">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{service.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
