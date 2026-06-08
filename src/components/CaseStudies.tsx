import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { caseStudies } from '../utils/constants'
import { Section } from './shared/Section'

export const CaseStudies = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const track = trackRef.current
    if (!track) return

    const tween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 64),
      ease: 'none',
      scrollTrigger: {
        trigger: track,
        start: 'top top+=80',
        end: '+=1200',
        scrub: true,
        pin: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <Section id="cases" className="max-w-none overflow-hidden">
      <h2 className="mx-auto mb-8 max-w-6xl px-6 text-3xl font-black text-slate-100 md:px-8">Case Studies</h2>
      <div ref={trackRef} className="flex w-max gap-6 px-6 pb-6 md:px-8">
        {caseStudies.map((item) => (
          <article key={item.name} className="w-[80vw] max-w-xl rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-sm uppercase text-cyan-300">{item.name}</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-100">{item.metric}</h3>
            <p className="mt-2 text-slate-400">{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
