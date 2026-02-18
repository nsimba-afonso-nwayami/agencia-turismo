import { Link } from "react-router-dom";
import DestinoImgBg from "../../assets/img/destino1.jpg";
import DestinoImg1 from "../../assets/img/destino1.jpg";
import DestinoImg2 from "../../assets/img/destino2.jpg";
import DestinoImg3 from "../../assets/img/destino3.jpg";
import DestinoImg4 from "../../assets/img/destino4.jpg";
import DestinoImg5 from "../../assets/img/destino5.jpg";
import DestinoImg6 from "../../assets/img/destino6.jpg";
import DestinoImg7 from "../../assets/img/destino7.jpg";
import DestinoImg8 from "../../assets/img/destino8.jpg";

export default function Destinos() {
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
    {
      id: 5,
      nome: "Huíla",
      descricao: "Montanhas e vales perfeitos para trilhas e natureza.",
      img: DestinoImg5,
    },
    {
      id: 6,
      nome: "Malanje",
      descricao: "Cachoeiras e paisagens naturais incríveis.",
      img: DestinoImg6,
    },
    {
      id: 7,
      nome: "Cabinda",
      descricao: "Praias tropicais e cultura fascinante.",
      img: DestinoImg7,
    },
    {
      id: 8,
      nome: "Uíge",
      descricao: "História, natureza e experiências culturais.",
      img: DestinoImg8,
    },
  ];

  return (
    <>
      <title>Destinos | Agência Turismo</title>

      {/* Banner Destinos */}
      <section
        className="relative h-80 md:h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${DestinoImgBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Explore os Destinos de Angola
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Descubra paisagens incríveis, praias paradisíacas e experiências
            culturais únicas.
          </p>
        </div>
      </section>

      {/* Grid de Destinos */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nossos Destinos
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Explore os principais destinos de Angola. Cada lugar oferece
              experiências únicas para todos os tipos de viajantes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinos.map((destino) => (
              <div
                key={destino.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={destino.img}
                    alt={destino.nome}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {destino.nome}
                  </h3>
                  <p className="text-gray-700 mb-4 flex-1">
                    {destino.descricao}
                  </p>

                  <Link
                    to="/pacotes"
                    className="mt-auto bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 text-center"
                  >
                    Ver Pacotes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Solicitar mais informações
          </Link>
        </div>
      </section>
    </>
  );
}
