'use client'

import { motion } from 'framer-motion'
import { personalInfo, skills } from '@/data/content'

const SkillTag = ({ skill }: { skill: string }) => (
  <span className="px-3 py-1 bg-surface border border-border rounded-full text-sm font-mono text-text-secondary hover:border-accent hover:text-accent transition-colors duration-300">
    {skill}
  </span>
)

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4">
              Currently based in {personalInfo.location}, working at {personalInfo.company} on
              cutting-edge ML infrastructure that powers services at massive scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-text-primary font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-text-primary font-semibold mb-3">Cloud & ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloudML.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-text-primary font-semibold mb-3">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
