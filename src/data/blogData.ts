export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

// Blog posts data - just copy and paste to add new posts
export const blogPosts: BlogPost[] = [
  {
    id: 'my-first-post',
    title: '🚀 Welcome to My Blog',
    description: 'This is my first blog post where I share my thoughts on technology and development.',
    date: '2024-10-25',
    readTime: '3 min read',
    tags: ['Welcome', 'Introduction', 'Personal'],
    content: `
# Welcome to My Blog

Thanks for visiting my blog! This is where I'll be sharing my thoughts on technology, development, and learning.

## What You Can Expect

- Technical tutorials and guides
- Project showcases and case studies
- Learning experiences and insights
- Industry trends and observations

## About This Post

This is just an example post to show you how the blog system works. You can easily:

1. **Copy this entire object** from the blogData.ts file
2. **Paste it as a new post** in the array
3. **Edit the content** to write your own post
4. **Save the file** and your new post will appear

## Code Example

Here's a simple example of how you might include code in your posts:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to my blog, \${name}!\`;
}

greet('Reader');
\`\`\`

## Getting Started

To add a new post:

1. Open \`src/data/blogData.ts\`
2. Find the \`blogPosts\` array
3. Copy the entire object above (including the curly braces)
4. Paste it as a new item in the array
5. Change the \`id\`, \`title\`, \`description\`, and \`content\`
6. Save the file

That's it! Your new post will appear on the blog page.

## Conclusion

I'm excited to share my journey and learnings with you. Feel free to reach out if you have any questions or suggestions for future posts!

Happy coding! 🎉
    `
  }
  // Add more posts here by copying the object above and modifying it
]
