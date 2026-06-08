import { useEffect, useRef, type RefObject } from 'react'
import * as THREE from 'three'

type Pointer = { x: number; y: number }

export const useParticles = (): RefObject<HTMLCanvasElement | null> => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const pointer: Pointer = { x: 999, y: 999 }
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.z = 5

    const count = 220
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12
      positions[i + 1] = (Math.random() - 0.5) * 8
      positions[i + 2] = (Math.random() - 0.5) * 4
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({ color: '#22d3ee', size: 0.05 })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const resize = (): void => {
      const { clientWidth, clientHeight } = canvas
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    const onMove = (event: PointerEvent): void => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }

    const clock = new THREE.Clock()
    const animate = (): void => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.03
      points.rotation.x = t * 0.02 + pointer.y * 0.1
      points.position.x = pointer.x * 0.2
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return canvasRef
}
