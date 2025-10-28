'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

export default function BlogPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-white tracking-tight leading-tight">Blog</h1>
      <h2 className="text-2xl font-semibold mb-8 text-neutral-300 leading-snug">My thoughts on technology, development, and learning</h2>
      
      <div className="space-y-6 mb-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={`/blog/${post.id}`}
              className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-neutral-500 shrink-0 ml-4">{post.date}</span>
              </div>
              <p className="text-neutral-400 mb-4 leading-relaxed">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-neutral-500">{post.readTime}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-neutral-400">More posts coming soon! 📝</p>
      </div>
    </motion.section>
  )
}
