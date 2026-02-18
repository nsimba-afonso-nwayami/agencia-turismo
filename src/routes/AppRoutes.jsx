import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";

// Páginas
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Destinos from "../pages/site/Destinos";
import Pacotes from "../pages/site/Pacotes";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Agrupar todas as rotas do site dentro do SiteLayout */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
