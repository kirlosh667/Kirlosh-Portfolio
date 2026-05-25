'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Trophy, Award, Users, Globe, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'

// Achievements stats dashboard
const stats = [
  { value: '10+', label: 'Hackathons Led', desc: 'Served as Team Lead in all events', emoji: '👑' },
  { value: 'Top 5', label: 'Best Team Award', desc: 'Jury and peer recognition', emoji: '🏆' },
  { value: 'International', label: 'Indo-Israel Hackathon', desc: 'Global technical exchange', emoji: '🇮🇱' },
  { value: 'Shortlisted', label: 'Smart India Hackathon', desc: 'SIH College level shortlisted', emoji: '✨' },
]

// Milestones in requested order
const milestones = [
  {
    icon: Users,
    title: '10+ Hackathons (All as Team Lead)',
    subtitle: 'Technical Leadership',
    description: 'Led collaborative developer teams through intensive, high-pressure hackathon timelines. Spearheaded system design, managed schedules, and presented functioning prototypes to jury panels.',
    badge: '100% Team Lead',
  },
  {
    icon: Trophy,
    title: 'Best Team Award Winner',
    subtitle: 'National Level Hackathon 2K26',
    description: 'Secured the prestigious "BEST TEAM" award in the National Level Hackathon 2K26 held at Achariya College of Engineering Technology, Puducherry, on 14th March 2026.',
    badge: '1st Place Team',
  },
  {
    icon: Trophy,
    title: 'Grand Finale Finalist',
    subtitle: 'SRM Vadapalani Hackelite 2026',
    description: 'Emerged as a Finalist in the grand finale of Hackelite \'2026, a 24-hour hackathon organized by the Developer Network Space (DNS) Club, Department of CSE, SRM Vadapalani Campus on 10th & 11th February 2026.',
    badge: 'Grand Finalist',
  },
  {
    icon: Globe,
    title: 'Israel-India Global Innovators Hackathon',
    subtitle: 'International Collaboration',
    description: 'Participated in the international Israel-India Global Innovators Hackathon \'26 held on 5th & 6th January 2026 at Sri Ramakrishna Engineering College, Coimbatore, in partnership with Ariel University, Israel.',
    badge: 'Global Event',
  },
  {
    icon: Award,
    title: 'Smart India Hackathon (SIH)',
    subtitle: 'Inter-college Level Shortlist',
    description: 'Developed structured problem-solving solutions for SIH government utility statements, successfully passing internal rounds to represent at the inter-college level.',
    badge: 'SIH College Level',
  },
]

// Real Certificates in requested order
const certificates = [
  {
    src: '/images/cert_best_team.png',
    alt: 'Best Team Certificate — Achariya College Puducherry Hackathon',
    title: '1. Best Team Award',
    caption: 'National Level Hackathon 2K26 — Secured "BEST TEAM" at Achariya College of Engineering Technology, Puducherry on 14th March 2026.',
  },
  {
    src: '/images/cert_finalist.png',
    alt: 'Finalist Certificate — SRM Vadapalani Hackelite 2026',
    title: '2. Hackelite Finalist',
    caption: 'SRM Hackelite \'2026 — Secured "Finalist" in the grand finale organized by Developer Network Space (DNS) Club, Department of CSE, SRM Institute of Science and Technology, Vadapalani, Chennai.',
  },
  {
    src: '/images/cert_international.png',
    alt: 'International Hackathon Certificate — Israel-India Innovators 2026',
    title: '3. Israel-India Global',
    caption: 'Israel-India Global Innovators Hackathon \'26 — Certificate of Participation in collaboration with Ariel University (Israel) and Sri Ramakrishna Engineering College, Coimbatore.',
  },
]

export default function Hackathons() {
  const shouldReduceMotion = useReducedMotion()
  const [modalOpen, setModalOpen] = useState(false)
  const [activeCert, setActiveCert] = useState(0)

  // Premium ultra-smooth transitions
  const revealTransition = {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  }

  const handleNextCert = () => {
    setActiveCert((prev) => (prev + 1) % certificates.length)
  }

  const handlePrevCert = () => {
    setActiveCert((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="hackathons" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background glow highlights */}
      <div
        className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={revealTransition}
          className="mb-14 text-center"
        >
          <span className="section-label">Achievements</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            Hackathons &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            A proven record of tech leadership — driving engineering teams under pressure to deliver working solutions to real-world problems.
          </p>
        </motion.div>

        {/* Stat Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ...revealTransition, delay: i * 0.08 }}
              className="glass-card p-5 text-center relative overflow-hidden group hover:scale-[1.02] hover:border-blue-500/20"
            >
              <div className="text-3xl mb-2" aria-hidden="true">
                {stat.emoji}
              </div>
              <div className="font-syne font-bold text-2xl sm:text-3xl gradient-text mb-1">
                {stat.value}
              </div>
              <div
                className="font-mono text-xs uppercase tracking-wider font-semibold mb-2"
                style={{ color: 'var(--text)' }}
              >
                {stat.label}
              </div>
              <div
                className="font-dm text-xs leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Deck + Detail list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certificate Gallery Container (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={revealTransition}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-card p-5">
              <h3 className="font-syne font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>
                Official Certifications
              </h3>
              <p className="font-mono text-xs mb-4" style={{ color: 'var(--text-subtle)' }}>
                Select and click to inspect full document
              </p>

              {/* Responsive Deck */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div onClick={() => setModalOpen(true)} className="w-full h-full relative">
                  <Image
                    src={certificates[activeCert].src}
                    alt={certificates[activeCert].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                    priority
                  />
                  
                  {/* Hover magnifying overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 bg-slate-900/80 border border-white/10 px-4 py-2 rounded-xl text-white font-dm text-xs transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                      <Maximize2 size={14} />
                      Zoom Certificate
                    </div>
                  </div>
                </div>

                {/* Left/Right deck controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevCert()
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-slate-900 text-white rounded-full p-2 border border-white/10 opacity-60 hover:opacity-100 transition-opacity z-10"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextCert()
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/80 hover:bg-slate-900 text-white rounded-full p-2 border border-white/10 opacity-60 hover:opacity-100 transition-opacity z-10"
                  aria-label="Next Certificate"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Selector Tabs */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
                {certificates.map((cert, index) => (
                  <button
                    key={cert.src}
                    onClick={() => setActiveCert(index)}
                    className="flex-1 font-mono text-[10px] text-center py-2 px-1 rounded-lg border transition-all duration-200 truncate"
                    style={{
                      background: activeCert === index ? 'rgba(37,99,235,0.08)' : 'var(--surface)',
                      borderColor: activeCert === index ? 'var(--accent)' : 'var(--border)',
                      color: activeCert === index ? 'var(--accent)' : 'var(--text-muted)',
                    }}
                  >
                    {cert.title}
                  </button>
                ))}
              </div>

              {/* Certificate Caption */}
              <div
                className="mt-4 p-3 rounded-lg border text-xs leading-relaxed font-dm"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <span className="font-semibold text-blue-400 block mb-1">
                  {certificates[activeCert].title}:
                </span>
                {certificates[activeCert].caption}
              </div>
            </div>
          </motion.div>

          {/* Detailed achievements list (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ ...revealTransition, delay: idx * 0.06 }}
                  className="glass-card p-5 flex items-start gap-4 hover:scale-[1.01] hover:border-blue-500/20"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-1"
                    style={{ background: 'rgba(37, 99, 235, 0.12)', color: 'var(--accent)' }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <h4
                        className="font-syne font-bold text-base"
                        style={{ color: 'var(--text)' }}
                      >
                        {milestone.title}
                      </h4>
                      <span
                        className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border"
                        style={{
                          background: 'rgba(6, 182, 212, 0.08)',
                          borderColor: 'rgba(6, 182, 212, 0.2)',
                          color: '#06b6d4',
                        }}
                      >
                        {milestone.badge}
                      </span>
                    </div>
                    <div
                      className="font-mono text-xs font-medium mb-2"
                      style={{ color: 'var(--accent2)' }}
                    >
                      {milestone.subtitle}
                    </div>
                    <p
                      className="font-dm text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal Zoom Certificate Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(6, 7, 19, 0.95)', backdropFilter: 'blur(16px)' }}
          >
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setModalOpen(false)} />

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              {/* Close Overlay */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-20 bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-white rounded-full p-2 hover:scale-110 transition-transform cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <Image
                src={certificates[activeCert].src}
                alt={certificates[activeCert].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
