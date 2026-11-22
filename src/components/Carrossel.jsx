import { useEffect, useRef, useState } from 'react'
import ProdutoCard from './ProdutoCard'

function calcularCardsPorTela() {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

function IconeSeta({ direcao }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d={direcao === 'esquerda' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  )
}

// Setas só aparecem a partir de md; no celular o cliente desliza com o dedo
const estiloBotao =
  'absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white md:flex'

function Carrossel({ titulo, subtitulo, produtos }) {
  const [cardsPorTela, setCardsPorTela] = useState(calcularCardsPorTela)
  const [indice, setIndice] = useState(0)
  const toqueX = useRef(null)

  useEffect(() => {
    const aoRedimensionar = () => setCardsPorTela(calcularCardsPorTela())
    window.addEventListener('resize', aoRedimensionar)
    return () => window.removeEventListener('resize', aoRedimensionar)
  }, [])

  if (produtos.length === 0) return null

  const ultimoIndice = Math.max(produtos.length - cardsPorTela, 0)
  const posicao = Math.min(indice, ultimoIndice)
  const precisaDeSetas = produtos.length > cardsPorTela
  const larguraCard = 100 / cardsPorTela

  const avancar = () => setIndice(posicao >= ultimoIndice ? 0 : posicao + 1)
  const voltar = () => setIndice(posicao <= 0 ? ultimoIndice : posicao - 1)

  const aoTocar = (e) => {
    toqueX.current = e.touches[0].clientX
  }

  const aoSoltar = (e) => {
    if (!precisaDeSetas || toqueX.current === null) return
    const diferenca = toqueX.current - e.changedTouches[0].clientX
    toqueX.current = null
    if (Math.abs(diferenca) < 50) return
    if (diferenca > 0) avancar()
    else voltar()
  }

  return (
    <div className="mt-12 first:mt-0 sm:mt-14">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900">{titulo}</h3>
        {subtitulo && <p className="mt-1 text-slate-600">{subtitulo}</p>}
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl sm:mt-8 md:px-14">
        <div
          className="touch-pan-y overflow-hidden"
          onTouchStart={aoTocar}
          onTouchEnd={aoSoltar}
        >
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              precisaDeSetas ? '' : 'justify-center'
            }`}
            style={{ transform: `translateX(-${posicao * larguraCard}%)` }}
          >
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="flex shrink-0 px-1 pb-4 sm:px-3"
                style={{ flex: `0 0 ${larguraCard}%` }}
              >
                <ProdutoCard produto={produto} />
              </div>
            ))}
          </div>
        </div>

        {precisaDeSetas && (
          <>
            <button onClick={voltar} aria-label="Produto anterior" className={`${estiloBotao} left-1`}>
              <IconeSeta direcao="esquerda" />
            </button>
            <button onClick={avancar} aria-label="Próximo produto" className={`${estiloBotao} right-1`}>
              <IconeSeta direcao="direita" />
            </button>
          </>
        )}
      </div>

      {precisaDeSetas && (
        <div className="mt-2 flex justify-center">
          {Array.from({ length: ultimoIndice + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndice(i)}
              aria-label={`Ir para a posição ${i + 1}`}
              className="p-1.5"
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  i === posicao ? 'w-6 bg-indigo-600' : 'w-2.5 bg-slate-300'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Carrossel