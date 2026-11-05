import { ArrowUp, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import LinkedInIcon from '../ui/LinkedInIcon'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedInIcon size={16} /> },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <Mail size={16} aria-hidden="true" /> },
  ]

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-display text-[13px] font-bold text-white">
            MR
          </span>
          <div>
            <p className="font-display text-[15px] font-semibold">{profile.name}</p>
            <p className="text-[14px] text-muted">{profile.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-ink hover:shadow-soft"
            >
              {s.icon}
            </a>
          ))}
          <a
            href="#main"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-surface text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-ink"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container-page pb-8">
        <p className="border-t border-line pt-6 text-[13px] text-muted">
          © {year} {profile.name}. Designed &amp; built with React, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  )
}
