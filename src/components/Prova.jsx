import { motion } from 'framer-motion'
import { prova } from '../data/copy'
import { Star } from 'lucide-react'
import { fadeUp, scaleIn, staggerDelay, viewport, willChange } from '../animations'

export default function Prova() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative" id="prova">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          style={willChange}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Resultados reais
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
        </motion.div>

        {/* Métricas — bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24 max-w-4xl mx-auto">
          {prova.metrics.map((m, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={scaleIn}
              transition={{ delay: staggerDelay(i, 0.12), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={willChange}
              className={`text-center p-6 sm:p-8 glass-card border-white/5 bg-surface-lighter/20 hover:bg-surface-lighter/40 transition-colors ${i === 2 ? 'col-span-2 md:col-span-1' : ''
                }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-light via-primary to-primary-dark mb-3 drop-shadow-lg">
                {m.value}
              </div>
              <div className="text-text-secondary font-semibold tracking-widest uppercase text-xs sm:text-sm">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prova.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ delay: staggerDelay(i, 0.12), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={willChange}
            >
              <blockquote className="glass-card p-10 relative flex flex-col h-full bg-gradient-to-b from-surface/40 to-transparent hover:border-t-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                      />
                    ))}
                  </div>
                  <div className="text-6xl text-primary/10 font-serif leading-none h-10 overflow-hidden">"</div>
                </div>

                <p className="text-white/95 text-lg mb-10 relative z-10 leading-relaxed font-serif italic flex-grow">
                  "{t.quote}"
                </p>

                <footer className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 shrink-0 bg-gradient-to-br from-surface to-surface-lighter flex items-center justify-center shadow-inner">
                    <span className="font-bold text-primary text-lg">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-white block text-sm">{t.name}</cite>
                    <span className="text-primary-light/80 text-xs block mt-1 tracking-wider uppercase font-medium">
                      {t.role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
