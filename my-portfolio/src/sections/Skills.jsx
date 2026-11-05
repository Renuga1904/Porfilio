import { motion } from 'framer-motion'
import { CodeXml, Layers, Palette, Plug, Sparkles, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const icons = {
  frontend: CodeXml,
  architecture: Layers,
  api: Plug,
  design: Palette,
  tools: Wrench,
  other: Sparkles,
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="A focused frontend toolkit."
          description="From component architecture to API integration and release — the tools I use to ship reliable, polished interfaces."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.key]
            const sage = i % 2 === 1
            return (
              <Reveal as="li" key={group.key} delay={0.05 * (i % 3)}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-card p-7 shadow-soft transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 ease-premium group-hover:scale-105 ${
                        sage ? 'bg-sage-soft text-sage-deep' : 'bg-sand-soft text-sand-deep'
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-display text-[13px] font-semibold text-line-strong">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold text-ink">{group.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{group.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[13px] font-medium text-ink-soft transition-colors duration-300 group-hover:border-line-strong"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
