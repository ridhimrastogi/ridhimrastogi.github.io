'use client'

import { motion } from 'framer-motion'
import { experience, education } from '@/data/content'

const ExperienceCard = ({ item, index }: { item: typeof experience[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0"
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
    {/* Timeline dot */}
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent" />

    <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
        <span className="text-sm text-accent font-mono">{item.period}</span>
      </div>
      <p className="text-text-secondary mb-4">
        {item.company} | {item.location}
      </p>
      <ul className="space-y-2">
        {item.highlights.map((highlight, i) => (
          <li key={i} className="text-text-secondary text-sm flex">
            <span className="text-accent mr-2">▹</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const EducationCard = ({ item, index }: { item: typeof education[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-surface border border-border rounded-lg p-6"
  >
    <h4 className="text-lg font-semibold text-text-primary">{item.degree}</h4>
    <p className="text-text-secondary">{item.school}</p>
    <p className="text-sm text-text-secondary">{item.location} | {item.period}</p>
    {item.gpa && <p className="text-sm text-accent mt-2">{item.gpa}</p>}
  </motion.div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
            Experience
          </h2>
        </motion.div>

        <div className="mb-16">
          {experience.map((item, index) => (
            <ExperienceCard key={item.title + item.company} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">Education</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <EducationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
