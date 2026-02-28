import { motion } from 'framer-motion'
import { hero, HOTMART_URL } from '../data/copy'
import { ChevronRight } from 'lucide-react'

const HERO_IMAGE = '/hero_img/montanha.jpg'

function HeadlineWithHighlight() {
  const { headline, headlineHighlight } = hero
  const idx = headlineHighlight ? headline.indexOf(headlineHighlight) : -1
  if (idx === -1) {
    return (
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
        {headline}
      </h1>
    )
  }
  const before = headline.slice(0, idx)
  const highlight = headline.slice(idx, idx + headlineHighlight.length)
  const after = headline.slice(idx + headlineHighlight.length)
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
      {before}
      <br className="hidden sm:block" />
      <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-primary to-primary-dark">{highlight}</span>
      {after}
    </h1>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const ctaEntrance = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 } },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background"
      id="hero"
    >
      {/* Background Graphic Element - subtle radial gradient */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
      </div>

      {/* Se houver imagem de fundo, aplique com blend mode */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-luminosity" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 w-full max-w-content mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <HeadlineWithHighlight />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6 mb-16"
            initial="hidden"
            animate="visible"
            variants={ctaEntrance}
          >
            <a
              href={HOTMART_URL}
              className="btn-primary group w-full sm:w-auto text-sm sm:text-lg px-6 sm:px-12 py-4 sm:py-5"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="relative z-10 flex items-center gap-2">
                {hero.cta}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <p className="text-sm font-medium text-text-secondary/70 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-primary" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {hero.trustBadge}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Removed absolute positioning to prevent overlap */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-2 opacity-50 text-text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Descubra</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}
