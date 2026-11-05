import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium text-[15px] leading-none whitespace-nowrap select-none transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none'

const sizes = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6',
  sm: 'h-9 px-4 text-sm',
}

const variants = {
  primary: 'bg-ink text-white hover:bg-ink-soft shadow-[0_8px_20px_-10px_rgb(30_30_30/0.5)]',
  secondary: 'bg-card text-ink border border-line hover:border-line-strong shadow-soft',
  accent: 'bg-sand-soft text-ink border border-sand/60 hover:bg-sand/40',
  ghost: 'text-ink hover:bg-surface',
}

/**
 * Renders a router <Link> for `to`, an <a> for `href`, otherwise a <button>.
 * External links automatically open in a new tab.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  children,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 28 },
  }

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...rest}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href)
    return (
      <motion.a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...rest}>
      {children}
    </motion.button>
  )
}
