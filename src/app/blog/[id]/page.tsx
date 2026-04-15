'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogData'

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderPostContent(raw: string) {
  // Keep code blocks safe from later newline normalization.
  const codeBlocks: string[] = []
  let html = raw.replace(/```([\s\S]*?)```/g, (_match, code) => {
    const i = codeBlocks.push(
      `<pre class="bg-neutral-900 p-4 rounded-md overflow-x-auto my-4"><code class="text-neutral-300">${escapeHtml(code)}</code></pre>`
    ) - 1
    return `@@CODEBLOCK_${i}@@`
  })

  // Escape remaining HTML so content like "<name>" renders visibly.
  html = escapeHtml(html)

  html = html
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mb-0 mt-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-white mb-0 mt-5">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-0 mt-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-neutral-200 italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-neutral-800 text-blue-300 px-1.5 py-0.5 rounded text-sm">$1</code>')
    .replace(/^[-*] (.*$)/gm, '<li class="text-neutral-300">$1</li>')
    .replace(/^(\d+)\. (.*$)/gm, '<li class="text-neutral-300">$2</li>')

  // Group consecutive <li> into a proper <ul>.
  html = html.replace(/(?:<li class="text-neutral-300">[\s\S]*?<\/li>\n?)+/g, (block) => {
    const items = block.trim().replace(/\n/g, '')
    return `<ul class="my-4 pl-6 list-disc space-y-1">${items}</ul>\n`
  })

  // Remove blank lines immediately after headings so the blurb hugs the header.
  html = html.replace(/(<\/h[1-3]>)\n+/g, '$1')

  // Normalize wrapping newlines added for readability:
  // - Keep paragraph breaks (blank lines)
  // - Collapse single newlines into spaces so text wraps naturally in the browser
  html = html.replace(/\n{2,}/g, '<br /><br />').replace(/\n/g, ' ')

  // Restore code blocks.
  html = html.replace(/@@CODEBLOCK_(\d+)@@/g, (_m, idx) => codeBlocks[Number(idx)] ?? '')

  return html
}

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
          className="text-neutral-300 leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: renderPostContent(post.content)
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