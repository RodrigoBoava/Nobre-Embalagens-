import { useState } from 'react'
import logo from '../assets/Embalagens.png'
import { linkWhatsapp } from '../data/contato'

const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#produtos', texto: 'Produtos' },
  { href: '#contato', texto: 'Contato' },
]

function Header() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" onClick={fechar} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Nobre Embalagens"
            className="h-10 w-auto sm:h-12 lg:h-14"
          />
          <span className="text-lg font-bold text-slate-900 sm:text-xl lg:text-2xl">
            Nobre Embalagens
          </span>
        </a>

        {/* Menu para notebook/desktop */}
        <ul className="hidden items-center gap-8 text-lg font-semibold text-slate-900 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-indigo-600">
                {link.texto}
              </a>
            </li>
          ))}
          <li>
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-5 py-2 text-base text-white transition hover:bg-indigo-600"
            >
              Pedir orçamento
            </a>
          </li>
        </ul>

        {/* Botão hambúrguer para celular/tablet */}
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-900 transition hover:bg-slate-100 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Menu aberto no celular */}
      {aberto && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-t border-slate-100 bg-white shadow-lg lg:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={fechar}
                  className="block rounded-lg px-3 py-3 text-lg font-semibold text-slate-900 active:bg-slate-100"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noreferrer"
              onClick={fechar}
              className="block rounded-lg bg-slate-900 px-5 py-3 text-center font-semibold text-white"
            >
              Pedir orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header