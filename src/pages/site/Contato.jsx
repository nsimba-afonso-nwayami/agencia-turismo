import ContatoImgBg from "../../assets/img/contato.jpg";

export default function Contato() {
  return (
    <>
      <title>Contato | Agência Turismo</title>

      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ContatoImgBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Fale Connosco
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-white">
            Tire suas dúvidas, solicite informações ou reserve seu pacote.
          </p>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-24 px-6 md:px-16 bg-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl text-center font-bold text-indigo-950 mb-6">
              Envie sua mensagem
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-indigo-950 font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-blue-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>

              <div>
                <label className="block text-indigo-950 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border border-blue-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>

              <div>
                <label className="block text-indigo-950 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="+244 923 000 000"
                  className="w-full border border-blue-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  required
                />
              </div>

              <div>
                <label className="block text-indigo-950 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  placeholder="Escreva sua mensagem"
                  className="w-full border border-blue-700 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer inline-flex items-center justify-center bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações da Agência */}
          <div className="bg-indigo-950 rounded-3xl p-8 shadow-lg text-white space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Informações de Contato
            </h2>

            <div>
              <h3 className="font-semibold text-yellow-400">Endereço</h3>
              <p className="mt-2 text-white">
                Centralidade do Kilamba Quarteirão F, edifício F27 apartamento
                91, Luanda, Angola
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-400">Telefone</h3>
              <p className="mt-2 text-white">+244 972 614 886</p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-400">Email</h3>
              <p className="mt-2 text-white">geral@nwayami.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-400">
                Horário de Funcionamento
              </h3>
              <p className="mt-2 text-white">
                Segunda a Sexta: 08h às 17h <br />
                Sábado e Domingo: Sob agendamento
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/244972614886"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-yellow-400 text-indigo-950 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Mapa */}
      <section className="w-full h-96">
        <iframe
          title="Localização Agência Turismo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126153.01125385346!2d13.20170168145374!3d-8.853353711556109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1771426276056!5m2!1spt-PT!2sao"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
