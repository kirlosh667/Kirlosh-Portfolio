'use client'

import { useEffect, useRef } from 'react'

export default function BlueDotsRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    class Particle {
      x: number = 0
      y: number = 0
      size: number = 0
      speed: number = 0
      opacity: number = 0

      constructor(width: number, height: number) {
        this.reset(width, height, true)
      }

      reset(width: number, height: number, initialRandomY = false) {
        this.x = Math.random() * width
        this.y = initialRandomY ? Math.random() * height : -20
        this.size = Math.random() * 2 + 1 // 1px to 3px glowing dots
        this.speed = Math.random() * 1.2 + 0.4 // gentle falling speed
        this.opacity = Math.random() * 0.35 + 0.1 // soft visible opacity
      }

      update(width: number, height: number) {
        this.y += this.speed
        if (this.y > height + 10) {
          this.reset(width, height)
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        c.fillStyle = `rgba(37, 99, 235, ${this.opacity})` // premium electric blue
        c.shadowBlur = 8
        c.shadowColor = 'rgba(37, 99, 235, 0.6)'
        c.fill()
      }
    }

    const init = () => {
      const width = canvas.width = window.innerWidth
      const height = canvas.height = window.innerHeight
      
      // Limit count on smaller screens for peak performance
      const particleCount = Math.min(Math.floor(width / 16), 80)
      particles = Array.from({ length: particleCount }, () => new Particle(width, height))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.width
      const height = canvas.height

      particles.forEach((p) => {
        p.update(width, height)
        p.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const onResize = () => {
      init()
    }

    window.addEventListener('resize', onResize)
    init()
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}
