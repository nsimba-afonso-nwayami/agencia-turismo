import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Agência Turismo</title>

      <section className="h-screen flex flex-col items-center justify-center bg-gray-200 text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold text-indigo-950 mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          Ops! Página não encontrada
        </h2>

        <p className="text-indigo-950 text-base md:text-lg max-w-lg mb-6">
          A página que você está tentando acessar não existe ou foi movida. Não
          se preocupe, você ainda pode explorar nossos pacotes incríveis.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-bold shadow-lg transition"
        >
          Voltar para Home
        </Link>
      </section>
    </>
  );
}
