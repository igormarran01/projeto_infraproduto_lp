import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'h-20 bg-background/90 backdrop-blur-md border-white/10 shadow-lg'
        : 'h-24 bg-background/0 border-transparent'
        }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
        <a href="#hero" className="flex items-center gap-3 group" aria-label="A Jornada - início">
          <span className="font-serif font-bold text-3xl tracking-wide text-white">
            A Jornada
          </span>
        </a>
      </div>
    </header>
  )
}
