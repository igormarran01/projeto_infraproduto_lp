import { motion } from 'framer-motion'
import { modulos } from '../data/copy'
import { BookOpen } from 'lucide-react'
import { fadeUp, staggerDelay, viewport, willChange } from '../animations'

export default function Modulos() {
    return (
        <section className="py-24 md:py-32 bg-transparent relative" id="modulos">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
                        {modulos.title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {modulos.items.map((mod, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                            variants={fadeUp}
                            transition={{ delay: staggerDelay(i, 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={willChange}
                        >
                            {/* Hover on plain div — no conflict with entry motion */}
                            <div className="glass-card p-8 sm:p-10 flex flex-col gap-6 hover:border-primary/30 transition-colors group bg-gradient-to-br from-surface/80 to-surface-lighter/10 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-surface-lighter flex items-center justify-center border border-white/5 group-hover:bg-primary/10 transition-colors shadow-inner">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{mod.title}</h3>
                                    <p className="text-text-secondary leading-relaxed">{mod.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
