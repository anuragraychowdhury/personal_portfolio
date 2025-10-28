'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import MediaDisplay from '@/components/MediaDisplay'

interface MediaItem {
  type: 'pdf' | 'image';
  url: string;
  title: string;
}

interface ProjectDetails {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  systemDesign: string[];
  github: string;
  media?: MediaItem[];
  note?: string;
}

const projectDetails: Record<string, ProjectDetails> = {
  'project-1': {
    title: '📚 DASD Grading System',
    description: 'Special Education Assessment & Analytics Platform',
    techStack: ['SQL', 'PHP', 'HTML/CSS', 'Javascript'],
    features: [
      'Student management w/ <strong>search functionality</strong>',
      'Data tracking across <strong>customizable</strong> categories',
      'Attendance management with <strong>absence tracking</strong>',
      'Quarterly results dynamically display - <strong>written + visual</strong> report',
      'Real time updates with <strong>real time updates</strong>'
    ],
    systemDesign: [
      '<strong>4 Main Tables:</strong> studentKey, skillKey, mpData, gradingTable',
      '<strong>RESTful APIs:</strong> 12+ endpoints for CRUD operations',
      '<strong>Responsive Design:</strong> Mobile-friendly interface',
      '<strong>Data Integrity:</strong> Proper foreign key relationships and business logic'
    ],
    github: 'https://github.com/anuragraychowdhury/dasdDB',
    media: [
      {
        type: 'image',
        url: '/media/dasdDB_HLD.png',
        title: 'High-Level Design'
      },
      {
        type: 'image',
        url: '/media/dasdDB_DB_design.png',
        title: 'Database Schema'
      },
      {
        type: 'image',
        url: '/media/dasd_home.png',
        title: 'Homepage Layout'
      },
      {
        type: 'image',
        url: '/media/absent feature.png',
        title: 'Mark Absent Feature'
      },
      {
        type: 'image',
        url: '/media/delete category.png',
        title: 'Delete Category Feature'
      },
      {
        type: 'image',
        url: '/media/add skill.png',
        title: 'Add Skill Feature'
      },
      {
        type: 'image',
        url: '/media/report comments.png',
        title: 'Report Comments Example'
      },
      {
        type: 'image',
        url: '/media/report example.png',
        title: 'Report Display Example'
      }
    ]
  },
  'project-2': {
    title: '🌍 JILA',
    description: 'JILA: Cross-Platform Resource & Support App for Immigrant Communities',
    techStack: ['React Native', 'Flask', 'HTML/CSS', 'Javascript', 'MongoDB', 'AWS S3'],
    features: [
      'Topic-based video organization with visual icons',
      '<strong>Password-protected</strong> admin dashboard for content management',
      'YouTube integration for seamless video playback',
      '<strong>Real-time CRUD</strong> operations for videos and topics',
      'Responsive web interface for <strong>all devices</strong>'
    ],
    systemDesign: [
      '<strong>React Frontend:</strong> Modern SPA with routing and state management',
      '<strong>Flask REST API:</strong> 8+ endpoints with CORS and error handling',
      '<strong>MongoDB Atlas:</strong> Cloud-hosted NoSQL database',
      '<strong>Internal Admin Tool:</strong> HTML/CSS/JS dashboard for content management',
      '<strong>Cross-origin integration:</strong> between frontend and backend services'
    ],
    github: 'https://github.com/anuragraychowdhury/jilaDev',
    media: [
      {
        type: 'image',
        url: '/media/JILA_HLD.png',
        title: 'High-Level Design'
      },
      {
        type: 'image',
        url: '/media/JILA_DB.png',
        title: 'Database Schema'
      },
      {
        type: 'image',
        url: '/media/internal tool.png',
        title: 'Admin Dashboard - Internal Tool'
      },
      {
        type: 'image',
        url: '/media/homepage.png',
        title: 'Mobile App Homepage'
      },
      {
        type: 'image',
        url: '/media/transportation video page.png',
        title: 'Transportation Videos Example'
      },
      {
        type: 'image',
        url: '/media/comms video page.png',
        title: 'Communication Videos Example'
      }
    ]
  },
  'project-3': {
    title: '🐧 Linux Operating System',
    description: 'Custom Linux-Like Operating System (x86 Assembly, C, C++)',
    techStack: ['x86 Assembly', 'C', 'C++'],
    features: [
      '<strong>Multi-terminal support</strong> with seamless switching',
      '<strong>Virtual memory management</strong> with 4KB/4MB paging',
      '<strong>Custom file system</strong> with inodes and directories',
      '<strong>System call interface</strong> for user-kernel communication',
      '<strong>Interrupt-driven architecture</strong> with PIC support',
      '<strong>Process management</strong> with context switching',
      'Device drivers for keyboard and RTC',
      'Comprehensive test suite for validation'
    ],
    systemDesign: [
      '<strong>Multiboot-compliant bootloader</strong> for GRUB compatibility',
      '<strong>Ring 0 kernel space</strong> with privileged operations',
      '<strong>Ring 3 user space</strong> for application isolation',
      '<strong>IDT-based interrupt handling</strong> for hardware events',
      '<strong>GDT/TSS segmentation</strong> for memory protection',
      'Static linking with no dynamic dependencies',
      '<strong>Bare-metal execution</strong> without host OS',
      '<strong>x86-32 protected mode</strong> operation'
    ],
    github: 'https://github.com/anuragraychowdhury/linuxOS',
    note: 'macOS uses a different compiler toolchain (Clang/LLVM instead of GNU GCC), and its disk image and mounting tools are incompatible with the Linux-style scripts and raw filesystems used in ECE391. The project expects a Linux-like environment with GNU tools, which is available on Windows via WSL or Cygwin, but not natively on macOS.',
    media: [
      {
        type: 'image',
        url: '/media/391_HLD.png',
        title: 'High-Level Design'
      }
    ]
  },
  'project-4': {
    title: '🐠 Aquasense',
    description: 'Aquasense: IoT Water Quality Monitoring & Analytics Platform',
    techStack: ['React', 'Flask', 'Pandas/Numpy', 'Arduino Code', 'PCB Hardware'],
    features: [
      '<strong>Real-time</strong> water quality monitoring',
      '<strong>Multi-sensor integration</strong>: pH, temperature, light',
      '<strong>Wireless</strong> data streaming to dashboard',
      '<strong>Threshold alerts</strong> and notifications',
      '<strong>Entry-level cost</strong>, simple setup'
    ],
    systemDesign: [
      '<strong>ESP32</strong> central hub for sensors',
      'Analog conditioning for <strong>pH</strong> signals',
      'Local <strong>Flask backend</strong> API endpoints',
      'Web dashboard for <strong>visualization</strong> and alerts',
      'Optional <strong>ML anomaly detection</strong> pipeline'
    ],
    github: 'https://github.com/miy28/aquasense/tree/arnav-dev',
    note: 'A live demo of Aquasense requires the actual PCB wiring and PCB hardware, as the system depends on physical sensor inputs and microcontroller integration.',
    media: [
      {
        type: 'image',
        url: '/media/aquasense_HLD.png',
        title: 'High-Level Design'
      },
      {
        type: 'pdf',
        url: '/media/aquasense_final_report.pdf',
        title: 'Lab Report'
      },
      {
        type: 'pdf',
        url: '/media/aquasense_final_presentation.pdf',
        title: 'Project Presentation'
      },
      {
        type: 'image',
        url: '/media/aquasense_pcb.jpg',
        title: 'PCB Design'
      }
    ]
  },
  'project-5': {
    title: '📰 FocusFeed',
    description: 'AI-powered news platform aggregating real-time content from news sites, social media, and forums. Built with Flask and React, FocusFeed delivers personalized, interactive feeds using a custom recommendation engine, semantic clustering, and an intuitive swipe-based interface.',
    techStack: ['React', 'Flask', 'SQL', 'API Integration'],
    features: [
      'Multi-source real-time content aggregation',
      'Semantic clustering of related articles into unified "feed notes"',
      'Personalized feed with ML-driven recommendations'
    ],
    systemDesign: [
      'Multi-source API aggregation with rate limiting',
      'ML recommendation engine with real-time updates',
      'Scalable middleware architecture for data pipelines'
    ],
    github: 'https://github.com/username/multiplayer-game',
    note: 'This project is a work in progress and will be updated throughout 2025.'
  },
  'project-6': {
    title: '🔍 BM25 Performance Analysis',
    description: 'Comprehensive analysis of BM25 (Best Matching 25) search algorithm performance across different datasets and parameter configurations. This research project evaluates retrieval effectiveness, computational efficiency, and optimal parameter tuning for information retrieval systems.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Elasticsearch', 'Jupyter Notebooks'],
    features: [
      '<strong>Multi-dataset evaluation</strong> across various document collections',
      '<strong>Parameter sensitivity analysis</strong> for k1 and b values',
      '<strong>Performance benchmarking</strong> against baseline algorithms',
      '<strong>Statistical significance testing</strong> for result validation',
      '<strong>Visualization suite</strong> for performance metrics and trends',
      '<strong>Scalability analysis</strong> across different corpus sizes'
    ],
    systemDesign: [
      '<strong>Modular evaluation framework</strong> for reproducible experiments',
      '<strong>Automated parameter sweep</strong> with grid search optimization',
      '<strong>Cross-validation methodology</strong> for robust performance assessment',
      '<strong>Statistical analysis pipeline</strong> with confidence intervals',
      '<strong>Performance profiling</strong> for computational complexity analysis',
      '<strong>Comparative evaluation</strong> against TF-IDF and other ranking functions'
    ],
    github: 'https://github.com/anuragraychowdhury/bm25-performance-analysis',
    note: 'This research project includes comprehensive statistical analysis and performance benchmarks across multiple standard IR datasets including TREC collections.',
    media: [
      {
        type: 'image',
        url: '/media/bm25_performance_chart.png',
        title: 'Performance Comparison Chart'
      },
      {
        type: 'image',
        url: '/media/bm25_parameter_analysis.png',
        title: 'Parameter Sensitivity Analysis'
      },
      {
        type: 'image',
        url: '/media/bm25_scalability_results.png',
        title: 'Scalability Analysis Results'
      }
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const id = params.id
  const project = projectDetails[id as keyof typeof projectDetails]

  // Helper function to find specific media items
  const findMediaByTitle = (title: string) => {
    return project.media?.find(item => item.title === title)
  }

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl text-white">Project not found</h1>
        <Link href="/projects" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Return to Projects
        </Link>
      </div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-8 max-w-7xl mx-auto mt-6 font-sans border border-neutral-900"
    >
      <Link 
        href="/projects"
        className="text-neutral-400 hover:text-neutral-300 mb-4 inline-block"
      >
        ← Back to Projects
      </Link>
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight leading-tight">
        {project.title}
      </h1>
      <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-6">
        {/* Top row: Tech Stack and Links side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-neutral-900/80 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/80 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Middle row: Features and System Design side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-neutral-900/80 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-neutral-400 text-base leading-relaxed">
                  • <span dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900/80 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">System Architecture</h3>
            <ul className="space-y-2">
              {project.systemDesign.map((design, index) => (
                <li key={index} className="text-neutral-400 text-base leading-relaxed">
                  • <span dangerouslySetInnerHTML={{ __html: design }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.note && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 my-4 rounded">
            <strong>Note:</strong> {project.note}
          </div>
        )}

        {/* HLD and Database Schema sections */}
        {id !== 'project-5' && (
          <div className={`grid grid-cols-1 gap-6 ${findMediaByTitle('Database Schema') || (id === 'project-4' && findMediaByTitle('PCB Design')) ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-4xl mx-auto'}`}>
            <div className="bg-neutral-900/80 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">High-Level Design</h3>
              <div className="flex justify-center items-center rounded-xl w-full" style={{ background: '#2d323c', border: '1px solid #353945', padding: 12 }}>
                <Image
                  src={findMediaByTitle('High-Level Design')?.url || '/media/dasdDB_HLD.png'}
                  alt="High-Level Design"
                  width={0}
                  height={0}
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>

          {(findMediaByTitle('Database Schema') || (id === 'project-4' && findMediaByTitle('PCB Design'))) && (
            <div className="bg-neutral-900/80 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{findMediaByTitle('Database Schema') ? 'Database Schema' : 'PCB Design'}</h3>
              <div className="flex justify-center items-center rounded-xl w-full" style={{ background: '#2d323c', border: '1px solid #353945', padding: 12 }}>
                <Image
                  src={(findMediaByTitle('Database Schema')?.url || findMediaByTitle('PCB Design')?.url) as string}
                  alt={findMediaByTitle('Database Schema') ? 'Database Schema' : 'PCB Design'}
                  width={0}
                  height={0}
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          )}
          </div>
        )}

        {project.media && id !== 'project-3' && project.media.some(m => m.title !== 'High-Level Design' && m.title !== 'Database Schema') && (
          <div className="bg-neutral-900/80 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Project Documentation</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {project.media
                .filter(media => media.title !== 'High-Level Design' && media.title !== 'Database Schema' && !(id === 'project-4' && media.title === 'PCB Design'))
                .map((media, index) => (
                  <div key={index} className="w-full">
                    <MediaDisplay
                      type={media.type}
                      url={media.url}
                      title={media.title}
                      height={media.title === 'Admin Dashboard - Internal Tool' ? 900 : 
                             media.title === 'Transportation Videos Example' || media.title === 'Communication Videos Example' ? 500 : 700}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  )
} 