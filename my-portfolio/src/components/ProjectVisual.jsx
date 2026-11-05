import AiAppMockup from './mockups/AiAppMockup'
import ExamMateMockup from './mockups/ExamMateMockup'
import SericultureMockup from './mockups/SericultureMockup'

const mockups = {
  exammate: ExamMateMockup,
  sericulture: SericultureMockup,
  ai: AiAppMockup,
}

const backdrops = {
  exammate: 'bg-sand-soft',
  sericulture: 'bg-sage-soft',
  ai: 'bg-surface',
}

/**
 * Shows a real screenshot when `project.image` is set, otherwise a crafted UI mockup.
 * The inner layer zooms gently when the parent `.group` is hovered.
 */
export default function ProjectVisual({ project, className = '' }) {
  const Mockup = mockups[project.key]
  return (
    <div className={`relative overflow-hidden rounded-[28px] ${backdrops[project.key] ?? 'bg-surface'} ${className}`}>
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-60" />
      <div className="relative h-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            width="1280"
            height="800"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div role="img" aria-label={`${project.title} interface preview`}>
            {Mockup && <Mockup />}
          </div>
        )}
      </div>
    </div>
  )
}
