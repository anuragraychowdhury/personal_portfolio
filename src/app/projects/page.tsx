'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 'project-1',
    title: '📚 DASD Grading System',
    description: 'Centralized Grading System for Special Education'
  },
  {
    id: 'project-2',
    title: '🌍 JILA',
    description: 'Educational Platform for Q\'anjob\'al-speaking Immigrants'
  },
  {
    id: 'project-3',
    title: '🐧 Linux Operating System',
    description: 'Reengineering Linux Kernel'
  },
  {
    id: 'project-4',
    title: '🐠 Aquasense',
    description: 'Home Aqarium Monitoring System'
  },
  {
    id: 'project-5',
    title: '📰 FocusFeed',
    description: 'News Aggregation and Informational Platform'
  }
]

export default function ProjectsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-3xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight leading-tight">Projects</h1>
      <h2 className="text-2xl font-semibold mb-8 text-neutral-300 leading-snug">A collection of my work</h2>
      
      <div className="space-y-4 mb-10">
        {projects.map((project) => (
          <Link 
            key={project.id}
            href={`/projects/${project.id}`}
            className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-200"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-neutral-400">{project.description}</p>
          </Link>
        ))}
      </div>
    </motion.section>
  )
} 