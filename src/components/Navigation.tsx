'use client'

import Link from 'next/link'

const Navigation = () => {
  const sections = [
    { name: 'Introduction', path: '/' },
    { name: 'About Me', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills & Tools', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black p-8 border-r border-gray-800">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Your Name
        </Link>
      </div>
      <div className="space-y-2">
        {sections.map((section) => (
          <Link
            key={section.name}
            href={section.path}
            className="block py-2 text-gray-300 hover:text-white transition-colors"
          >
            {section.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation 