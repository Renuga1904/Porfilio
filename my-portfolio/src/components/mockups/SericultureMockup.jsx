import { BookOpen, FileText, Users } from 'lucide-react'
import BrowserFrame from './BrowserFrame'

const cards = [
  { icon: FileText, title: 'Schemes', text: 'Subsidies & support' },
  { icon: Users, title: 'Farmer Services', text: 'Apply & track' },
  { icon: BookOpen, title: 'Training', text: 'Programs & dates' },
]

export default function SericultureMockup() {
  return (
    <div className="px-4 pb-8 pt-6 sm:px-8 sm:pt-8">
      <BrowserFrame url="Sericulture · Govt. of Tamil Nadu">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-sage-soft">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-sage-deep" />
            </span>
            <div className="leading-tight">
              <p className="text-[9.5px] font-bold text-ink">Department of Sericulture</p>
              <p className="text-[8px] text-muted">Government of Tamil Nadu</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 text-[9px] font-medium text-muted sm:flex">
            <span className="text-ink">Home</span><span>Schemes</span><span>Services</span><span>Training</span>
          </div>
          <div className="flex overflow-hidden rounded-full border border-line text-[9px] font-semibold">
            <span className="bg-ink px-2 py-0.5 text-white">EN</span>
            <span className="px-2 py-0.5 text-ink-soft">தமிழ்</span>
          </div>
        </div>

        {/* hero banner */}
        <div className="relative overflow-hidden bg-sage-soft px-5 py-6 sm:py-8">
          <div aria-hidden="true" className="absolute -right-6 -top-10 h-36 w-36 rounded-full border-[14px] border-sage/50" />
          <div aria-hidden="true" className="absolute bottom-[-30px] right-16 h-20 w-20 rounded-full bg-sand/40" />
          <p className="relative text-[9px] font-semibold uppercase tracking-wider text-sage-deep">Silk for prosperity</p>
          <p className="relative mt-1 max-w-[70%] font-display text-[15px] font-bold leading-tight text-ink sm:text-[17px]">
            Empowering sericulture farmers across Tamil Nadu
          </p>
          <div className="relative mt-3 flex gap-2">
            <span className="rounded-full bg-ink px-3 py-1 text-[9px] font-semibold text-white">Explore schemes</span>
            <span className="rounded-full bg-card px-3 py-1 text-[9px] font-semibold text-ink">Farmer services</span>
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-line bg-card p-2.5 sm:p-3">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-sand-soft text-sand-deep">
                <Icon size={12} aria-hidden="true" />
              </span>
              <p className="mt-2 text-[10px] font-semibold text-ink">{title}</p>
              <p className="text-[8.5px] text-muted">{text}</p>
            </div>
          ))}
        </div>

        {/* updates list */}
        <div className="mx-3 mb-3 rounded-xl bg-canvas p-3 sm:mx-4 sm:mb-4">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-muted">Latest updates</p>
          {[78, 62, 70].map((w, i) => (
            <div key={i} className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
              <span className="h-1.5 rounded-full bg-line-strong" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </BrowserFrame>
    </div>
  )
}
