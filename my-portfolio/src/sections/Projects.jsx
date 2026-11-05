import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, CircleCheck, ExternalLink, Lock, Smartphone } from 'lucide-react'
import { projects } from '../data/portfolio'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

function ProjectLinks({ project }) {
  if (!project.links.length) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 text-[13.5px] font-medium text-muted">
        <Lock size={14} aria-hidden="true" />
        {project.status ? `${project.status} · demo coming soon` : 'Live link available on request'}
      </p>
    )
  }
  return (
    <div className="flex flex-wrap gap-3">
      {project.links.map((link, i) => (
        <Button
          key={link.href}
          href={link.href}
          variant={i === 0 ? 'primary' : 'secondary'}
          aria-label={`${link.label}: ${project.title} (opens in a new tab)`}
        >
          {link.kind === 'android' && <Smartphone size={15} aria-hidden="true" />}
          {link.label}
          <ExternalLink size={14} aria-hidden="true" />
        </Button>
      ))}
    </div>
  )
}

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {tech.map((t) => (
        <li key={t}>
          <Chip tone="white">{t}</Chip>
        </li>
      ))}
    </ul>
  )
}

function FeaturedProject({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const reverse = index % 2 === 1
  const detailsId = `${project.key}-details`

  return (
    <Reveal as="li">
      <article className="group grid items-center gap-8 rounded-[32px] border border-line bg-card p-4 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-6 lg:grid-cols-12 lg:gap-12 lg:p-8">
        <ProjectVisual project={project} className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`} />

        <div className={`px-2 pb-2 sm:px-0 lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="font-display text-[13px] font-semibold text-sand-deep">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">{project.category}</span>
          </div>

          <h3 className="mt-4 text-[1.75rem] font-bold leading-tight text-ink sm:text-[2rem]">{project.title}</h3>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{project.summary}</p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={detailsId}
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-3">
                  {project.details.map((d) => (
                    <p key={d} className="text-[15px] leading-relaxed text-muted">{d}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-ink underline-offset-4 hover:underline"
          >
            {expanded ? 'Show less' : 'My contribution'}
            <ChevronDown size={15} aria-hidden="true" className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>

          <ul className="mt-6 grid gap-x-4 gap-y-2.5 sm:grid-cols-2" aria-label="Key features">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[14.5px] text-ink-soft">
                <CircleCheck size={16} className="mt-[2px] shrink-0 text-sage-deep" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <TechList tech={project.tech} />
          </div>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project }) {
  return (
    <Reveal as="li">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="group grid h-full items-center gap-6 rounded-[32px] border border-line bg-card p-4 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-6 md:grid-cols-2 md:gap-10 lg:p-8"
      >
        <ProjectVisual project={project} />
        <div className="px-2 pb-2 sm:px-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">{project.category}</span>
            {project.status && (
              <Chip tone="sand">
                <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" aria-hidden="true" />
                {project.status}
              </Chip>
            )}
          </div>
          <h3 className="mt-4 text-[1.5rem] font-bold leading-tight text-ink sm:text-[1.75rem]">{project.title}</h3>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{project.summary}</p>
          {project.details.map((d) => (
            <p key={d} className="mt-3 text-[15px] leading-relaxed text-muted">{d}</p>
          ))}
          <ul className="mt-5 grid gap-2.5" aria-label="Key features">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[14.5px] text-ink-soft">
                <CircleCheck size={16} className="mt-[2px] shrink-0 text-sage-deep" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <TechList tech={project.tech} />
          </div>
          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Featured Work"
            title="Products used by real people."
            description="Production applications built with React.js — from exam platforms for students to a government portal for farmers."
          />
        </div>

        <ol className="mt-14 space-y-8 sm:space-y-10">
          {featured.map((p, i) => (
            <FeaturedProject key={p.key} project={p} index={i} />
          ))}
        </ol>

        {others.length > 0 && (
          <>
            <Reveal className="mt-24 flex items-center gap-4">
              <h3 className="text-[1.35rem] font-bold text-ink">More projects</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </Reveal>
            <ul className="mt-8 grid gap-8">
              {others.map((p) => (
                <ProjectCard key={p.key} project={p} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
