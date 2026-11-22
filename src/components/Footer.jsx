const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#produtos', texto: 'Produtos' },
  { href: '#contato', texto: 'Contato' },
]

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-white">Nobre Embalagens</p>
          <p className="mt-1 text-sm">Qualidade e confiança em embalagens desde 2017.</p>
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-8 max-w-5xl border-t border-slate-800 pt-6 text-center text-sm">
        © {ano} Nobre Embalagens. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer