import { Clock } from 'lucide-react'
import BrowserFrame from './BrowserFrame'

const options = ['Thiruvalluvar', 'Kambar', 'Ilango Adigal', 'Avvaiyar']
const answered = new Set([1, 2, 3, 4, 5, 6, 8, 9])

export default function ExamMateMockup() {
  return (
    <div className="relative px-4 pb-10 pt-6 sm:px-8 sm:pt-8">
      <BrowserFrame url="theexammate.com/test">
        <div className="flex">
          {/* Question palette */}
          <aside className="hidden w-[30%] border-r border-line bg-canvas p-4 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Questions</p>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <span
                  key={n}
                  className={`grid aspect-square place-items-center rounded-md text-[9px] font-semibold ${
                    n === 7
                      ? 'bg-ink text-white'
                      : answered.has(n)
                        ? 'bg-sage-soft text-sage-deep'
                        : 'border border-line bg-card text-muted'
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 text-[9px] text-muted">
              <p className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-sage-soft" />Answered</p>
              <p className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm border border-line" />Not visited</p>
            </div>
          </aside>

          {/* Question */}
          <div className="flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-medium text-muted">TNPSC Group 4 · Mock Test</p>
                <p className="font-display text-[13px] font-bold text-ink">Question 7 of 20</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-sand-soft px-2.5 py-1 text-[10px] font-semibold text-sand-deep">
                <Clock size={10} aria-hidden="true" /> 18:42
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface">
              <div className="h-full w-[35%] rounded-full bg-sage" />
            </div>
            <p className="mt-4 text-[12px] font-medium leading-snug text-ink">
              Who is the author of the Tamil classic <em>Thirukkural</em>?
            </p>
            <ul className="mt-3 space-y-1.5">
              {options.map((o, i) => (
                <li
                  key={o}
                  className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] ${
                    i === 0 ? 'border-sage bg-sage-soft font-semibold text-sage-deep' : 'border-line text-ink-soft'
                  }`}
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full text-[8px] font-bold ${
                      i === 0 ? 'bg-sage-deep text-white' : 'bg-surface text-muted'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <span className="rounded-full border border-line px-3 py-1 text-[10px] font-medium text-muted">Previous</span>
              <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold text-white">Save &amp; Next</span>
            </div>
          </div>
        </div>
      </BrowserFrame>

      {/* Android result screen */}
      <div className="absolute bottom-0 right-2 w-[30%] min-w-[120px] max-w-[170px] rounded-[22px] border-[5px] border-ink bg-card p-2.5 shadow-lift sm:right-4">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-line-strong" />
        <p className="text-center text-[9px] font-semibold uppercase tracking-wider text-muted">Result</p>
        <div className="relative mx-auto mt-2 grid h-16 w-16 place-items-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-surface)" strokeWidth="3.5" />
            <circle
              cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-sage-deep)" strokeWidth="3.5"
              strokeDasharray="85 100" pathLength="100" strokeLinecap="round"
            />
          </svg>
          <span className="font-display text-[13px] font-bold text-ink">17/20</span>
        </div>
        <p className="mt-2 text-center text-[10px] font-semibold text-ink">Instant results</p>
        <div className="mt-2 grid grid-cols-2 gap-1 text-center">
          <span className="rounded-md bg-sage-soft py-1 text-[8.5px] font-semibold text-sage-deep">17 correct</span>
          <span className="rounded-md bg-sand-soft py-1 text-[8.5px] font-semibold text-sand-deep">3 review</span>
        </div>
      </div>
    </div>
  )
}
