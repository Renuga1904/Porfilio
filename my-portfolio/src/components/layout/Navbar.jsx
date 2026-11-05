import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navLinks, profile } from '../../data/portfolio'
import useActiveSection from '../../hooks/useActiveSection'
import useScrolled from '../../hooks/useScrolled'
import Button from '../ui/Button'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const onHome = useLocation().pathname === '/'
  const sectionInView = useActiveSection(ids)
  // Section links point back to the home page when viewing /resume
  const base = onHome ? '' : import.meta.env.BASE_URL
  const active = onHome ? sectionInView : null
  const scrolled = useScrolled(16)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`container-page max-w-[1140px] px-0 rounded-2xl border transition-all duration-500 ease-premium ${
          scrolled || open
            ? 'glass border-line shadow-soft'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-4 pr-2 sm:h-16 sm:pl-5 sm:pr-3">
          <a href={`${base}#home`} className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-[13px] font-bold tracking-tight text-white transition-transform duration-300 group-hover:rotate-[-6deg]">
              MR
            </span>
            <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`${base}#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-card shadow-[0_1px_2px_rgb(30_30_30/0.06),0_0_0_1px_rgb(30_30_30/0.05)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button to={profile.resumePath} size="sm" className="hidden sm:inline-flex">
              <FileText size={15} aria-hidden="true" />
              Resume
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-xl text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="space-y-1 border-t border-line px-3 pb-4 pt-3">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <a
                      href={`${base}#${link.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === link.id ? 'true' : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium transition-colors ${
                        active === link.id ? 'bg-card text-ink shadow-soft' : 'text-muted hover:bg-surface hover:text-ink'
                      }`}
                    >
                      {link.label}
                      {active === link.id && <span className="h-1.5 w-1.5 rounded-full bg-sand-deep" aria-hidden="true" />}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <Button to={profile.resumePath} onClick={() => setOpen(false)} className="w-full" size="lg">
                    <FileText size={16} aria-hidden="true" />
                    View Resume
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
