import { motion } from 'framer-motion'
import { Section } from './shared/Section'

export const PainSolution = () => (
  <Section>
    <div className="grid gap-8 md:grid-cols-2">
      <motion.article whileInView={{ x: [20, 0], opacity: [0, 1] }} viewport={{ once: true }} className="rounded-2xl border border-rose-400/30 bg-rose-900/10 p-8">
        <h2 className="text-2xl font-bold text-slate-100">Pain: Pretty sites that don’t convert</h2>
        <p className="mt-3 text-slate-300">
          Most SaaS landing pages chase aesthetics but ignore psychological sequencing and buying intent.
        </p>
      </motion.article>
      <motion.article whileInView={{ x: [-20, 0], opacity: [0, 1] }} viewport={{ once: true }} className="rounded-2xl border border-emerald-400/30 bg-emerald-900/10 p-8">
        <h2 className="text-2xl font-bold text-slate-100">Solution: Narrative-led conversion architecture</h2>
        <p className="mt-3 text-slate-300">
          We blend strategic messaging, premium visual design, and performance engineering to drive pipeline growth.
        </p>
      </motion.article>
    </div>
  </Section>
)
