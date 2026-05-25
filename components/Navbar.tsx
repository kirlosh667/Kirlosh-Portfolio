'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Journey', href: '#journey' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['about', 'skills', 'projects', 'hackathons', 'journey', 'github', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const activeId = useScrollSpy(sectionIds, 64)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-md border-b'
            : 'bg-transparent border-b border-transparent'
        )}
        style={
          scrolled
            ? { background: 'rgba(6,7,19,0.85)', borderColor: 'var(--border)' }
            : {}
        }
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-bold text-xl gradient-text focus:outline-none"
            aria-label="Scroll to top"
          >
            JK
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-dm',
                      isActive
                        ? 'gradient-text'
                        : 'hover:text-white'
                    )}
                    style={{ color: isActive ? undefined : 'var(--text-muted)' }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </button>
            )}

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(6,7,19,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-4 px-6">
          {navLinks.map((link, i) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'text-2xl font-syne font-bold py-3 w-full text-center rounded-xl transition-all duration-200',
                  isActive ? 'gradient-text' : ''
                )}
                style={{
                  color: isActive ? undefined : 'var(--text-muted)',
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
