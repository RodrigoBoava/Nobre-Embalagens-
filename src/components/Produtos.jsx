import { produtos } from '../data/produtos'
import Carrossel from './Carrossel'

function Produtos() {
  const caixas = produtos.filter((p) => p.categoria === 'caixas')
  const insumos = produtos.filter((p) => p.categoria === 'insumos')

  return (
    <section id="produtos" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nossos produtos</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Conheça nossas embalagens e insumos, com medidas e valores.
        </p>
      </div>

      <div className="mt-10 sm:mt-12">
        <Carrossel titulo="Caixas de papel" produtos={caixas} />
        <Carrossel titulo="Insumos para pizza" produtos={insumos} />
      </div>
    </section>
  )
}

export default Produtos