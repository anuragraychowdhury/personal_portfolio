'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogData'

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-950/90 rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-10 font-sans border border-neutral-900"
    >
      {/* Back to blog button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
      >
        ← Back to Blog
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-white tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 mb-6 text-neutral-400">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-sm bg-neutral-800 text-neutral-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Post content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <div 
          className="text-neutral-300 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .replace(/\n/g, '<br />')
              .replace(/```([^`]+)```/g, '<pre class="bg-neutral-900 p-4 rounded-md overflow-x-auto my-4"><code class="text-neutral-300">$1</code></pre>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em class="text-neutral-200 italic">$1</em>')
              .replace(/`(.*?)`/g, '<code class="bg-neutral-800 text-blue-300 px-1.5 py-0.5 rounded text-sm">$1</code>')
              .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mb-3 mt-6">$1</h3>')
              .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-white mb-4 mt-8">$1</h2>')
              .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-6 mt-10">$1</h1>')
              .replace(/^- (.*$)/gm, '<li class="text-neutral-300 mb-1">$1</li>')
              .replace(/^(\d+)\. (.*$)/gm, '<li class="text-neutral-300 mb-1">$2</li>')
          }} 
        />
      </div>

      {/* Post footer */}
      <footer className="mt-12 pt-8 border-t border-neutral-800">
        <p className="text-neutral-400 text-center">
          Thanks for reading! Feel free to reach out if you have any questions or want to discuss this topic further.
        </p>
      </footer>
    </motion.article>
  )
}