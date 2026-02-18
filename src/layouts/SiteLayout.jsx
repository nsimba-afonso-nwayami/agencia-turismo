import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function SiteLayout() {
  return (
    <>
      <Header />
      {/* Outlet renderiza a página específica da rota */}
      <main>
        <Outlet />
      </main>
      {/* Botão WhatsApp fixo do site */}
      <WhatsAppButton phone="244923000000" size={64} />
      <Footer />
    </>
  );
}
