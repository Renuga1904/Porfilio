import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', id }) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-sand-deep">
          <span aria-hidden="true" className="h-px w-6 bg-sand" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-[2rem] font-bold leading-[1.1] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  )
}
