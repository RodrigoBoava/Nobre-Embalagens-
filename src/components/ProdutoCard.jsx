function ProdutoCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div className="aspect-4/3 overflow-hidden bg-white">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="h-full w-full object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
        <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-slate-900">
          {produto.nome}
        </h3>
        <p className="mt-1 line-clamp-3 min-h-[3.75rem] text-sm leading-5 text-slate-600">
          {produto.descricao}
        </p>

        <dl className="mt-4 space-y-1 text-sm">
          {produto.tecnicas.map((item) => (
            <div key={item.label} className="flex justify-between border-b border-slate-100 pb-1">
              <dt className="text-slate-500">{item.label}</dt>
              <dd className="font-medium text-slate-800">{item.valor}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-auto pt-5 text-2xl font-bold text-indigo-600">
          {precoFormatado}
          <span className="text-sm font-normal text-slate-500"> / {produto.unidade}</span>
        </p>
      </div>
    </article>
  )
}

export default ProdutoCard