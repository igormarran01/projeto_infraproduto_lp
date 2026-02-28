import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Dor from './components/Dor'
import Solucao from './components/Solucao'
import Modulos from './components/Modulos'
import Prova from './components/Prova'
import Bonus from './components/Bonus'
import Especialista from './components/Especialista'
import Oferta from './components/Oferta'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Container principal - visibilidade da opacidade entra sutilmente se desejado, 
          mas o AnimatePresence do LoadingScreen já lida com a saída. */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Dor />
          <Solucao />
          <Modulos />
          <Prova />
          <Bonus />
          <Especialista />
          <Oferta />
          <FAQ />
          <CTA variant="final" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
