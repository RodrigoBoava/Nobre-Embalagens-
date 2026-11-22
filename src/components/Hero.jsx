import { linkWhatsapp } from '../data/contato'

function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center bg-slate-900 px-6 py-16 text-center text-white lg:min-h-[calc(100svh-5rem)] lg:py-24"
    >
      <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Bem-vindo à Nobre Embalagens
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
        Desde 2017 entregando qualidade e confiança em embalagens para o seu negócio. Explore nossa variedade de produtos e descubra como podemos atender às suas necessidades.
      </p>

      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
        <a
          href={linkWhatsapp()}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-indigo-500 px-6 py-3 text-center font-semibold transition hover:bg-indigo-400"
        >
          Pedir orçamento
        </a>
        <a
          href="#produtos"
          className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold transition hover:bg-slate-800"
        >
          Ver produtos
        </a>
      </div>
    </section>
  )
}

export default Hero