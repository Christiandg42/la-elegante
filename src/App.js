

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";
import Ligas from "./pages/Ligas";
import Selecciones from "./pages/Selecciones";
import Retro from "./pages/Retro";
import SobreNosotros from "./pages/SobreNosotros";

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/producto/:slug" element={<Producto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/ligas" element={<Ligas />} />
          <Route path="/selecciones" element={<Selecciones />} />
          <Route path="/retro" element={<Retro />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;