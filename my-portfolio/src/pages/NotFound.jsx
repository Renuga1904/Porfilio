import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Page not found · Muthu Renuga'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section className="grid min-h-[80vh] place-items-center px-5 pt-24">
      <div className="text-center">
        <p className="font-display text-[5rem] font-extrabold leading-none text-line-strong">404</p>
        <h1 className="mt-4 text-3xl font-bold">This page doesn&apos;t exist.</h1>
        <p className="mt-3 text-muted">The link may be broken or the page may have moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  )
}
