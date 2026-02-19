import { Link } from "react-router-dom";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import VideoHero from "../../assets/video/video.mp4";
import SobreImg2 from "../../assets/img/sobre2.jpg";
import DestinoImg1 from "../../assets/img/destino1.jpg";
import DestinoImg2 from "../../assets/img/destino2.jpg";
import DestinoImg3 from "../../assets/img/destino3.jpg";
import DestinoImg4 from "../../assets/img/destino4.jpg";
import ParallaxImg from "../../assets/img/parallax.jpg";
import DepoimentoImg1 from "../../assets/img/review1.jpeg";
import DepoimentoImg2 from "../../assets/img/review2.jpg";
import DepoimentoImg3 from "../../assets/img/review3.jpeg";

export default function Home() {
  const destinos = [
    {
      id: 1,
      nome: "Luanda",
      descricao: "Capital vibrante com praias deslumbrantes e cultura rica.",
      img: DestinoImg1,
    },
    {
      id: 2,
      nome: "Benguela",
      descricao: "Praias paradisíacas e história colonial encantadora.",
      img: DestinoImg2,
    },
    {
      id: 3,
      nome: "Lubango",
      descricao: "Cenários montanhosos e natureza exuberante.",
      img: DestinoImg3,
    },
    {
      id: 4,
      nome: "Namibe",
      descricao: "Desertos, litoral deslumbrante e aventura única.",
      img: DestinoImg4,
    },
  ];

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
    {
      pergunta: "A agência oferece suporte durante a viagem?",
      resposta:
        "Sim. Nossa equipe oferece suporte antes, durante e após a viagem para garantir segurança e tranquilidade.",
    },
  ];

  const [faqAberto, setFaqAberto] = useState(null);
  const toggleFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  const depoimentos = [
    {
      id: 1,
      nome: "Carlos Manuel",
      texto:
        "Foi uma experiência incrível! A organização foi perfeita e conheci lugares maravilhosos em Luanda.",
      img: DepoimentoImg1,
    },
    {
      id: 2,
      nome: "Ana Paula",
      texto:
        "As praias de Benguela são simplesmente paradisíacas. O atendimento da agência foi excelente do início ao fim.",
      img: DepoimentoImg2,
    },
    {
      id: 3,
      nome: "João Victor",
      texto:
        "O pacote para o Namibe superou todas as expectativas. Aventura, conforto e segurança em todos os momentos.",
      img: DepoimentoImg3,
    },
    {
      id: 4,
      nome: "João Victor",
      texto:
        "O pacote para o Namibe superou todas as expectativas. Aventura, conforto e segurança em todos os momentos 4.",
      img: DepoimentoImg3,
    },
  ];

  return (
    <>
      <title>Agência Turismo</title>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src={VideoHero}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Descubra Angola com a{" "}
            <span className="text-yellow-400">Agência Turismo</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl mb-8 max-w-2xl">
            Explore destinos incríveis, viva experiências únicas e reserve
            pacotes de turismo personalizados.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/contato"
              className="bg-indigo-950 hover:bg-indigo-900 px-6 py-3 rounded-lg font-semibold text-white transition"
            >
              Reservar Agora
            </Link>
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-indigo-950 transition justify-center"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={SobreImg2}
              alt="Sobre Agência Turismo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">
              Sobre a Agência Turismo
            </h2>
            <p className="text-gray-700 text-lg">
              Somos uma agência de turismo angolana dedicada a oferecer
              experiências únicas e memoráveis. Com pacotes personalizados e
              atenção aos detalhes, ajudamos você a explorar os destinos mais
              incríveis de Angola.
            </p>
            <p className="text-gray-700 text-lg">
              Nossa missão é transformar cada viagem em uma experiência
              inesquecível, garantindo conforto, segurança e aventura.
            </p>
            <Link
              to="/contato"
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold w-max transition"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Destinos populares */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              Destinos Populares
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Explore alguns dos destinos mais procurados de Angola. Lugares
              incríveis que combinam cultura, natureza, aventura e experiências
              autênticas para tornar sua viagem inesquecível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinos.map((destino) => (
              <div
                key={destino.id}
                className="rounded-lg overflow-hidden shadow-lg flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={destino.img}
                    alt={destino.nome}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                    {destino.nome}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-1">
                    {destino.descricao}
                  </p>
                  <Link
                    to="/pacotes"
                    className="mt-auto bg-indigo-950 hover:bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 text-center"
                  >
                    Ver Pacote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/destinos"
            className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Ver mais destinos
          </Link>
        </div>
      </section>

      {/* Nossos Pacotes */}
      <section
        id="pacotes"
        className="py-24 px-6 md:px-16 bg-gray-200 text-indigo-950"
      >
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            Nossos Pacotes
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para viver experiências inesquecíveis em
            Angola. Oferecemos roteiros cuidadosamente planejados, hospedagens
            selecionadas e suporte completo para garantir conforto, segurança e
            aventura em cada viagem.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* PACOTE DESTAQUE */}
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

        <div className="text-center mt-16">
          <Link
            to="/pacotes"
            className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            Ver mais pacotes
          </Link>
        </div>
      </section>

      {/* Seção Parallax */}
      <section
        className="relative h-100 md:h-125 flex items-center justify-center text-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ParallaxImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Sua próxima aventura começa aqui
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Descubra paisagens incríveis, cultura vibrante e experiências únicas
            em Angola com pacotes feitos especialmente para você.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            Planejar Minha Viagem
          </Link>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-700 text-lg">
              Tire suas dúvidas antes de viajar. Se precisar de mais
              informações, entre em contato com nossa equipe.
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
                  className={`px-6 overflow-hidden transition-all duration-300 ${faqAberto === index ? "max-h-40 py-4" : "max-h-0"}`}
                >
                  <p className="text-gray-700">{faq.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Veja algumas experiências de viajantes que confiaram na nossa
              agência para explorar Angola.
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            grabCursor={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {depoimentos.map((dep) => (
              <SwiperSlide key={dep.id}>
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-full transition hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    src={dep.img}
                    alt={dep.nome}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <div className="flex mb-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 mb-4 italic">“{dep.texto}”</p>
                  <h4 className="font-semibold text-indigo-950">{dep.nome}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contato rápido */}
      <section className="bg-indigo-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Pronto para explorar Angola com a{" "}
              <span className="text-yellow-400">Agência Turismo?</span>
            </h2>
            <p className="mt-6 text-gray-200 leading-relaxed">
              Entre em contato rapidamente e descubra pacotes incríveis,
              roteiros personalizados e experiências inesquecíveis. Nossa equipe
              está pronta para ajudá-lo a planejar a viagem dos seus sonhos.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/244923000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-400 text-indigo-950 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i> Falar pelo
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-indigo-900 rounded-2xl p-8 shadow-xl space-y-6">
            <div>
              <h3 className="font-semibold text-yellow-400">
                Horário de funcionamento
              </h3>
              <p className="text-gray-200 mt-2">
                Segunda a Sexta: 09h às 18h <br />
                Sábado e Domingo: Sob agendamento
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400">Localização</h3>
              <p className="text-gray-200 mt-2">
                Centralidade do Kilamba Quarteirão F, edifício F27 apartamento
                91, Luanda, Angola
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400">Contato</h3>
              <p className="text-gray-200 mt-2">
                +244 923 000 000 <br />
                contato@agenciatourismo.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-950">
            Agende agora sua viagem e viva experiências inesquecíveis!
          </h2>
          <div className="mt-6">
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-indigo-950 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-900 transition"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i> Falar no
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
