import { Link } from "react-router-dom";
import SobreImg from "../../assets/img/sobre.jpg";
import SobreImg2 from "../../assets/img/sobre2.jpg";

export default function Sobre() {
  return (
    <>
      <title>Sobre | Agência Turismo</title>

      {/* Hero / Banner */}
      <section
        className="relative h-80 md:h-96 flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SobreImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold">
          Conheça a <span className="text-yellow-400">Agência Turismo</span>
        </h1>
      </section>

      {/* História da Agência */}
      <section className="py-24 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">
              Nossa História
            </h2>
            <p className="text-gray-700 text-lg">
              Fundada há mais de 10 anos, a Agência Turismo nasceu com o
              objetivo de mostrar as belezas de Angola de forma autêntica e
              personalizada. Desde então, ajudamos milhares de viajantes a
              explorar destinos incríveis com conforto, segurança e experiências
              memoráveis.
            </p>
            <p className="text-gray-700 text-lg">
              Nossa equipe é formada por profissionais apaixonados por viagens e
              cultura local, garantindo que cada roteiro seja único e
              inesquecível.
            </p>
          </div>

          {/* Imagem da equipe/escritório */}
          <div className="md:w-1/2">
            <img
              src={SobreImg2}
              alt="Equipe Agência Turismo"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Nosso compromisso é oferecer experiências de viagem de alta
            qualidade, com foco na satisfação do cliente e no respeito à cultura
            e ao meio ambiente.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* Missão */}
          <div className="bg-indigo-950 text-white rounded-2xl p-8 shadow-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-indigo-900">
            <i className="fas fa-bullseye text-3xl mb-4 text-yellow-400 hover:text-yellow-500 transition"></i>
            <h3 className="text-xl font-bold mb-4">Missão</h3>
            <p className="text-gray-200">
              Transformar cada viagem em uma experiência única, com atenção aos
              detalhes e excelência no atendimento.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-yellow-400 text-indigo-950 rounded-2xl p-8 shadow-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-yellow-500">
            <i className="fas fa-eye text-3xl mb-4 text-indigo-950 hover:text-indigo-900 transition"></i>
            <h3 className="text-xl font-bold mb-4">Visão</h3>
            <p>
              Ser a agência de referência em Angola para turistas que buscam
              qualidade, autenticidade e experiências memoráveis.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-indigo-800">
            <i className="fas fa-heart text-3xl mb-4 text-yellow-400 hover:text-yellow-500 transition"></i>
            <h3 className="text-xl font-bold mb-4">Valores</h3>
            <p className="text-gray-200">
              Compromisso, respeito, profissionalismo, segurança e paixão por
              viajar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final para Destinos / Pacotes */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-950">
            Pronto para sua próxima viagem?
          </h2>

          <p className="mt-4 text-indigo-950 text-lg">
            Explore nossos destinos e pacotes exclusivos e viva experiências
            inesquecíveis em Angola.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              to="/destinos"
              className="inline-flex items-center justify-center bg-indigo-950 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-900 transition"
            >
              Ver Destinos
            </Link>
            <Link
              to="/pacotes"
              className="inline-flex items-center justify-center bg-indigo-950 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-900 transition"
            >
              Ver Pacotes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
