const tones = {
  neutral: 'bg-surface text-ink-soft border-line',
  sand: 'bg-sand-soft text-sand-deep border-sand/50',
  sage: 'bg-sage-soft text-sage-deep border-sage/60',
  white: 'bg-card text-ink-soft border-line',
}

export default function Chip({ tone = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
