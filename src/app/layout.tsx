import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SidebarNavigation from '@/components/SidebarNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anurag Ray Chowdhury - Portfolio',
  description: 'Personal portfolio showcasing my projects and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <SidebarNavigation />
        <main className="ml-64 min-h-screen p-8 bg-black">
          {children}
        </main>
      </body>
    </html>
  )
} 