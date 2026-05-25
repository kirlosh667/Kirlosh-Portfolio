'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/kirlosh667', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kirlosh667', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kirloshjk667@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Row 1: Logo + Nav Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-7">
          <div className="text-center sm:text-left">
            <button
              onClick={scrollToTop}
              className="font-syne font-bold text-xl gradient-text focus:outline-none"
              aria-label="Scroll to top"
            >
              Kirlosh J
            </button>
            <p
              className="font-dm text-xs mt-0.5"
              style={{ color: 'var(--text-subtle)' }}
            >
              Aspiring Software Developer · Chennai, India
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-dm text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t mb-7" style={{ borderColor: 'var(--border)' }} />

        {/* Row 2: Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Icon size={16} />
                </a>
              )
            })}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Copyright */}
          <p
            className="font-mono text-xs text-center"
            style={{ color: 'var(--text-subtle)' }}
          >
            Built with care · 2025 · Always learning, Always building.
          </p>
        </div>
      </div>
    </footer>
  )
}
