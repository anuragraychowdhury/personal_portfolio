'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-3xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight leading-tight">Anurag Ray Chowdhury</h1>
      <h2 className="text-2xl font-semibold text-neutral-300 leading-snug">Software Engineer & AI Engineer</h2>
      <p className="text-lg text-neutral-400 mt-4 mb-10 leading-relaxed">MCS + BS in Computer Engineering @ UIUC</p>
      <div className="bg-neutral-900/80 rounded-xl p-6">
        <p className="text-lg font-semibold text-white leading-relaxed">
          Previous work experience in agentic workflows, backend engineering, full stack development, product engineering,
          embedded systems and machine learning.
        </p>
      </div>
      {/* <div className="bg-red-500 text-white p-10 mb-8 rounded-lg text-center font-bold">
        If this is red, Tailwind works!
      </div> */}
    </motion.section>
  )
} 