export interface Project {
  id: string
  emoji: string
  title: string
  description: string
  language: string
  languageColor: string
  tech: string[]
  highlights: string[]
  repoUrl: string
  liveUrl?: string
  isGithubCard?: boolean
}

export const projects: Project[] = [
  {
    id: 'road-medic',
    emoji: '🛣️',
    title: 'RoadMedic-OG',
    description:
      'An Android application for reporting potholes with photos, GPS location, and severity level. Utilizes Google\'s Fused Location API for precise coordinates, OSMDroid Maps for custom maps, and Firebase for real-time report storage.',
    language: 'Kotlin',
    languageColor: '#A97BFF',
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'OSMDroid Maps', 'Fused Location API'],
    highlights: [
      'Interactive mapping with OSMDroid for report visualization',
      'Real-time pothole reporting with photo attachments and metadata',
      'Fused Location API integration for highly precise coordinate capture',
      'Secure Firebase storage and real-time database report feeds',
    ],
    repoUrl: 'https://github.com/kirlosh667/RoadMedic-OG',
  },
  {
    id: 'patient-simulation',
    emoji: '🧬',
    title: 'Virtual Patient Simulation Engine',
    description:
      'An AI system that converts handwritten prescriptions into structured medical data and simulates a virtual patient to predict future health outcomes under different lifestyle scenarios using OCR and medical analytics.',
    language: 'Python',
    languageColor: '#3572A5',
    tech: ['Python', 'OCR', 'AI / ML', 'NLP', 'Data Simulation'],
    highlights: [
      'OCR engine converting handwritten prescriptions into structured text',
      'Virtual patient modeling predicting outcomes under lifestyle changes',
      'NLP-driven medical data parsing and structured health graphing',
      'Python simulation engine calculating cumulative future health indexes',
    ],
    repoUrl: 'https://github.com/kirlosh667/VIRTUAL-PATIENT-SIMULATION-ENGINE',
  },
  {
    id: 'mood-detection',
    emoji: '🎵',
    title: 'Mood Detection Music Player',
    description:
      'Emotion-based music player application that captures the user\'s facial image through a webcam, detects their emotional state using DeepFace deep learning, and automatically plays matches via Pygame.',
    language: 'Python',
    languageColor: '#3572A5',
    tech: ['Python', 'DeepFace', 'OpenCV', 'Pygame'],
    highlights: [
      'Webcam integration capturing live facial frames inside the UI',
      'DeepFace CNN models analyzing live emotion vectors in milliseconds',
      'Dynamic mood-to-playlist mapping and automated audio playbacks',
      'Clean modular architecture: capture → analysis → player modules',
    ],
    repoUrl: 'https://github.com/kirlosh667/Mood-Detection-Music-Player-System',
  },
  {
    id: 'mediway',
    emoji: '🏥',
    title: 'Mediway',
    description:
      'A web-based smart healthcare platform featuring digital triage, automated risk classification, appointment scheduling, and an accessibility-focused design engineered for individuals with physical disabilities.',
    language: 'Python',
    languageColor: '#3572A5',
    tech: ['Python', 'Django', 'SQLite', 'HTML/CSS/JS', 'Triage Algorithm'],
    highlights: [
      'Automated triage algorithm classifying patient priority indexes',
      'Web-based scheduling flow for dynamic doctor appointment bookings',
      'Accessibility-focused UI matching accessibility guidelines',
      'Robust patient record dashboard built with Django MVC structure',
    ],
    repoUrl: 'https://github.com/kirlosh667/Mediway',
  },
  {
    id: 'cafeteria-billing',
    emoji: '🍽️',
    title: 'Cafeteria Billing System',
    description:
      'A JavaFX-based desktop application designed to automate cashier billing in small food outlets. Allows selection of items, quantities, and calculates GST taxes with text file bill receipt exports.',
    language: 'Java',
    languageColor: '#b07219',
    tech: ['Java', 'JavaFX', 'OOP', 'File I/O', 'Cashier Automation'],
    highlights: [
      'Desktop billing UI built in JavaFX following OOP models',
      'Automated GST and subtotal billing processor in INR currency',
      'Structured text-receipt file generator via standard File I/O',
      'Menu item indexing with dynamic cashier summary calculation',
    ],
    repoUrl: 'https://github.com/kirlosh667/cafeteria-billing-system',
  },
  {
    id: 'github-portfolio',
    emoji: '📂',
    title: '11 Repositories & Growing',
    description:
      'Explore the full breadth of my work — from Android mobile applications and AI/ML data engines to systems programming and algorithmic problem solving.',
    language: 'GitHub',
    languageColor: '#3b82f6',
    tech: ['Kotlin', 'Python', 'Java', 'C / C++'],
    highlights: [
      '11 public repositories hosted on GitHub',
      'Diverse works in Android apps, desktop tools & AI systems',
      'Hands-on algorithms and standard data structures problem solving',
      'Always learning, pushing updates, and building new systems',
    ],
    repoUrl: 'https://github.com/kirlosh667',
    isGithubCard: true,
  },
]
