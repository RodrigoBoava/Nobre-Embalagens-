import { produtos } from '../data/produtos'
import Carrossel from './Carrossel'

function Produtos() {
  const caixas = produtos.filter((p) => p.categoria === 'caixas')
  const insumos = produtos.filter((p) => p.categoria === 'insumos')

  return (
    <section id="produtos" className="px-4 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">Nossos produtos</h2>
        <p className="mt-2 text-slate-600">
          Conheça nossas embalagens, com medidas e valores.
        </p>
      </div>

      <div className="mt-12">
        <Carrossel titulo="Caixas de papel" produtos={caixas} />
        <Carrossel titulo="Insumos para pizza" produtos={insumos} />
      </div>
    </section>
  )
}

export default Produtos