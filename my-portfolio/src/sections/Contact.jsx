import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CircleCheck, LoaderCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Button from '../components/ui/Button'
import LinkedInIcon from '../components/ui/LinkedInIcon'
import Reveal from '../components/ui/Reveal'

const contactRows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={18} aria-hidden="true" /> },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: <Phone size={18} aria-hidden="true" /> },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, icon: <LinkedInIcon size={17} /> },
  { label: 'Location', value: profile.location, icon: <MapPin size={18} aria-hidden="true" /> },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Form-to-email relay (web3forms.com): messages are delivered to the inbox the
// access key was created for. The key is public by design; set it in .env as VITE_WEB3FORMS_KEY.
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

function Field({ id, label, error, as = 'input', ...rest }) {
  const Tag = as
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13.5px] font-medium text-ink">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-2xl border bg-canvas px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-all duration-300 focus:bg-card focus:outline-none focus:ring-4 ${
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
            : 'border-line focus:border-sand focus:ring-sand-soft'
        } ${as === 'textarea' ? 'min-h-[140px] resize-y' : 'h-12'}`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [honey, setHoney] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  // Fallback: the visitor's own email app, pre-filled with what they typed.
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${values.name.trim()}`,
  )}&body=${encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)}`

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Please write a message of at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Bots fill the hidden field; pretend success without sending.
    if (honey) {
      setStatus('sent')
      return
    }

    if (!ACCESS_KEY) {
      console.error('Contact form: VITE_WEB3FORMS_KEY is not set (see README).')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      // FormData (not JSON) keeps this a "simple" CORS request with no preflight,
      // which Web3Forms rejects.
      const body = new FormData()
      body.append('access_key', ACCESS_KEY)
      body.append('subject', `Portfolio message from ${values.name.trim()}`)
      body.append('from_name', 'Muthu Renuga Portfolio')
      body.append('name', values.name.trim())
      body.append('email', values.email.trim())
      body.append('message', values.message.trim())

      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success !== true) throw new Error(data.message || `HTTP ${res.status}`)
      setStatus('sent')
      setValues({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="overflow-hidden rounded-[36px] border border-line bg-card shadow-lift">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Info */}
            <div className="relative border-b border-line p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div aria-hidden="true" className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-sand-soft" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-sand-deep">
                  <span aria-hidden="true" className="h-px w-6 bg-sand" />
                  Contact
                </p>
                <h2 id="contact-title" className="mt-4 text-[2rem] font-bold leading-[1.1] sm:text-[2.5rem]">
                  Let&apos;s build something great together.
                </h2>
                <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted">
                  Open to frontend developer roles and collaborations. I usually reply within a day.
                </p>

                <ul className="mt-9 space-y-3">
                  {contactRows.map((row) => {
                    const inner = (
                      <>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface text-ink transition-colors duration-300 group-hover:bg-sand-soft group-hover:text-sand-deep">
                          {row.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">{row.label}</span>
                          <span className="block truncate text-[15px] font-medium text-ink">{row.value}</span>
                        </span>
                        {row.href && (
                          <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                            className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                          />
                        )}
                      </>
                    )
                    const cls = 'group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300'
                    return (
                      <li key={row.label}>
                        {row.href ? (
                          <a
                            href={row.href}
                            {...(row.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className={`${cls} hover:border-line hover:bg-canvas`}
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className={cls}>{inner}</div>
                        )}
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href={`mailto:${profile.email}`}>
                    <Mail size={16} aria-hidden="true" />
                    Send Email
                  </Button>
                  <Button href={profile.linkedin} variant="secondary">
                    <LinkedInIcon size={15} />
                    Connect LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-7 sm:p-10 lg:p-12">
              <h3 className="text-[1.35rem] font-semibold">Send a message</h3>
              <p className="mt-1.5 text-[14.5px] text-muted">Share a role, a project, or just say hello.</p>

              <form noValidate onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" placeholder="Your name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
                  <Field id="email" label="Email" type="email" placeholder="you@company.com" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
                </div>
                <Field id="message" as="textarea" label="Message" placeholder="Tell me about the opportunity…" value={values.message} onChange={onChange} error={errors.message} />

                {/* honeypot: hidden from people, filled by spam bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
                </div>

                <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p aria-live="polite" className="min-h-[1.25rem] text-[13.5px]">
                    {status === 'sent' && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-1.5 font-medium text-sage-deep"
                      >
                        <CircleCheck size={15} aria-hidden="true" />
                        Thank you! Your message has been sent.
                      </motion.span>
                    )}
                    {status === 'error' && (
                      <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="font-medium text-red-600">
                        Couldn&apos;t send automatically.{' '}
                        <a href={mailtoHref} className="underline underline-offset-2">
                          Send it from your email app instead
                        </a>
                        .
                      </motion.span>
                    )}
                  </p>
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
