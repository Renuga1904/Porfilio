import { motion } from 'framer-motion'
import { ArrowRight, FileText, Layers, MapPin, Plug, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'
import Button from '../components/ui/Button'

const EASE = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
})

const badgeIcons = [Sparkles, Layers, Plug]
// Positions relative to the profile card; badges sit on its edges, never over content.
const badgePositions = ['-top-5 -left-8', '-top-5 -right-6', '-bottom-5 -right-8']

function Badge({ label, index, floating }) {
  const Icon = badgeIcons[index]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={floating ? { opacity: 1, y: [0, -6, 0] } : { opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.6, delay: 0.7 + index * 0.15 },
        y: floating
          ? { duration: 5 + index, repeat: Infinity, ease: 'easeInOut', delay: 1 + index * 0.4 }
          : { duration: 0.6, delay: 0.7 + index * 0.15 },
      }}
      className={`${floating ? `absolute ${badgePositions[index]}` : ''} glass flex items-center gap-2 rounded-full border border-line px-3.5 py-2 shadow-soft`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-full ${
          index === 1 ? 'bg-sage-soft text-sage-deep' : 'bg-sand-soft text-sand-deep'
        }`}
      >
        <Icon size={13} aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap text-[13px] font-semibold text-ink">{label}</span>
    </motion.div>
  )
}

function ProfileVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] py-6 sm:px-6 sm:py-12">
      {/* soft abstract shapes */}
      <div aria-hidden="true" className="absolute -right-2 top-0 h-[62%] w-[70%] rounded-full bg-sand-soft" />
      <div aria-hidden="true" className="absolute bottom-0 -left-2 h-[44%] w-[50%] rounded-full bg-sage-soft" />
      <div aria-hidden="true" className="absolute bottom-[6%] right-[8%] h-3 w-3 rounded-full bg-sand" />

      <div className="relative">
      {/* profile card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        className="rounded-[28px] border border-line bg-card/90 p-5 shadow-lift backdrop-blur sm:p-6"
      >
        <div className="flex items-center gap-4">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              width="64"
              height="64"
              className="h-16 w-16 rounded-2xl object-cover"
            />
          ) : (
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-ink font-display text-xl font-bold text-white">
              MR
            </div>
          )}
          <div className="min-w-0">
            <p className="font-display text-[17px] font-semibold leading-tight">{profile.name}</p>
            <p className="mt-0.5 text-[13px] text-muted">{profile.role}</p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 text-[11px] font-semibold text-sage-deep">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-deep/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-deep" />
            </span>
            Available
          </span>
        </div>

        {/* code snippet */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-canvas">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-2 text-[11px] font-medium text-muted">developer.js</span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-[1.75] text-ink-soft sm:text-[12.5px]">
            <code>
              <span className="text-sage-deep">const</span> developer = {'{\n'}
              {'  '}name: <span className="text-sand-deep">'Muthu Renuga'</span>,{'\n'}
              {'  '}stack: [<span className="text-sand-deep">'React'</span>, <span className="text-sand-deep">'JS'</span>, <span className="text-sand-deep">'REST'</span>],{'\n'}
              {'  '}focus: <span className="text-sand-deep">'pixel-perfect UI'</span>,{'\n'}
              {'  '}ships: <span className="text-sage-deep">true</span>,{'\n'}
              {'}'}
            </code>
          </pre>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            ['Web', 'React apps'],
            ['Mobile', 'Play Store'],
            ['Design', 'Figma → UI'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-surface px-2 py-2.5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted">{k}</p>
              <p className="mt-0.5 text-[12.5px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
      </motion.div>

        {/* floating badges (tablet & desktop) — rendered after the card so they layer above it */}
        <div className="hidden sm:block">
          {profile.heroBadges.map((label, i) => (
            <Badge key={label} label={label} index={i} floating />
          ))}
        </div>
      </div>

      {/* badges as a row on phones */}
      <ul className="relative mt-5 flex flex-wrap justify-center gap-2 sm:hidden">
        {profile.heroBadges.map((label, i) => (
          <li key={label}>
            <Badge label={label} index={i} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />

      <div className="container-page relative grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-[13px] font-medium text-ink-soft shadow-soft"
          >
            <MapPin size={14} className="text-sand-deep" aria-hidden="true" />
            {profile.location}
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]"
          >
            Hi, I&apos;m{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">{profile.name}</span>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
                className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.26em] origin-left rounded-full bg-sand/70"
              />
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl font-display text-[1.3rem] font-medium leading-snug text-ink-soft sm:text-[1.5rem]"
          >
            {profile.tagline}
          </motion.p>

          <motion.p {...fadeUp(0.24)} className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-muted">
            {profile.description}
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button to={profile.resumePath} variant="secondary" size="lg">
              <FileText size={16} aria-hidden="true" />
              View Resume
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact Me
            </Button>
          </motion.div>

          <motion.dl {...fadeUp(0.4)} className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
            {[
              ['Focus', 'React.js · JavaScript'],
              ['Strength', 'Figma to pixel-perfect UI'],
              ['Shipped', 'Web + Android'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt>
                <dd className="mt-1 text-[15px] font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <ProfileVisual />
      </div>
    </section>
  )
}
