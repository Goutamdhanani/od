import { partnerLogos } from '../utils/constants'

export const LogoMarquee = () => {
  const items = [...partnerLogos, ...partnerLogos]

  return (
    <section aria-label="Trusted partners" className="overflow-hidden border-y border-slate-800 bg-slate-950 py-5">
      <div className="marquee flex gap-8 whitespace-nowrap text-slate-400">
        {items.map((name, index) => (
          <span key={`${name}-${index}`} className="text-sm uppercase tracking-[0.2em]">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
