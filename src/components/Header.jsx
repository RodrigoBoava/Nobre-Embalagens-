import logo from '../assets/Embalagens.png'

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Logo Nobre Embalagens" className="h-10 w-auto" />
          <span className="text-xl font-bold text-slate-900">Nobre Embalagens</span>
        </a>

        <ul className="flex gap-6 text-slate-600">
          <li><a href="#inicio" className="hover:text-indigo-600">Início</a></li>
          <li><a href="#produtos" className="hover:text-indigo-600">Produtos</a></li>
          <li><a href="#contato" className="hover:text-indigo-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header