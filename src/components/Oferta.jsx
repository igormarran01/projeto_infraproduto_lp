import { motion } from 'framer-motion'
import { oferta, HOTMART_URL } from '../data/copy'
import { Check, ShieldCheck, ArrowRight } from 'lucide-react'
import { scaleIn, slideLeft, staggerDelay, viewport, willChange } from '../animations'

export default function Oferta() {
    return (
        <section className="py-24 md:py-32 bg-transparent relative overflow-hidden" id="oferta">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={scaleIn}
                    style={willChange}
                    className="glass-card p-10 md:p-16 border-2 border-primary/30 shadow-[0_0_80px_rgba(212,175,55,0.1)] bg-background/80"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase mb-4">
                            Acesso Liberado
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                            {oferta.title}
                        </h3>
                    </div>

                    <div className="space-y-6 mb-12">
                        {oferta.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewport}
                                variants={slideLeft}
                                transition={{ delay: staggerDelay(i, 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={willChange}
                                className="flex items-start gap-4"
                            >
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-lg text-white/90 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col items-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full"
                        >
                            <a
                                href={HOTMART_URL}
                                className="btn-primary w-full flex items-center justify-center gap-3 text-lg sm:text-xl px-4 py-6 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)]"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <span className="relative z-10 font-bold tracking-widest uppercase">{oferta.button}</span>
                                <ArrowRight className="relative z-10 w-6 h-6 animate-pulse" />
                            </a>
                        </motion.div>

                        <div className="mt-8 flex items-center gap-2 justify-center text-text-secondary">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            <span className="font-medium">{oferta.guarantee}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
