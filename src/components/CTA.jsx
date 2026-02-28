import { motion } from 'framer-motion'
import { cta, HOTMART_URL } from '../data/copy'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function CTA({ variant = 'default' }) {
  const isFinal = variant === 'final'

  return (
    <section
      className={`relative overflow-hidden bg-transparent ${isFinal ? 'pt-8 pb-24 md:pt-12 md:pb-32' : 'py-20 md:py-24'}`}
      id={isFinal ? 'cta-final' : 'cta'}
    >
      {/* Premium Glow Effect - Reduced size to prevent muddy overlap */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto glass-card p-10 sm:p-14 border-primary/20 shadow-[0_0_50px_rgba(212,175,55,0.05)]"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {cta.title}
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            {cta.subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href={HOTMART_URL}
              className="btn-primary group flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-5 w-full sm:w-auto shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="relative z-10 font-bold tracking-widest">{cta.button}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-2 text-text-secondary/70 text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-primary-light" />
            <span>Pagamento 100% seguro via Hotmart</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
