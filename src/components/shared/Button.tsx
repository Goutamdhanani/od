import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className = '', variant = 'primary', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
        variant === 'primary'
          ? 'bg-brand-primary text-white hover:bg-violet-500'
          : 'border border-slate-600 bg-slate-900/60 text-slate-100 hover:border-slate-400'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
})
