import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'

export default function Home() {
  const { hash } = useLocation()

  // Arriving from another page (e.g. /resume → /#contact): scroll to the section once rendered.
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView())
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
