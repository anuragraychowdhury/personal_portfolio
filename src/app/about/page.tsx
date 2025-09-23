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
      <h2 className="text-2xl font-semibold mb-8 text-neutral-300 leading-snug">Software Engineer</h2>
      <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
        ✅ Computer Engineering @ Illinois <br />
        🔄 Masters in Computer Science @ Illinois <br />
      </p>
      <div className="bg-neutral-900/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2"> 
          Masters student in Computer Science and Computer Engineering graduate @ UIUC. 
          Previous work experience in full stack development, product engineering, embedded systems and machine learning. </h3>
      </div>
      {/* <div className="bg-red-500 text-white p-10 mb-8 rounded-lg text-center font-bold">
        If this is red, Tailwind works!
      </div> */}
    </motion.section>
  )
} 