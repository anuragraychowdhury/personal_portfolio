'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const earlyProjects = [
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
  }
]

const refinedProjects = [
  {
    id: 'project-5',
    title: '🏀 Steph Curry Gravity Analysis',
    description: 'Spatial gravity & defender motion from tracking data'
  }
]

export default function ProjectsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-6xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight leading-tight">Projects</h1>
      <h2 className="text-2xl font-semibold mb-10 text-neutral-300 leading-snug">A collection of my work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b border-neutral-800 pb-3">Early Projects</h3>
          <div className="space-y-4">
            {earlyProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-neutral-400">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b border-neutral-800 pb-3">Refined Projects</h3>
          <div className="space-y-4">
            {refinedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-200"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-neutral-400">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
