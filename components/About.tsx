'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, MapPin, Zap, Target, Mail, Code } from 'lucide-react'

const revealVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
  }),
}

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const stats = [
  { value: '4+', label: 'Languages' },
  { value: '11', label: 'Repositories' },
  { value: '2', label: 'Featured Projects' },
  { value: '∞', label: 'Learning Mode' },
]

const details = [
  { icon: BookOpen, label: 'Education', value: 'B.E. CSE (Ongoing)' },
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  { icon: Zap, label: 'Interests', value: 'AI/ML, Problem Solving, Systems' },
  { icon: Target, label: 'Goal', value: 'Software Engineer · Internship → SWE Role' },
  { icon: Mail, label: 'Email', value: 'kirloshjk667@gmail.com' },
  { icon: Code, label: 'Currently', value: 'Building real-world projects & learning' },
]

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  const effectiveReveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: (i: number = 0) => ({ opacity: 1, transition: { delay: i * 0.05 } }) }
    : revealVariant

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariant}
          >
            <motion.span variants={effectiveReveal} custom={0} className="section-label">
              About Me
            </motion.span>

            <motion.h2
              variants={effectiveReveal}
              custom={1}
              className="font-syne font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--text)' }}
            >
              Building with curiosity,{' '}
              <span className="gradient-text">shipping with purpose.</span>
            </motion.h2>

            <motion.p
              variants={effectiveReveal}
              custom={2}
              className="font-dm text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              I&apos;m a B.E. Computer Science &amp; Engineering student from Chennai with a genuine curiosity
              for building systems and software that solve real-world problems. I focus on writing clean, OOP-driven, and highly maintainable code.
            </motion.p>

            <motion.p
              variants={effectiveReveal}
              custom={3}
              className="font-dm text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              My engineering portfolio spans mobile, web, and artificial intelligence tracks. Key projects include **RoadMedic-OG** (a Kotlin-based Android pothole reporting app), **Virtual Patient Simulation Engine** (a prescription OCR and dynamic health outcomes modeling tool), and **Mediway** (an accessibility-first smart triage Django healthcare platform). 
            </motion.p>

            <motion.p
              variants={effectiveReveal}
              custom={4}
              className="font-dm text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              Whether deploying deep learning emotion classifiers via **DeepFace** or automating cashier processes through **JavaFX Desktop** applications, I apply solid software engineering principles to deliver functional code. I am actively seeking internship and SWE opportunities to contribute to dynamic engineering teams.
            </motion.p>

            {/* Stat Cards */}
            <motion.div
              variants={containerVariant}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={effectiveReveal}
                  custom={i + 5}
                  className="glass-card p-4 text-center"
                >
                  <div
                    className="font-syne font-bold text-2xl gradient-text mb-1"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Detail Rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariant}
            className="flex flex-col gap-3 mt-4 md:mt-10"
          >
            {details.map((detail, i) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={detail.label}
                  variants={effectiveReveal}
                  custom={i}
                  className="glass-card flex items-start gap-4 p-4"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(37,99,235,0.12)', color: 'var(--accent)' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <div
                      className="font-mono text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: 'var(--text-subtle)' }}
                    >
                      {detail.label}
                    </div>
                    <div
                      className="font-dm text-sm font-medium"
                      style={{ color: 'var(--text)' }}
                    >
                      {detail.value}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
