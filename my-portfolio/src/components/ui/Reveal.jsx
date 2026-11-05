import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Fade-up on scroll. Reduced-motion users get opacity only (via MotionConfig). */
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Component>
  )
}
