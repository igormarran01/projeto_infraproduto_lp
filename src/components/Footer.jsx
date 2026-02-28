import { footer, HOTMART_URL } from '../data/copy'

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 py-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-md flex items-center justify-center">
                <img
                  src="/logo/image.png"
                  alt=""
                  className="absolute inset-0 w-[120%] h-[120%] max-w-none -ml-[10%] -mt-[10%] object-cover object-center pointer-events-none invert mix-blend-screen opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-serif font-bold text-2xl text-white">{footer.brand}</span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs text-center md:text-left">
              Método focado para universitários e estagiários otimizarem tempo e garantirem a aprovação na OAB.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <a
              href={HOTMART_URL}
              className="btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              {footer.cta}
            </a>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <a href="#termos" className="hover:text-primary-light transition-colors">Termos de Uso</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#privacidade" className="hover:text-primary-light transition-colors">Políticas de Privacidade</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-secondary/60">
          <p>{footer.copyright}</p>
          <p>Resultados podem variar de pessoa para pessoa.</p>
        </div>
      </div>
    </footer>
  )
}
