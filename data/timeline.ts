export type DotColor = 'accent' | 'accent2' | 'accent3'

export interface TimelineEvent {
  id: string
  period: string
  title: string
  subtitle: string
  body: string
  dotColor: DotColor
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'academic',
    period: '2023 — Present',
    title: 'B.E. Computer Science & Engineering',
    subtitle: 'Academic Foundations',
    body: 'Developing deep knowledge in algorithms, data structures, database management systems, and core software engineering concepts at Prathyusha Engineering College.',
    dotColor: 'accent',
  },
  {
    id: 'cafeteria-billing',
    period: 'Dec 2025',
    title: 'Cafeteria Billing Automation',
    subtitle: 'Desktop Engineering Release',
    body: 'Engineered a desktop GUI application using JavaFX and OOP models to automate food billing and receipt generation for small retail points.',
    dotColor: 'accent2',
  },
  {
    id: 'israel-india',
    period: 'Jan 2026',
    title: 'Israel-India Hackathon',
    subtitle: 'International Tech Collaboration',
    body: 'Collaborated globally with teams in Ariel University and SREC, developing problem-solving prototypes in an intensive competitive track.',
    dotColor: 'accent3',
  },
  {
    id: 'road-medic',
    period: 'Feb 2026',
    title: 'RoadMedic-OG & SRM Hackelite',
    subtitle: 'Android Engineering & Finalist Placement',
    body: 'Secured Finalist status in SRM Hackelite \'26 while releasing RoadMedic-OG, a Kotlin Android application integrated with Firebase and OSMDroid maps for real-time pothole reporting.',
    dotColor: 'accent',
  },
  {
    id: 'sih-mediway',
    period: 'Mar 2026',
    title: 'Mediway & Achariya Hackathon Winner',
    subtitle: 'Full-Stack Release & Best Team Award',
    body: 'Secured the prestigious "BEST TEAM" award in Puducherry Hackathon 2K26. Shipped Mediway, an accessibility-first Django triage platform, and achieved Smart India Hackathon internal shortlisting.',
    dotColor: 'accent2',
  },
]
