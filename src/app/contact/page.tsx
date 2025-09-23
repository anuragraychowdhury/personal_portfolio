'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-3xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight">Contact</h1>

      <div className="space-y-4 text-neutral-300 text-lg">
        <p>
          <span className="text-neutral-400">Personal Email:</span>{' '}
          <a href="mailto:anuragraychowdhury@gmail.com" className="text-blue-400 hover:text-blue-300">anuragraychowdhury@gmail.com</a>
        </p>
        <p>
          <span className="text-neutral-400">School Email:</span>{' '}
          <a href="mailto:anuragr3@uiuc.edu" className="text-blue-400 hover:text-blue-300">anuragr3@uiuc.edu</a>
        </p>
      </div>
    </motion.section>
  )
}


