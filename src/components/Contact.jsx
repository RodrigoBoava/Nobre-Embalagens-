import { linkWhatsapp } from '../data/contato'

const contatos = [
  {
    icone: '📱',
    titulo: 'WhatsApp',
    texto: '(15) 99689-0091',
    link: linkWhatsapp(),
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

function Contact() {
  return (
    <section id="contato" className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Entre em contato</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Fale com a gente para pedir orçamento, tirar dúvidas ou conhecer melhor nossos produtos.
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {contatos.map((item) => {
            const conteudo = (
              <>
                <span className="text-3xl sm:text-4xl" aria-hidden="true">
                  {item.icone}
                </span>
                <div className="min-w-0 sm:mt-4">
                  <h3 className="text-lg font-semibold">{item.titulo}</h3>
                  <p className="mt-1 break-words text-sm text-slate-300">{item.texto}</p>
                </div>
              </>
            )

            // No celular o card fica na horizontal (ícone ao lado do texto)
            const classes =
              'flex items-center gap-4 rounded-xl bg-slate-800 p-5 text-left transition sm:flex-col sm:gap-0 sm:p-6 sm:text-center'

            if (!item.link) {
              return (
                <div key={item.titulo} className={classes}>
                  {conteudo}
                </div>
              )
            }

            const externo = item.link.startsWith('http')

            return (
              <a
                key={item.titulo}
                href={item.link}
                {...(externo && { target: '_blank', rel: 'noreferrer' })}
                className={`${classes} hover:bg-slate-700`}
              >
                {conteudo}
              </a>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-indigo-500 px-6 py-3 text-center font-semibold transition hover:bg-indigo-400"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="https://share.google/tYOnorFWEugUROZZ0"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-500 px-6 py-3 text-center font-semibold transition hover:bg-slate-800"
          >
            Ver localização
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact