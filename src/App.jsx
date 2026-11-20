import Header from './components/Header'
import Hero from './components/Hero'
import Produtos from './components/Produtos'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Produtos />
      </main>
      <Footer />
    </div>
  )
}

export default App