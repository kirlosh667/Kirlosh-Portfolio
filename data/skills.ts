export interface Skill {
  name: string
}

export interface SkillCategory {
  id: string
  emoji: string
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    emoji: '⚙️',
    title: 'Programming Languages',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'Java' },
    ],
  },
  {
    id: 'ai-ml',
    emoji: '🤖',
    title: 'AI / ML & Vision',
    skills: [
      { name: 'DeepFace' },
      { name: 'OpenCV' },
      { name: 'Deep Learning' },
      { name: 'Facial Recognition' },
    ],
  },
  {
    id: 'desktop-gui',
    emoji: '🖥️',
    title: 'Desktop & GUI',
    skills: [
      { name: 'JavaFX' },
      { name: 'Pygame' },
      { name: 'Tkinter' },
    ],
  },
  {
    id: 'tools',
    emoji: '🛠️',
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'IntelliJ IDEA' },
      { name: 'Linux' },
    ],
  },
  {
    id: 'cs-concepts',
    emoji: '📂',
    title: 'Core CS Concepts',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'OOP' },
      { name: 'File I/O' },
      { name: 'Problem Solving' },
    ],
  },
  {
    id: 'learning',
    emoji: '📚',
    title: 'Actively Learning',
    skills: [
      { name: 'SQL / Databases' },
      { name: 'Web Development' },
      { name: 'System Design' },
      { name: 'Cloud Basics' },
    ],
  },
]
