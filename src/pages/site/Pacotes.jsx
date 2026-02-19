import { useState } from "react";
import { Link } from "react-router-dom";
import PacotesImgBg from "../../assets/img/pacotes.jpg";
import PromocaoImg1 from "../../assets/img/destino1.jpg";
import PromocaoImg2 from "../../assets/img/destino2.jpg";

export default function Pacotes() {
  const [faqAberto, setFaqAberto] = useState(null);

  const toggleFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  const faqs = [
    {
      pergunta: "Como faço para reservar um pacote?",
      resposta:
        "Você pode reservar diretamente pelo botão 'Reservar Agora' ou entrar em contato conosco via WhatsApp ou formulário de contato.",
    },
    {
      pergunta: "Os pacotes incluem transporte?",
      resposta:
        "Sim. Todos os pacotes incluem transporte durante o roteiro, além de hospedagem e passeios guiados conforme o plano escolhido.",
    },
    {
      pergunta: "Posso personalizar o meu pacote?",
      resposta:
        "Sim. Oferecemos pacotes personalizados de acordo com o seu orçamento, datas e preferências de viagem.",
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta:
        "Aceitamos pagamentos em Kwanza e dólar, via transferência bancária, depósito ou outros métodos acordados no momento da reserva.",
    },
  ];

  return (
    <>
      <title>Pacotes | Agência Turismo</title>

      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${PacotesImgBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nossos Pacotes Imperdíveis
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
            Escolha seu pacote ideal e viva experiências únicas em Angola.
          </p>
        </div>
      </section>

      {/* Pacotes Principais */}
      <section className="py-24 px-6 md:px-16 bg-gray-200 text-indigo-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* PACOTE 1 */}
          <div className="bg-white border-2 border-yellow-400 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-950 text-xs font-bold px-4 py-1 rounded-bl-lg uppercase">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Luanda Cultural</h3>
              <div className="text-3xl font-extrabold mb-6 text-indigo-950">
                USD 1.200
                <div className="text-lg font-normal text-gray-600">
                  AOA 960.000
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>5 dias / 4
                  noites
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Hotel 4
                  estrelas com café da manhã
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Passeios
                  guiados e transporte incluso
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Datas: 10 a 15
                  de Abril 2026
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white rounded-xl font-bold transition"
              >
                Reservar Agora
              </Link>
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center border border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-indigo-950 rounded-xl font-bold transition"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* PACOTE 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-400">
            <div>
              <h3 className="text-2xl font-bold mb-2">Praias de Benguela</h3>
              <div className="text-3xl font-extrabold mb-6 text-indigo-950">
                USD 1.500
                <div className="text-lg font-normal text-gray-600">
                  AOA 1.200.000
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>7 dias / 6
                  noites
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Hotel à
                  beira-mar
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Passeios e
                  atividades aquáticas
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Datas: 01 a 07
                  de Maio 2026
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white rounded-xl font-bold transition"
              >
                Reservar Agora
              </Link>
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center border border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white rounded-xl font-bold transition"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* PACOTE 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-400">
            <div>
              <h3 className="text-2xl font-bold mb-2">Aventuras no Namibe</h3>
              <div className="text-3xl font-extrabold mb-6 text-indigo-950">
                USD 1.300
                <div className="text-lg font-normal text-gray-600">
                  AOA 1.040.000
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>6 dias / 5
                  noites
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Transporte 4x4
                  pelo deserto
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Passeios
                  guiados e trekking
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-yellow-500"></i>Datas: 15 a 20
                  de Junho 2026
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white rounded-xl font-bold transition"
              >
                Reservar Agora
              </Link>
              <Link
                to="/contato"
                className="w-full py-3 flex items-center justify-center border border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white rounded-xl font-bold transition"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Botão ver mais pacotes */}
        <div className="text-center mt-16">
          <Link
            to="/pacotes"
            className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            Ver todos os pacotes
          </Link>
        </div>
      </section>

      {/* Destaques / Promoções */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              Destaques e Promoções do Momento
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Aproveite as melhores ofertas e pacotes especiais que preparamos
              para você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Promoção 1 */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg group">
              <img
                src={PromocaoImg1}
                alt="Promoção Luanda"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Luanda Cultural</h3>
                <p className="mb-4">5 dias / 4 noites - USD 1.200</p>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
                >
                  Reservar Agora
                </Link>
              </div>
            </div>

            {/* Promoção 2 */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg group">
              <img
                src={PromocaoImg2}
                alt="Promoção Benguela"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Praias de Benguela</h3>
                <p className="mb-4">7 dias / 6 noites - USD 1.500</p>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
                >
                  Reservar Agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-700 text-lg">
              Tire suas dúvidas antes de reservar seu pacote. Se precisar de
              mais informações, entre em contato.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-indigo-950">
                    {faq.pergunta}
                  </span>
                  <span className="text-xl font-bold text-yellow-400">
                    {faqAberto === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    faqAberto === index ? "max-h-40 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
