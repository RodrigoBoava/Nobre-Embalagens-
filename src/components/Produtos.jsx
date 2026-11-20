import { produtos } from '../data/produtos'
import ProdutoCard from './ProdutoCard'

function Produtos() {
  return (
    <section id="produtos" className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">Nossos produtos</h2>
        <p className="mt-2 text-center text-slate-600">
          Conheça nossas embalagens, com medidas e valores.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Produtos