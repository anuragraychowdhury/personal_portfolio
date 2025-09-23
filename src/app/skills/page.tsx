'use client'

import { motion } from 'framer-motion'

const skills = [
  // Programming Languages
  { name: 'C/C++', icon: '⚙️', category: 'languages' },
  { name: 'Python', icon: '🐍', category: 'languages' },
  { name: 'Java', icon: '☕', category: 'languages' },
  { name: 'JavaScript', icon: '📜', category: 'languages' },
  { name: 'Linux', icon: '🐧', category: 'languages' },
  { name: 'SystemVerilog', icon: '🔧', category: 'languages' },
  { name: 'MATLAB', icon: '📊', category: 'languages' },
  { name: 'R', icon: '📈', category: 'languages' },
  { name: 'PHP', icon: '🐘', category: 'languages' },
  { name: 'x86 Assembly', icon: '💻', category: 'languages' },
  { name: 'Swift', icon: '🎯', category: 'languages' },
  { name: 'XML', icon: '📝', category: 'languages' },
  { name: 'LaTeX', icon: '📄', category: 'languages' },
  { name: 'HTML/CSS', icon: '🎨', category: 'languages' },

  // Frameworks and Databases
  { name: 'React', icon: '⚛️', category: 'frameworks' },
  { name: 'SQL', icon: '🗄️', category: 'frameworks' },
  { name: 'Flask', icon: '🌶️', category: 'frameworks' },
  { name: 'Databricks', icon: '⚡', category: 'frameworks' },
  { name: 'Dash/Plotly', icon: '📊', category: 'frameworks' },
  { name: 'iOS Development', icon: '📱', category: 'frameworks' },
  { name: 'Android Dev', icon: '🤖', category: 'frameworks' },
  { name: 'PCB Design', icon: '🔌', category: 'frameworks' },
  { name: 'Jira', icon: '📋', category: 'frameworks' },
  { name: 'React Native', icon: '📱', category: 'frameworks' },
  { name: 'AWS', icon: '☁️', category: 'frameworks' },
  { name: 'MongoDB', icon: '🍃', category: 'frameworks' }
]

export default function SkillsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-5xl font-extrabold mb-4 text-white tracking-tight">Skills & Tools</h1>

      <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
        Gained experience in various languages, frameworks and tools through experiences in Product Engineering, Embedded Systems, Machine Learning and Software Engineering.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Programming Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.filter(skill => skill.category === 'languages').map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 hover:bg-white/15 transition-colors cursor-pointer"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-neutral-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Frameworks & Databases</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.filter(skill => skill.category === 'frameworks').map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 hover:bg-white/15 transition-colors cursor-pointer"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-neutral-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
} 