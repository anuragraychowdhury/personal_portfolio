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
    <>
      <aside className="fixed top-0 left-0 hidden h-full w-64 flex-col border-r border-neutral-900 bg-neutral-950 px-8 py-10 z-40 font-sans md:flex">
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
                      isActive ? 'bg-neutral-800 text-white font-semibold shadow-sm' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      <nav aria-label="Mobile navigation" className="fixed inset-x-0 top-0 z-40 flex h-16 items-center gap-1 overflow-x-auto border-b border-neutral-900 bg-neutral-950 px-4 font-sans md:hidden">
        <Link href="/about" className="mr-3 shrink-0 text-sm font-extrabold text-white">Anurag</Link>
        {sections.map((section) => {
          const isActive = pathname === section.path
          return (
            <Link
              key={section.path}
              href={section.path}
              className={`shrink-0 rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
            >
              {section.name}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
