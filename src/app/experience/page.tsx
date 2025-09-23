'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'John Deere',
    location: 'Ankeny, IA',
    period: 'May 2024 – August 2024',
    description: [
        'Developed a reusable base class for SmartDetect’s computer vision services using inheritance to streamline 40+ features, improve error handling, and accelerate the development of object intelligence solutions for current and future deployments.'
    ],
    icon: '🤖'
  },
  {
    title: 'Technical Lead + Developer',
    company: 'Enactus',
    location: 'Champaign, IL',
    period: 'January 2024 – May 2024',
    description: [
        'Led full-stack development and product vision for a cross-platform mobile app (JILA), deployed on iOS and Android to support community integration for 550+ Q’anjob’al-speaking immigrants in Champaign. Built with React Native, MongoDB, and AWS S3 to deliver a centralized, multilingual resource platform.'
    ],
    icon: '📱'
  },
  {
    title: 'Software Engineering Intern',
    company: 'John Deere',
    location: 'Ankeny, IA',
    period: 'May 2023 – August 2023',
    description: [
        'Worked with the Performance Engineering team to develop a Flask-based analysis tool for optimizing self-driving tractor software. Centralized performance data stored across hundreds of local devices into a unified backend using SQL and dynamically displayed with HTML/CSS. Conducted in-depth analysis to improve future software packages and streamline release cycles.'
    ],
    icon: '💻'
  },
  {
    title: 'Software Engineering Intern',
    company: 'SAP',
    location: 'Downingtown, PA',
    period: 'July 2021 – August 2021',
    description: [
        'Developed skills in conversational AI and API integration to create chatbots for stock market data processing and display. Gained exposure to SAP practices and tools like HANA.'
    ],
    icon: '📊'
  }
]

export default function ExperiencePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-5xl font-extrabold mb-4 text-white tracking-tight">Experience</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/50" />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
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
                <span className="text-2xl">{experience.icon}</span>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{experience.title} · {experience.company}</h3>
                    <p className="text-neutral-500 text-sm">{experience.period}</p>
                  </div>
                  <span className="text-neutral-400 text-sm">{experience.location}</span>
                </div>
                <ul className="space-y-3">
                  {experience.description.map((item, i) => (
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