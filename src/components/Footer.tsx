export const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950 py-12">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4 md:px-8">
      <div>
        <p className="font-bold text-slate-100">oddwebs</p>
        <p className="mt-2 text-sm text-slate-400">Premium digital product studio for high-growth SaaS teams.</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Company</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-400">
          <li><a href="#process">Process</a></li>
          <li><a href="#cases">Work</a></li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Resources</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-400">
          <li><a href="#services">Services</a></li>
          <li><a href="#proof">Proof</a></li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Social</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-400">
          <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </footer>
)
