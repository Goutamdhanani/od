import { forwardRef, type HTMLAttributes } from 'react'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Card(
  { className = '', ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_20px_80px_-40px_rgba(124,58,237,.45)] ${className}`}
      {...rest}
    />
  )
})
