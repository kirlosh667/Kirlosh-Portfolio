'use client'

import { useState, useEffect, useRef } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 64): string {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current?.disconnect()

    const observers: IntersectionObserver[] = []

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the entry closest to the top of the viewport
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visible.length > 0) {
        setActiveId(visible[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: `-${offset}px 0px -60% 0px`,
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    observerRef.current = observer

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, offset])

  return activeId
}
