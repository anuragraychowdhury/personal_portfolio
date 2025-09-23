'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Technical Lead',
    company: 'Enactus',
    location: 'Champaign, IL',
    period: 'May 2025 – Present',
    description: [
      'Led full-stack development and deployment of a cloud-based platform using React, Node.js, and MongoDB, enabling 550+ Q’anjob’al-speaking immigrants to access community resources across iOS and Android.',
      'Built an internal tool with RESTful APIs, MongoDB, and React Native to streamline data entry and validation, reducing manual update time by 30% and enabling real-time synchronization across mobile and web clients.',
      'Integrated AWS S3 for secure media storage and efficient content delivery, handling 1,000+ uploaded files with 99.9% uptime and ensuring scalable access to user resources across the application.'
    ],
    icon: '📱'
  },
  {
    title: 'Machine Learning Intern',
    company: 'John Deere',
    location: 'Ankeny, IA',
    period: 'May 2024 – August 2024',
    description: [
      'Fine-tuned an object detection model by curating 5k+ labeled samples, optimizing hyperparameters (learning rate, batch size, augmentation), and running iterative training/evaluation cycles, yielding a 5–10% mAP improvement in production benchmarks for real-time vision tasks.',
      'Developed a reusable C++ base class for SmartDetect’s object detection stack, consolidating shared functionality across 40+ machine learning services and reducing duplicate code to streamline future feature development.'
    ],
    icon: '🤖'
  },
  {
    title: 'Software Engineering Intern',
    company: 'John Deere',
    location: 'Ankeny, IA',
    period: 'May 2023 – August 2023',
    description: [
      'Built and deployed a full-stack web application using Flask, SQL, and HTML/CSS/JavaScript, enabling internal teams to process and visualize 10k+ tractor automation records through interactive dashboards and query interfaces.',
      'Designed and normalized 20+ sensor data fields into a relational schema with indexing and constraints, supporting sub-second query latency and improving long-term maintainability of data pipelines.',
      'Centralized fragmented datasets from 5+ legacy sources into a unified platform, reducing storage overhead by 40% and improving accessibility for downstream system modeling, diagnostics, and predictive analytics.'
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