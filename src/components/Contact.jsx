function Contact() {
  const contatos = [
    {
      icone: '📱',
      titulo: 'WhatsApp',
      texto: '(15) 99689-0091',
      link: 'https://wa.me/5515996890091',
    },
    {
      icone: '✉️',
      titulo: 'E-mail',
      texto: 'nobreembalagens@gmail.com',
      link: 'mailto:nobreembalagens@gmail.com',
    },
    {
      icone: '📍',
      titulo: 'Endereço',
      texto: 'Av São Sebastião, 490 - Ibiúna/SP',
      link: 'https://share.google/tYOnorFWEugUROZZ0',
    },
    {
      icone: '🕒',
      titulo: 'Horário',
      texto: 'Seg a Sex, 8h às 16h',
      link: null,
    },
  ]

  return (
    <section id="contato" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold">Entre em contato</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Fale com a gente para pedir orçamento, tirar dúvidas ou conhecer melhor nossos produtos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contatos.map((item) => {
            const conteudo = (
              <>
                <span className="text-4xl">{item.icone}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.titulo}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.texto}</p>
              </>
            )

            const classes = 'rounded-xl bg-slate-800 p-6 transition'

            return item.link ? (
              <a
                key={item.titulo}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`${classes} hover:bg-slate-700`}
              >
                {conteudo}
              </a>
            ) : (
              <div key={item.titulo} className={classes}>
                {conteudo}
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5515996890091"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400 transition"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="https://share.google/tYOnorFWEugUROZZ0"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg border border-slate-500 px-6 py-3 font-semibold hover:bg-slate-800 transition"
          >
            Ver localização
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact