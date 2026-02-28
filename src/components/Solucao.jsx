import { motion } from 'framer-motion'
import { transformacao, solucao } from '../data/copy'
import { BookOpen, Target, Award } from 'lucide-react'
import { fadeUp, scaleIn, staggerDelay, viewport, willChange } from '../animations'

const icons = [BookOpen, Target, Award]

export default function Solucao() {
  return (
    <section className="py-20 md:py-section bg-transparent relative overflow-hidden" id="solucao">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
          style={willChange}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wider uppercase mb-6">
            O Método
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white max-w-3xl mx-auto leading-snug">
            {transformacao}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {solucao.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ delay: staggerDelay(i), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={willChange}
              >
                {/* Hover handled in a plain div — no conflict with Framer Motion entry */}
                <article className="glass-card p-8 sm:p-10 group hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/5 flex items-center justify-center mb-8 border border-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                    <Icon className="w-8 h-8 text-primary-light" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {item.benefit}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{item.feature}</p>
                </article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
