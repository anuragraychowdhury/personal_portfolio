'use client'

import { motion } from 'framer-motion'
import { NextPage } from 'next'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Illinois Urbana-Champaign',
    location: 'Champaign, IL',
    period: '2025 – Present',
    description: [
      'Relevant Coursework: Data Mining, Applied Machine Learning, Scientific Visualization, Data Cleaning'
    ],
    icon: '🎓'
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of Illinois Urbana-Champaign',
    location: 'Champaign, IL',
    period: '2021 – 2025',
    description: [
      'Relevant Coursework: Object Oriented Programming, Data Structures + Algorithms, Discrete Structures, Linear Algebra, Analog Signals, Digital Signals, Operating Systems, Numerical Methods, Artificial Intelligence, Advanced Algorithms, Database Systems'
    ],
    icon: '💻'
  },
  {
    degree: 'High School Diploma',
    school: 'Downingtown STEM Academy',
    location: 'Downingtown, PA',
    period: '2017 – 2021',
    description: [
      'International Baccalaureate Diploma Programme'
    ],
    icon: '🔬'
  }
]

const EducationPage: NextPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-5xl font-extrabold mb-4 text-white tracking-tight">Education</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/50" />

        {/* Education items */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-[1.85rem] -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-neutral-950" />
              
              {/* Icon bubble */}
              <div className="absolute left-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">{edu.icon}</span>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-lg text-neutral-300 mb-1">{edu.school}</p>
                    <p className="text-neutral-500 text-sm">{edu.period}</p>
                  </div>
                  <span className="text-neutral-400 text-sm">{edu.location}</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-neutral-300 leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default EducationPage 