import { useRef, type MouseEvent } from 'react'
import { navLinks } from '../utils/constants'
import { Button } from './shared/Button'

type Props = { scrollProgress: number }

export const Navigation = ({ scrollProgress }: Props) => {
  const ctaRef = useRef<HTMLButtonElement>(null)

  const move = (event: MouseEvent<HTMLButtonElement>): void => {
    const node = ctaRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    node.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="font-bold text-slate-100" aria-label="Oddwebs Home">
          oddwebs
        </a>
        <nav aria-label="Main navigation" className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          ref={ctaRef}
          onMouseMove={move}
          onMouseLeave={() => {
            if (ctaRef.current) ctaRef.current.style.transform = 'translate(0,0)'
          }}
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Strategy Call
        </Button>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: `${scrollProgress * 100}%` }} />
    </header>
  )
}
