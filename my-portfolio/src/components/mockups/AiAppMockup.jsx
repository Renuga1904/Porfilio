import { ArrowUp, Sparkles } from 'lucide-react'
import BrowserFrame from './BrowserFrame'

export default function AiAppMockup() {
  return (
    <div className="px-4 pb-8 pt-6 sm:px-8 sm:pt-8">
      <BrowserFrame url="AI Web App · Preview">
        <div className="space-y-3 bg-canvas p-4 sm:p-5">
          <div className="ml-auto w-fit max-w-[75%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-[11px] text-white">
            Summarise today&apos;s activity and suggest next steps.
          </div>
          <div className="flex max-w-[85%] gap-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sand-soft text-sand-deep">
              <Sparkles size={12} aria-hidden="true" />
            </span>
            <div className="rounded-2xl rounded-tl-md border border-line bg-card px-3 py-2.5">
              <div className="space-y-1.5">
                <span className="block h-1.5 w-[92%] rounded-full bg-line-strong" />
                <span className="block h-1.5 w-[80%] rounded-full bg-line-strong" />
                <span className="block h-1.5 w-[60%] rounded-full bg-line-strong" />
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {['Automate report', 'Draft reply', 'Set reminder'].map((t) => (
                  <span key={t} className="rounded-full bg-sage-soft px-2 py-0.5 text-[9px] font-semibold text-sage-deep">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line bg-card py-1.5 pl-4 pr-1.5">
            <span className="flex-1 text-[10.5px] text-muted">Ask anything…</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white">
              <ArrowUp size={12} aria-hidden="true" />
            </span>
          </div>
        </div>
      </BrowserFrame>
    </div>
  )
}
