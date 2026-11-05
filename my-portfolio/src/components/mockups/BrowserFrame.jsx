import { Lock } from 'lucide-react'

export default function BrowserFrame({ url, className = '', children }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-card shadow-lift ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded-md bg-surface px-3 py-1 text-[10.5px] font-medium text-muted">
          <Lock size={9} aria-hidden="true" />
          {url}
        </div>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}
