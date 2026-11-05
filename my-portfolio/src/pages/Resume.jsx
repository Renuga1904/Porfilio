import { useEffect } from 'react'
import { ArrowLeft, Eye, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resume } from '../data/resume'
import Reveal from '../components/ui/Reveal'

function Heading({ children }) {
  return (
    <h2 className="mb-4 border-b border-line pb-2 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-sand-deep">
      {children}
    </h2>
  )
}

function Bullets({ items }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((p) => (
        <li key={p} className="relative pl-4 text-[14.5px] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-sand-deep">
          {p}
        </li>
      ))}
    </ul>
  )
}

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-sand-deep"
    >
      {children}
    </a>
  )
}

/** View-only resume. There is no PDF behind it and printing is disabled in index.css. */
export default function Resume() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Resume · Muthu Renuga'
    window.scrollTo(0, 0)
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="resume-page bg-surface pb-24 pt-28 sm:pt-32">
      <div className="container-page max-w-[920px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[14px] font-medium text-ink-soft shadow-soft transition-all hover:-translate-y-0.5 hover:text-ink"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to portfolio
          </Link>
          <p className="inline-flex items-center gap-2 text-[13px] font-medium text-muted">
            <Eye size={14} aria-hidden="true" />
            View-only resume
          </p>
        </div>

        <Reveal
          as="article"
          aria-label="Resume of Muthu Renuga"
          className="rounded-[28px] border border-line bg-card px-6 py-10 shadow-lift sm:px-12 sm:py-14"
        >
          <header className="text-center">
            <h1 className="text-[2rem] font-extrabold tracking-[-0.03em] sm:text-[2.5rem]">{resume.name}</h1>
            <p className="mt-1 font-display text-[16px] font-medium text-ink-soft">{resume.headline}</p>
            <p className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[13.5px] text-muted">
              {resume.contact.map((c) => (
                <span key={c.label}>{c.href ? <ExtLink href={c.href}>{c.label}</ExtLink> : c.label}</span>
              ))}
            </p>
          </header>

          <section className="mt-10">
            <Heading>Professional Summary</Heading>
            <p className="text-[14.5px] leading-relaxed text-ink-soft">{resume.summary}</p>
          </section>

          <section className="mt-9">
            <Heading>Technical Skills</Heading>
            <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[190px_1fr]">
              {resume.skills.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-[14px] font-semibold text-ink">{k}</dt>
                  <dd className="mb-2 text-[14.5px] text-ink-soft sm:mb-0">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-9">
            <Heading>Internship Experience</Heading>
            {resume.experience.map((job) => (
              <div key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[16px] font-semibold text-ink">{job.role}</h3>
                  <span className="text-[13.5px] font-medium text-muted">{job.period}</span>
                </div>
                <p className="text-[14px] text-muted">{job.org}</p>
                <Bullets items={job.points} />
              </div>
            ))}
          </section>

          <section className="mt-9">
            <Heading>Projects</Heading>
            <div className="space-y-6">
              {resume.projects.map((p) => (
                <div key={p.title}>
                  <h3 className="text-[15.5px] font-semibold leading-snug text-ink">
                    {p.title} <span className="font-normal text-muted">| {p.tech}</span>
                  </h3>
                  <Bullets items={p.points} />
                  {p.links.length > 0 && (
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 pl-4 text-[13.5px] text-muted">
                      {p.links.map((l) => (
                        <ExtLink key={l.href} href={l.href}>{l.label}</ExtLink>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-9">
            <Heading>Education</Heading>
            <div className="space-y-4">
              {resume.education.map((e) => (
                <div key={e.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[15.5px] font-semibold text-ink">{e.degree}</h3>
                    <span className="text-[13.5px] font-medium text-muted">{e.period}</span>
                  </div>
                  <p className="text-[14px] text-muted">{e.school}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-9">
            <Heading>Additional</Heading>
            <Bullets items={resume.additional} />
          </section>
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Link
            to="/#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-white shadow-[0_8px_20px_-10px_rgb(30_30_30/0.5)] transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            <Mail size={16} aria-hidden="true" />
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
