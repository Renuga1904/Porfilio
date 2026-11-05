import { motion } from 'framer-motion'
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react'
import { about } from '../data/portfolio'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const icons = { education: GraduationCap, experience: Briefcase, learning: BookOpen }
const tints = {
  education: 'bg-sand-soft text-sand-deep',
  experience: 'bg-sage-soft text-sage-deep',
  learning: 'bg-surface text-ink',
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="about-title" eyebrow="About me" title="Building interfaces that feel simple — and scale." />
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={p} delay={0.06 * i} className="text-[17px] leading-[1.75] text-ink-soft">
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="grid content-center gap-4">
          {about.highlights.map((h, i) => {
            const Icon = icons[h.key]
            return (
              <Reveal as="li" key={h.key} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex items-start gap-5 rounded-3xl border border-line bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift"
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tints[h.key]}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{h.title}</p>
                    <h3 className="mt-1.5 text-[18px] font-semibold text-ink">{h.primary}</h3>
                    <p className="mt-1 text-[14.5px] text-muted">{h.secondary}</p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
