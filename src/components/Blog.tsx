'use client'

import { motion } from 'framer-motion'
import { blogPosts } from '@/data/content'

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => (
  <motion.a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="block bg-surface border border-border rounded-lg p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-3">
      <span className="text-xs font-mono text-accent">{post.publisher}</span>
      <span className="text-xs text-text-secondary">{post.date}</span>
    </div>
    <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
      {post.title}
    </h3>
    <p className="text-text-secondary text-sm">{post.description}</p>
    <div className="mt-4 flex items-center text-accent text-sm">
      Read article
      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </motion.a>
)

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Published Writing
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Technical articles and blog posts on machine learning and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
