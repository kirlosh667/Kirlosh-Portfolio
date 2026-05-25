import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import CustomCursor from '@/components/CustomCursor'
import BlueDotsRain from '@/components/BlueDotsRain'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kirlosh J — Software Developer',
  description:
    'Aspiring Software Developer from Chennai skilled in C, C++, Python, Java. B.E. CSE student building real-world software solutions. Open to internships and placements.',
  keywords: [
    'software developer',
    'portfolio',
    'Chennai',
    'Python',
    'Java',
    'internship',
    'Kirlosh J',
    'C',
    'C++',
    'DeepFace',
    'OpenCV',
    'JavaFX',
  ],
  authors: [{ name: 'Kirlosh J', url: 'https://github.com/kirlosh667' }],
  openGraph: {
    title: 'Kirlosh J — Software Developer',
    description: 'Aspiring Software Developer | C, C++, Python, Java | Chennai',
    type: 'website',
    images: ['https://avatars.githubusercontent.com/u/205190181?v=4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kirlosh J — Software Developer',
    description: 'Aspiring Software Developer from Chennai | Open to internships',
    images: ['https://avatars.githubusercontent.com/u/205190181?v=4'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="kirlosh-portfolio-theme"
        >
          <CustomCursor />
          <BlueDotsRain />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
