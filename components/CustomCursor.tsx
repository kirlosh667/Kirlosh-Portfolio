'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const hasHover = window.matchMedia('(pointer: fine)').matches
      setIsMobile(!hasHover)
    }
    checkDevice()

    if (isMobile) return

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onHoverStart = () => setIsHovering(true)
    const onHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', onMouseMove)

    // Select items to trigger hover scale-up
    const setupListeners = () => {
      const hoverables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]')
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onHoverStart)
        el.addEventListener('mouseleave', onHoverEnd)
      })
    }

    setupListeners()

    // Periodically re-bind to cover hot-reloaded or dynamic elements
    const interval = setInterval(setupListeners, 2000)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      clearInterval(interval)
    }
  }, [isMobile])

  // Outer ring trail lag
  useEffect(() => {
    if (isMobile) return
    let animationFrameId: number

    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        }
      })
      animationFrameId = requestAnimationFrame(updateTrail)
    }
    updateTrail()

    return () => cancelAnimationFrame(animationFrameId)
  }, [position, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Inner solid dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      {/* Outer trailing circle */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/60 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0) scale(${isHovering ? 1.4 : 1})`,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(6, 182, 212, 0.35)' : 'none',
        }}
      />
    </>
  )
}
