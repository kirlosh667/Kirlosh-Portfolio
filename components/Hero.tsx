'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const revealVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
}

const IMAGES = [
  '/images/profile.jpg',
  '/images/keyboard.jpg',
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [imageIndex, setImageIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [hasError, setHasError] = useState(false)

  const toggleAvatar = () => {
    setIsFlipped((prev) => !prev)
    setTimeout(() => {
      setHasError(false)
      setImageIndex((prev) => (prev + 1) % IMAGES.length)
    }, 150)
  }

  const effectiveVariant = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: (i: number = 0) => ({ opacity: 1, transition: { delay: i * 0.05 } }),
      }
    : revealVariant

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background Orbs */}
      {!shouldReduceMotion && (
        <>
          <div
            className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-float-slow"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-float-slow-reverse"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Availability Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={effectiveVariant}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-dm"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot"
                aria-hidden="true"
              />
              Open to internships &amp; opportunities
            </motion.div>

            {/* H1 Name */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={effectiveVariant}
              className="font-syne font-bold leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Kirlosh <span className="gradient-text">J</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={effectiveVariant}
              className="text-lg sm:text-xl font-dm mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              B.E. Computer Science &amp; Engineering
            </motion.p>

            {/* Value Statement */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={effectiveVariant}
              className="text-base sm:text-lg font-dm leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--text-subtle)' }}
            >
              Aspiring software developer from Chennai, building clean and
              logical solutions to real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={effectiveVariant}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
                }}
                className="px-5 py-3 rounded-xl font-dm font-medium text-sm text-white transition-all duration-200 hover:scale-105 hover:shadow-glow-accent"
                style={{ background: 'var(--gradient)' }}
                aria-label="View my projects"
              >
                View Projects
              </button>

              <a
                href="https://github.com/kirlosh667"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-dm font-medium text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kirlosh667"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-dm font-medium text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-dm font-medium text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
                aria-label="Go to contact section"
              >
                <Mail size={16} />
                Contact
              </button>
            </motion.div>
          </div>

          {/* Avatar (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            onClick={toggleAvatar}
            className="hidden lg:flex flex-shrink-0 flex-col items-center cursor-pointer select-none"
            title="Click to toggle profile photo"
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="gradient-ring"
            >
              <div
                className="rounded-full overflow-hidden w-56 h-56 xl:w-64 xl:h-64 relative"
              >
                {hasError ? (
                  <div
                    className="avatar-fallback w-full h-full flex items-center justify-center text-4xl font-syne font-bold gradient-text"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}
                  >
                    JK
                  </div>
                ) : (
                  <Image
                    src={IMAGES[imageIndex]}
                    alt="Kirlosh J — Software Developer"
                    fill
                    sizes="(max-width: 1280px) 224px, 256px"
                    className="object-cover"
                    style={{
                      transform: isFlipped ? 'rotateY(180deg)' : 'none',
                    }}
                    priority
                    onError={() => setHasError(true)}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--text-subtle)' }}
          >
            scroll
          </span>
          <ChevronDown
            size={16}
            className="animate-scroll-bounce"
            style={{ color: 'var(--text-subtle)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
