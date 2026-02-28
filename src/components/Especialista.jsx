import { motion } from 'framer-motion'
import { especialista } from '../data/copy'
import { UserCircle } from 'lucide-react'
import { scaleIn, slideRight, viewport, willChange } from '../animations'

export default function Especialista() {
    return (
        <section className="py-24 md:py-32 bg-transparent relative" id="especialista">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="glass-card p-8 md:p-14 lg:p-16 border-t border-t-primary/20 bg-gradient-to-br from-surface/60 to-surface-lighter/10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={scaleIn}
                        style={willChange}
                        className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden bg-surface-lighter border-2 border-primary/20 flex flex-col items-center justify-center relative shadow-2xl"
                    >
                        {especialista.image ? (
                            <img
                                src={especialista.image}
                                alt={especialista.name}
                                className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-text-secondary/50 p-6 text-center">
                                <UserCircle className="w-20 h-20 mb-4 opacity-50 text-primary" />
                                <span className="text-xs font-medium uppercase tracking-widest">Foto do Cliente (PNG/JPG)</span>
                            </div>
                        )}
                        <div className="absolute inset-0 border-[4px] border-primary/20 rounded-2xl pointer-events-none" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={slideRight}
                        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={willChange}
                        className="text-center md:text-left flex-1"
                    >
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                            {especialista.title}
                        </h2>
                        <div className="w-12 h-1 bg-primary mb-6 mx-auto md:mx-0" />

                        <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2 tracking-wide uppercase">
                            {especialista.name}
                        </h3>
                        <p className="text-primary-light uppercase tracking-widest text-sm font-semibold mb-8">
                            {especialista.role}
                        </p>

                        <p className="text-text-secondary text-lg leading-relaxed italic border-l-2 border-white/10 pl-6 text-left">
                            "{especialista.bio}"
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
