import { useRef, useState } from 'react'
import { linkWhatsapp } from '../data/contato'

function IconeSeta({ direcao }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d={direcao === 'esquerda' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  )
}

const estiloSeta =
  'absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow transition hover:bg-indigo-600 hover:text-white'

function ProdutoCard({ produto }) {
  const [fotoAtual, setFotoAtual] = useState(0)
  const toqueX = useRef(null)

  // Aceita tanto "imagens: [...]" quanto o antigo "imagem: '...'"
  const fotos = produto.imagens ?? (produto.imagem ? [produto.imagem] : [])
  const temVariasFotos = fotos.length > 1

  const proxima = () => setFotoAtual((fotoAtual + 1) % fotos.length)
  const anterior = () => setFotoAtual((fotoAtual - 1 + fotos.length) % fotos.length)

  // Deslizar sobre a foto troca a foto, sem mexer no carrossel de fora
  const aoTocar = (e) => {
    if (!temVariasFotos) return
    e.stopPropagation()
    toqueX.current = e.touches[0].clientX
  }

  const aoSoltar = (e) => {
    if (!temVariasFotos || toqueX.current === null) return
    e.stopPropagation()
    const diferenca = toqueX.current - e.changedTouches[0].clientX
    toqueX.current = null
    if (Math.abs(diferenca) < 40) return
    if (diferenca > 0) proxima()
    else anterior()
  }

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div
        className="relative aspect-4/3 touch-pan-y overflow-hidden bg-white"
        onTouchStart={aoTocar}
        onTouchEnd={aoSoltar}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${fotoAtual * 100}%)` }}
        >
          {fotos.map((foto, i) => (
            <img
              key={foto}
              src={foto}
              alt={`${produto.nome} - foto ${i + 1}`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full shrink-0 object-contain p-4"
            />
          ))}
        </div>

        {temVariasFotos && (
          <>
            <button onClick={anterior} aria-label="Foto anterior" className={`${estiloSeta} left-2`}>
              <IconeSeta direcao="esquerda" />
            </button>
            <button onClick={proxima} aria-label="Próxima foto" className={`${estiloSeta} right-2`}>
              <IconeSeta direcao="direita" />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {fotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFotoAtual(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === fotoAtual ? 'w-5 bg-indigo-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </>
        )}
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

        <a
          href={linkWhatsapp(`Olá! Gostaria de um orçamento: ${produto.nome}.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Pedir orçamento
        </a>
      </div>
    </article>
  )
}

export default ProdutoCard