import { motion } from 'framer-motion'
import { Briefcase, Check, GraduationCap, MapPin } from 'lucide-react'
import { education, experience } from '../data/portfolio'
import Chip from '../components/ui/Chip'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

function TimelineItem({ icon: Icon, tone = 'sand', last, children }) {
  return (
    <li className="relative pl-14 sm:pl-16">
      {!last && <span aria-hidden="true" className="absolute left-[19px] top-12 bottom-[-2.5rem] w-px bg-line-strong sm:left-[23px]" />}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-2xl border border-line bg-card shadow-soft sm:h-12 sm:w-12 ${
          tone === 'sage' ? 'text-sage-deep' : 'text-sand-deep'
        }`}
      >
        <Icon size={18} />
      </span>
      {children}
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-surface py-24 sm:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            title="Hands-on with real products."
            description="Shipping production React applications — from Figma handoff and API integration to Play Store release."
          />
        </div>

        <ol className="space-y-10">
          {experience.map((job, i) => (
            <TimelineItem key={job.role + job.company} icon={Briefcase} last={i === experience.length - 1}>
              <Reveal>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="rounded-3xl border border-line bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[21px] font-semibold text-ink">{job.role}</h3>
                      <p className="mt-1 text-[15.5px] font-medium text-ink-soft">{job.company}</p>
                    </div>
                    <Chip tone="sage">{job.type}</Chip>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-[14px] text-muted">
                    <MapPin size={14} aria-hidden="true" />
                    {job.location}
                  </p>
                  <ul className="mt-6 grid gap-3 border-t border-line pt-6">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                        <span className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sand-soft text-sand-deep">
                          <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </Reveal>
            </TimelineItem>
          ))}
        </ol>
      </div>

      {/* Education */}
      <div id="education" className="container-page mt-24 grid gap-16 sm:mt-32 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <SectionHeading eyebrow="Education" title="Academic foundation." />
        <ol className="space-y-10">
          {education.map((ed, i) => (
            <TimelineItem key={ed.degree} icon={GraduationCap} tone="sage" last={i === education.length - 1}>
              <Reveal delay={0.06 * i}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-7"
                >
                  <div>
                    <h3 className="text-[18px] font-semibold text-ink">{ed.degree}</h3>
                    <p className="mt-1 text-[15px] text-muted">{ed.school}</p>
                  </div>
                  <Chip tone="sand" className="self-start sm:self-center">{ed.period}</Chip>
                </motion.article>
              </Reveal>
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
