import { motion } from 'framer-motion'
import { Section } from './shared/Section'

const steps = ['Diagnose funnel', 'Craft narrative', 'Design interactions', 'Ship + optimize']

export const Process = () => (
  <Section id="process">
    <h2 className="text-3xl font-black text-slate-100">Our 4-Step Process</h2>
    <svg viewBox="0 0 800 120" className="mt-6 h-16 w-full" aria-hidden="true">
      <motion.path
        d="M20 60 H780"
        stroke="url(#line)"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-xs uppercase text-cyan-300">Step {index + 1}</p>
          <p className="mt-2 text-sm text-slate-200">{step}</p>
        </div>
      ))}
    </div>
  </Section>
)
