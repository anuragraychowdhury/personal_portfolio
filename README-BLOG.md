# Blog Management Guide

This guide explains how to update and manage blog posts in your portfolio.

## 🚀 Quick Start (Current Setup)

### Add/edit posts in a single file
1. Open `src/data/blogData.ts`
2. Add a new post object to the `blogPosts` array (or edit an existing one)
3. Save the file
4. Run the site and view:
   - `/blog` for the post list
   - `/blog/<id>` for a specific post

## 📝 Adding a New Post

Add a new object to the `blogPosts` array in `src/data/blogData.ts`:

```typescript
{
  id: 'my-new-post',
  title: '🚀 My New Post',
  description: 'A brief description of what this post is about',
  date: '2026-04-15',
  readTime: '5 min read',
  tags: ['React', 'Next.js', 'Tutorial'],
  content: `
# My New Post

This is the content of my post written in Markdown.

## Features

- Easy to write
- Supports code blocks
- Great formatting

\`\`\`javascript
console.log('Hello, World!')
\`\`\`
  `
}
```

## ✏️ Editing Existing Posts

1. Open `src/data/blogData.ts`
2. Find the post you want to edit
3. Modify the properties
4. Save the file

## 🗑️ Deleting Posts

1. Open `src/data/blogData.ts`
2. Remove the post object from the array
3. Save the file

## 📋 Post Structure

Each blog post has the following properties:

```typescript
interface BlogPost {
  id: string              // Unique identifier (URL-friendly)
  title: string           // Post title (can include emojis)
  description: string     // Brief description for post list
  date: string           // Publication date (YYYY-MM-DD)
  readTime: string       // Estimated reading time
  tags: string[]         // Array of tags for categorization
  content: string        // Post content (written in Markdown-ish text)
}
```

## 🎨 Markdown Support

Your blog supports common Markdown-style formatting in `content`:

### Headers
```markdown
# Main Title
## Section Title
### Subsection
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Code Blocks
```markdown
\`\`\`javascript
console.log('Hello, World!')
\`\`\`
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

### Links
```markdown
[Link text](https://example.com)
```

### Blockquotes
```markdown
> This is a blockquote
```

## 🔧 Notes

- There is currently **no `/admin` route** in this repo.
- Posts are rendered from `src/data/blogData.ts`.
- The post URL is derived from `id`:
  - List page: `/blog`
  - Post page: `/blog/<id>`

## 🚀 Deployment

After making changes:
1. Save your files
2. The changes will be reflected immediately in development
3. Deploy to production to make changes live

## 💡 Tips

1. **Use descriptive titles** with emojis to make posts stand out
2. **Write good descriptions** - they appear in the post list
3. **Use tags consistently** - helps with organization
4. **Preview your post locally** - visit `/blog/<id>` to see how it looks
5. **Keep content fresh** - update old posts with new information

## 🆘 Troubleshooting

### Post not showing up?
- Verify the post is in the `blogPosts` array in `src/data/blogData.ts`
- Check for syntax errors in the data file

### Formatting issues?
- Make sure you're using proper Markdown syntax
- Check that code blocks are properly escaped
- Preview locally on `/blog/<id>`

## 📚 Example Post

Here's a complete example of a blog post:

```typescript
{
  id: 'getting-started-with-nextjs',
  title: '🚀 Getting Started with Next.js',
  description: 'Learn the basics of Next.js and build your first application',
  date: '2026-04-15',
  readTime: '10 min read',
  tags: ['Next.js', 'React', 'Tutorial', 'Web Development'],
  content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier.

## Why Next.js?

- **Server-side rendering** for better SEO
- **Automatic code splitting** for performance
- **Built-in CSS support**
- **API routes** for backend functionality

## Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Your First Page

Create a new file in \`pages/index.js\`:

\`\`\`javascript
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  )
}
\`\`\`

## Next Steps

1. Learn about routing
2. Add styling
3. Deploy to Vercel

Happy coding! 🎉
  `
}
```

This system makes it easy to manage your blog content while keeping your codebase clean and organized!
