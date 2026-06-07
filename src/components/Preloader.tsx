import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = { onDone: () => void }

export const Preloader = ({ onDone }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onDone()
      return
    }

    const timeline = gsap.timeline({ onComplete: onDone })
    timeline
      .fromTo(logoRef.current, { scale: 0.4, opacity: 0.4 }, { scale: 1, opacity: 1, duration: 0.8 })
      .to(logoRef.current, { boxShadow: '0 0 45px rgba(124,58,237,.9)', duration: 0.5 }, '<')
      .to(rootRef.current, { opacity: 0, duration: 0.45, delay: 0.2 })

    return () => {
      timeline.kill()
    }
  }, [onDone])

  return (
    <div ref={rootRef} className="fixed inset-0 z-[100] grid place-items-center bg-slate-950">
      <div
        ref={logoRef}
        className="grid h-28 w-28 place-items-center rounded-3xl border border-violet-500/50 bg-slate-900 text-4xl font-black text-violet-300"
        aria-label="Oddwebs preloader"
      >
        OW
      </div>
    </div>
  )
}
