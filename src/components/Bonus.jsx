import { motion } from 'framer-motion'
import { bonus } from '../data/copy'
import { Gift } from 'lucide-react'
import { fadeUp, staggerDelay, viewport, willChange } from '../animations'

export default function Bonus() {
    return (
        <section className="py-24 md:py-32 bg-transparent relative" id="bonus">
            <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={fadeUp}
                    style={willChange}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest text-sm font-bold mb-6">
                        <Gift className="w-4 h-4" /> Bônus Exclusivos
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                        {bonus.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {bonus.items.map((b, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            variants={fadeUp}
                            transition={{ delay: staggerDelay(i), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={willChange}
                        >
                            {/* Hover on plain div — keeps motion.div pure for entry animation */}
                            <div className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden hover:border-primary/50 transition-colors bg-surface-lighter/30 h-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark" />

                                <h3 className="text-xl font-bold text-white mb-4 mt-2">{b.title}</h3>
                                <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                                    {b.description}
                                </p>

                                <div className="mt-auto flex flex-col border-t border-white/10 w-full pt-4">
                                    <span className="text-xs uppercase tracking-widest text-text-secondary/60 line-through mb-1">
                                        Vendido por {b.value}
                                    </span>
                                    <span className="text-primary font-bold tracking-widest uppercase">Hoje: Grátis</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
