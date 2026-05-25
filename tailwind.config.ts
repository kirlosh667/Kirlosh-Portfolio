import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        accent: '#2563eb',
        accent2: '#06b6d4',
        accent3: '#00f5d4',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slow-reverse': 'float 10s ease-in-out infinite reverse',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 1.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(37,99,235,0.25)',
        'glow-accent-lg': '0 0 60px rgba(37,99,235,0.35)',
        'glow-pink': '0 0 30px rgba(6,182,212,0.25)',
        'card': '0 4px 32px rgba(0,0,0,0.35)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
