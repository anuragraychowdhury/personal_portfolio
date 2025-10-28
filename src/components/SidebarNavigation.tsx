'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sections = [
  { name: 'About Me', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Skills & Tools', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
  // Uncomment below if you want Stats
  // { name: 'Stats', path: '/stats' },
]

export default function SidebarNavigation() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-neutral-950 border-r border-neutral-900 flex flex-col py-10 px-8 z-40 font-sans">
      <div className="mb-12">
        <span className="text-2xl font-extrabold text-white tracking-tight">Anurag Ray Chowdhury</span>
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          {sections.map((section) => {
            const isActive = pathname === section.path
            return (
              <li key={section.path}>
                <Link
                  href={section.path}
                  className={`block px-4 py-2.5 text-base rounded-lg font-medium transition-all duration-150 text-left outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-950 ${
                    isActive
                      ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  {section.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
} 