'use client'

import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, CheckCircle, Phone, MessageSquare } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kirloshjk667@gmail.com',
    href: 'mailto:kirloshjk667@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Direct',
    value: '+91 8531937095',
    href: 'tel:+918531937095',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Message Kirlosh',
    href: 'https://wa.me/918531937095?text=Hi%20Kirlosh,%20I\'d%20love%20to%20connect!',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kirlosh667',
    href: 'https://www.linkedin.com/in/kirlosh667?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kirlosh667',
    href: 'https://github.com/kirlosh667',
  },
]

interface FormState {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = `Hi Kirlosh,\n\nMy name is ${form.firstName} ${form.lastName}.\n\n${form.message}\n\nFrom: ${form.email}`
    const mailtoUrl = `mailto:kirloshjk667@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')
    setSuccess(true)
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    setTimeout(() => setSuccess(false), 4000)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl font-dm text-sm transition-all duration-200 outline-none'
  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">Get In Touch</span>
          <h2
            className="font-syne font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: 'var(--text)' }}
          >
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p
            className="font-dm text-base mt-4 max-w-lg mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Whether you have a project idea, an internship opportunity, or just want to say hello
            — my inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <p
              className="font-dm text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              I&apos;m actively looking for internship and placement opportunities. If you&apos;re
              a recruiter, fellow developer, or someone with an interesting project — feel free
              to reach out. I&apos;ll get back to you as soon as I can!
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="glass-card flex items-center gap-4 p-4 transition-all duration-200 hover:scale-[1.01]"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(37,99,235,0.12)', color: 'var(--accent)' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <div
                        className="font-mono text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: 'var(--text-subtle)' }}
                      >
                        {link.label}
                      </div>
                      <div
                        className="font-dm text-sm font-medium"
                        style={{ color: 'var(--text)' }}
                      >
                        {link.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 flex flex-col gap-4"
              noValidate
            >
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-mono text-xs uppercase tracking-widest mb-2"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Kirlosh"
                    className={inputClass}
                    style={inputStyle}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-mono text-xs uppercase tracking-widest mb-2"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="J"
                    className={inputClass}
                    style={inputStyle}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  style={inputStyle}
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Collaboration"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              {/* Success Banner */}
              {success && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-dm text-sm"
                  style={{
                    background: 'rgba(16,185,129,0.12)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981',
                  }}
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle size={16} />
                  Your email client is opening with a pre-filled message!
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-dm font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-glow-accent mt-1"
                style={{ background: 'var(--gradient)' }}
                aria-label="Send message via email client"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
