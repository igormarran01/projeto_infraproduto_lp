import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '../data/copy'
import { Plus, Minus } from 'lucide-react'
import {
  fadeUp,
  staggerDelay,
  viewport,
  willChange,
  accordionVariants,
  accordionTransition,
} from '../animations'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 md:py-32 bg-transparent" id="faq">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          style={willChange}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ delay: staggerDelay(i), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={willChange}
                className={`border rounded-card bg-surface shadow-sm ${isOpen
                    ? 'border-primary/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                    : 'border-white/10'
                  }`}
              >
                {/* Hover state lives on its own inner div — no conflict with motion entry */}
                <div className={`transition-colors duration-300 rounded-card ${!isOpen ? 'hover:border-white/30' : ''}`}>
                  <button
                    type="button"
                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex items-center justify-between gap-4 font-semibold text-white/90 hover:text-white transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="text-lg pr-4">{item.question}</span>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen
                          ? 'bg-primary text-background'
                          : 'bg-surface-lighter text-primary-light border border-white/5'
                        }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={accordionVariants}
                        transition={accordionTransition}
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
