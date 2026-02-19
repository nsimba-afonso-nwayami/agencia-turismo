import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sobre a agência */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-yellow-400">
            Agência Turismo
          </h2>
          <p className="text-gray-200">
            Descubra destinos incríveis e viva experiências únicas com nossos
            pacotes de turismo personalizados em Angola.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-gray-200">Links</h3>
          <Link to="/" className="hover:text-yellow-400 transition">
            Início
          </Link>
          <Link to="/sobre" className="hover:text-yellow-400 transition">
            Sobre
          </Link>
          <Link to="/destinos" className="hover:text-yellow-400 transition">
            Destinos
          </Link>
          <Link to="/pacotes" className="hover:text-yellow-400 transition">
            Pacotes
          </Link>
          <Link to="/contato" className="hover:text-yellow-400 transition">
            Contato
          </Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-gray-200">Contato</h3>

          <a
            href="mailto:contato@agenciatourismo.ao"
            className="hover:text-yellow-400 transition"
          >
            contato@agenciatourismo.ao
          </a>

          <a
            href="tel:+244972614886"
            className="hover:text-yellow-400 transition"
          >
            +244 923 000 000
          </a>

          <a
            href="https://wa.me/244972614886"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-gray-200">Redes Sociais</h3>

          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-yellow-400 text-2xl transition transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-yellow-400 text-2xl transition transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-yellow-400 text-2xl transition transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-yellow-400 text-2xl transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 text-gray-200 text-center py-8">
        &copy; {new Date().getFullYear()} Agência Turismo. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
