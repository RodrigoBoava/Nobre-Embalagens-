function Hero() {
  return (
    <section id="inicio" className="bg-slate-900 px-6 py-24 text-center text-white">
      <h1 className="text-4xl font-bold md:text-5xl">Bem-vindo à Nobre Embalagens</h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        Escreva aqui uma frase curta explicando o que o seu site oferece.
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