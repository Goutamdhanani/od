import type { ReactNode } from 'react'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export const Section = ({ id, className = '', children }: Props) => (
  <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 md:px-8 ${className}`}>
    {children}
  </section>
)
