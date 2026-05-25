'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { timelineEvents, type DotColor } from '@/data/timeline'

const dotColorMap: Record<DotColor, string> = {
  accent: 'var(--accent)',
  accent2: 'var(--accent2)',
  accent3: 'var(--accent3)',
}

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const reducedItemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion()
  const effectiveItem = shouldReduceMotion ? reducedItemVariant : itemVariant

  return (
    <section id="journey" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-14 text-center"
        >
          <span className="section-label">Journey</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            My <span className="gradient-text">Timeline</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            The milestones, projects, and goals that define my journey as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="relative max-w-2xl mx-auto"
        >
          {/* Vertical gradient line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, var(--accent), var(--accent2) 50%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {timelineEvents.map((event) => {
              const dotColor = dotColorMap[event.dotColor]
              return (
                <motion.div
                  key={event.id}
                  variants={effectiveItem}
                  className="relative flex gap-6 pl-14"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-[14px] top-5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                    style={{
                      background: dotColor,
                      borderColor: dotColor,
                      boxShadow: `0 0 10px ${dotColor}80`,
                      transform: 'translateX(-50%)',
                      left: '20px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className="glass-card flex-1 p-5">
                    {/* Period */}
                    <span
                      className="font-mono text-xs uppercase tracking-widest mb-2 block"
                      style={{ color: 'var(--text-subtle)' }}
                    >
                      {event.period}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-syne font-bold text-base mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      {event.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className="font-mono text-xs mb-3"
                      style={{ color: dotColor }}
                    >
                      {event.subtitle}
                    </p>

                    {/* Body */}
                    <p
                      className="font-dm text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {event.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
