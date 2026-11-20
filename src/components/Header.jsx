import logo from '../assets/Embalagens.png'

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="flex w-full items-center justify-between pl-2 pr-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Logo Nobre Embalagens" className="h-30 w-auto" />
          <span className="text-xl font-bold text-slate-900">Nobre Embalagens</span>
        </a>

        <ul className="flex gap-8 text-slate-10">
          <li><a href="#inicio" className="hover:text-indigo-600">Início</a></li>
          <li><a href="#produtos" className="hover:text-indigo-600">Produtos</a></li>
          <li><a href="#contato" className="hover:text-indigo-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header