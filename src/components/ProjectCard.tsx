'use client'

import { motion } from 'framer-motion'

interface TechBadgeProps {
  name: string
}

const TechBadge = ({ name }: TechBadgeProps) => (
  <span className="px-3 py-1 text-sm bg-gray-800 rounded-full">{name}</span>
)

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  techStack: string[]
  features: string[]
  challenges: string[]
  learnings: string[]
  liveLink?: string
}

const ProjectCard = ({
  title,
  description,
  longDescription,
  techStack,
  features,
  challenges,
  learnings,
  liveLink,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <p className="mb-8">{longDescription}</p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Challenges</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Learnings</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {learnings.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </div>

      {liveLink && (
        <div>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Live
          </a>
        </div>
      )}
    </motion.article>
  )
}

export default ProjectCard 