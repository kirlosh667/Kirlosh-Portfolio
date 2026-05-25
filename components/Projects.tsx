'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/utils/cn'

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const reducedCardVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const effectiveCard = shouldReduceMotion ? reducedCardVariant : cardVariant

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">Work</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Real-world software built with genuine problem solving — from AI-powered applications to
            desktop systems.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={effectiveCard}
              className={cn(
                'glass-card flex flex-col overflow-hidden group',
                project.isGithubCard
                  ? 'border-dashed cursor-pointer'
                  : ''
              )}
              style={
                project.isGithubCard
                  ? { borderStyle: 'dashed', borderColor: 'var(--border-hover)' }
                  : {}
              }
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -6, boxShadow: '0 16px 56px rgba(0,0,0,0.5), 0 0 48px rgba(37,99,235,0.22)' }
              }
              transition={{ duration: 0.2 }}
            >
              {/* Header Band */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {project.emoji}
                  </span>
                  <span
                    className="font-syne font-bold text-base"
                    style={{ color: 'var(--text)' }}
                  >
                    {project.isGithubCard ? 'GitHub Portfolio' : project.language}
                  </span>
                </div>
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: `${project.languageColor}22`,
                    color: project.languageColor,
                    border: `1px solid ${project.languageColor}44`,
                  }}
                >
                  {project.language}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="font-syne font-bold text-lg mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-dm text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Highlights */}
                {!project.isGithubCard && (
                  <ul className="flex flex-col gap-2 mb-5">
                    {project.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2 font-dm text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                          aria-hidden="true"
                        />
                        {hl}
                      </li>
                    ))}
                  </ul>
                )}

                {project.isGithubCard && (
                  <ul className="flex flex-col gap-2 mb-5">
                    {project.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2 font-dm text-sm"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent2)' }}
                          aria-hidden="true"
                        />
                        {hl}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Footer Links */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-dm text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={14} />
                    {project.isGithubCard ? 'All Repositories' : 'View Repo'}
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-dm text-sm font-medium px-4 py-2 rounded-lg text-white transition-all duration-200 hover:scale-105"
                      style={{ background: 'var(--gradient)' }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
