import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-950 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Agência Turismo
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static
            top-full left-0 w-full md:w-auto
            bg-indigo-950 md:bg-transparent
            flex flex-col md:flex-row
            gap-4 md:gap-6
            px-6 md:px-0
            transition-all duration-300
            ${menuOpen ? "py-6 opacity-100" : "py-0 opacity-0 md:opacity-100 md:py-0"}
            pointer-events-${menuOpen ? "auto" : "none"} md:pointer-events-auto
          `}
        >
          <Link
            to="/"
            className="hover:text-yellow-400 flex items-center justify-center h-10"
          >
            Início
          </Link>

          <Link
            to="/sobre"
            className="hover:text-yellow-400 flex items-center justify-center h-10"
          >
            Sobre
          </Link>

          <Link
            to="/destinos"
            className="hover:text-yellow-400 flex items-center justify-center h-10"
          >
            Destinos
          </Link>

          <Link
            to="/pacotes"
            className="hover:text-yellow-400 flex items-center justify-center h-10"
          >
            Pacotes
          </Link>

          <Link
            to="/contato"
            className="hover:text-yellow-400 flex items-center justify-center h-10"
          >
            Contato
          </Link>

          {/* Botão Reservar */}
          <Link
            to="/contato"
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg font-semibold flex items-center justify-center transition h-10"
          >
            Reservar
          </Link>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/923000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-indigo-950 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition h-10"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
