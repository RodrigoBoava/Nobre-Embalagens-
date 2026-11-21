function Hero() {
  return (
    <section id="inicio" className="bg-slate-900 px-6 py-24 text-center text-white">
      <h1 className="text-4xl font-bold md:text-5xl">Bem-vindo à Nobre Embalagens</h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        Desde 2017 entregando qualidade e confiança em embalagens para o seu negócio. Explore nossa variedade de produtos e descubra como podemos atender às suas necessidades.
      </p>
      <a
        href="#contato"
        className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400 transition"
      >
        Fale conosco
      </a>
    </section>
  )
}

export default Hero