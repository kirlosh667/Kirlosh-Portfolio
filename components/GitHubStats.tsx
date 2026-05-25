'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const stats = [
  { value: '11', label: 'Public Repos', emoji: '📁' },
  { value: '3', label: 'Followers', emoji: '👥' },
  { value: 'OSS', label: 'Open Source Focus', emoji: '🌐' },
  { value: 'UTC+5:30', label: 'Chennai, India', emoji: '📍' },
]

const languages = [
  { name: 'Python', percent: 72, color: '#3572A5' },
  { name: 'Java', percent: 60, color: '#b07219' },
  { name: 'C / C++', percent: 50, color: '#f34b7d' },
]

function LanguageBars() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <div ref={ref} className="flex flex-col gap-4 mt-6">
      {languages.map((lang) => (
        <div key={lang.name}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
              {lang.name}
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-subtle)' }}>
              {lang.percent}%
            </span>
          </div>
          <div
            className="h-1 rounded-full overflow-hidden w-full"
            style={{ background: 'var(--border)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-[1200ms] ease-out"
              style={{
                width: isVisible ? `${lang.percent}%` : '0%',
                background: `linear-gradient(90deg, ${lang.color}, ${lang.color}bb)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function GitHubStats() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="github" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">Open Source</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            A snapshot of my GitHub activity and language distribution.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* 2×2 Stat Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-2xl mb-1" aria-hidden="true">
                    {stat.emoji}
                  </div>
                  <div
                    className="font-syne font-bold text-xl gradient-text mb-0.5"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-wide"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Language Bars */}
            <div className="glass-card p-5">
              <h3
                className="font-syne font-bold text-sm mb-1"
                style={{ color: 'var(--text)' }}
              >
                Language Distribution
              </h3>
              <p className="font-mono text-xs mb-2" style={{ color: 'var(--text-subtle)' }}>
                Estimated across public repositories
              </p>
              <LanguageBars />
            </div>
          </motion.div>

          {/* Right Column — GitHub Stats Images */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card p-3 overflow-hidden">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=kirlosh667&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=06b6d4&text_color=7a7a9a&count_private=true"
                alt="Kirlosh J GitHub stats showing total stars, commits, pull requests and issues"
                width={495}
                height={195}
                className="w-full h-auto rounded-lg"
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="glass-card p-3 overflow-hidden">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kirlosh667&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=7a7a9a"
                alt="Kirlosh J top programming languages chart"
                width={495}
                height={165}
                className="w-full h-auto rounded-lg"
                loading="lazy"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Contribution Graph — Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          className="glass-card p-4 overflow-hidden"
        >
          <h3
            className="font-syne font-bold text-sm mb-3 px-1"
            style={{ color: 'var(--text)' }}
          >
            Contribution Activity
          </h3>
          <div className="overflow-x-auto">
            <Image
              src="https://ghchart.rshah.org/3b82f6/kirlosh667"
              alt="Kirlosh J GitHub contribution graph for the past year"
              width={800}
              height={120}
              className="w-full h-auto min-w-[600px] rounded"
              loading="lazy"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
