'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { skillCategories } from '@/data/skills'
import { cn } from '@/utils/cn'

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const reducedCardVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const effectiveCard = shouldReduceMotion ? reducedCardVariant : cardVariant

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">Expertise</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            A curated view of the languages, libraries, frameworks, and concepts I work with.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              variants={effectiveCard}
              className={cn(
                'glass-card p-5',
                category.id === 'learning' ? 'learning-card' : ''
              )}
              style={{ transitionDelay: `${catIdx * 40}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3
                  className="font-syne font-bold text-base"
                  style={{ color: 'var(--text)' }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-chip"
                    title={skill.name}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
