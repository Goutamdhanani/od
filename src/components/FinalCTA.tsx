import { Section } from './shared/Section'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@oddwebs.com'

export const FinalCTA = () => (
  <Section id="contact" className="min-h-[80vh] grid place-items-center">
    <div className="w-full rounded-3xl border border-violet-400/40 bg-gradient-to-br from-violet-900/30 to-cyan-900/20 p-10 text-center">
      <div className="mb-4 flex justify-center gap-2 text-xs uppercase text-cyan-200">
        <span className="rounded-full border border-cyan-300/30 px-3 py-1">Q3 spots: 2 left</span>
        <span className="rounded-full border border-rose-300/30 px-3 py-1">Avg onboarding: 14 days</span>
      </div>
      <h2 className="text-4xl font-black text-slate-100">Ready to turn your landing page into a growth engine?</h2>
      <p className="mt-4 text-slate-300">Book your strategy call and get a conversion teardown in 48 hours.</p>
      <a className="mt-7 inline-block rounded-full bg-violet-500 px-7 py-3 font-semibold text-white hover:bg-violet-400" href={`mailto:${contactEmail}`}>
        Contact {contactEmail}
      </a>
    </div>
  </Section>
)
