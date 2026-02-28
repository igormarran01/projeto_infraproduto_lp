import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Artificial 1.5-second minimum loading duration for smooth UX
        const DURATION = 1500;
        const interval = 30; // ms
        const increments = DURATION / interval;

        let currentProgress = 0;

        const timer = setInterval(() => {
            currentProgress += (100 / increments);
            if (currentProgress >= 100) {
                clearInterval(timer);
                setProgress(100);
                setTimeout(() => {
                    onComplete();
                }, 300); // 300ms pause at 100% just for feel
            } else {
                setProgress(currentProgress);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-12 w-full max-w-sm"
                >
                    {/* Logo animada */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        <img
                            src={`${import.meta.env.BASE_URL}logo/image.png`}
                            alt="A Jornada"
                            className="absolute inset-0 w-[120%] h-[120%] max-w-none -ml-[10%] -mt-[10%] object-cover object-center invert mix-blend-screen opacity-90"
                        />
                    </div>

                    {/* Barra de Progresso */}
                    <div className="w-full space-y-3">
                        <div className="flex justify-between text-xs font-semibold tracking-widest text-primary-light uppercase">
                            <span>Carregando a jornada...</span>
                            <span>{Math.round(progress)}%</span>
                        </div>

                        <div className="h-1.5 w-full bg-surface-lighter rounded-full overflow-hidden border border-white/5 relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-light via-primary to-primary-dark"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
