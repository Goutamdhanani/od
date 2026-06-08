import { gsap } from 'gsap'

export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const animateCounter = (el: HTMLElement, target: number): gsap.core.Tween | null => {
  if (prefersReducedMotion()) {
    el.textContent = `${target}`
    return null
  }

  const state = { value: 0 }
  return gsap.to(state, {
    value: target,
    duration: 1.4,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.round(state.value).toString()
    },
  })
}
