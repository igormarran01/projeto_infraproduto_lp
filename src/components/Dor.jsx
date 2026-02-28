import { motion } from 'framer-motion'
import { dor } from '../data/copy'
import { XCircle } from 'lucide-react'
import { fadeUp, staggerDelay, viewport, willChange } from '../animations'

export default function Dor() {
  return (
    <section className="py-20 md:py-section bg-transparent relative overflow-hidden" id="dor">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-surface-lighter/10 to-transparent pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          style={willChange}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {dor.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dor.points.map((point, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              transition={{ delay: staggerDelay(i), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={willChange}
            >
              {/* Hover styles on plain div — no conflict with Framer Motion entry */}
              <div className="glass-card p-8 hover:border-primary/30 transition-colors group flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-full bg-surface-lighter flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5 shadow-inner">
                  <XCircle className="w-7 h-7 text-text-secondary group-hover:text-primary-light transition-colors" />
                </div>
                <p className="text-text-secondary leading-relaxed font-medium">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
