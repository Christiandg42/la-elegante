import { Link } from "react-router-dom";

import ProductoCard from "../components/ProductoCard";

import mesi from "../assets/images/mesi.jpeg";
import torino from "../assets/images/torino.jpg";
import espana from "../assets/images/espana.jpg";
import fulham from "../assets/images/fulham.jpg";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-texto">
            <p className="hero-kicker">Tienda de camisetas de fútbol</p>

            <h1>
              Camisetas clásicas, modernas y retro para auténticos fans
            </h1>

            <p className="hero-desc">
              Descubre una colección cuidada de camisetas de las principales
              ligas y selecciones. Diseño vintage, calidad actual y una
              experiencia pensada para navegar de forma cómoda.
            </p>

            <div className="hero-cta">
              <Link to="/catalogo" className="btn btn-primary">
                Ver catálogo
              </Link>

              <Link to="/retro" className="btn btn-outline">
                Colección retro
              </Link>
            </div>
          </div>

          <figure className="hero-imagen">
            <img
              src={mesi}
              alt="Camiseta de fútbol vintage azul colgada en un perchero"
            />
          </figure>
        </div>
      </section>

      <section className="seccion seccion-beige">
        <div className="container">
          <header className="seccion-header">
            <h2 className="seccion-titulo">Destacados de la semana</h2>

            <p className="seccion-subtitulo">
              Una selección de camisetas que no pueden faltar en tu colección.
            </p>
          </header>

          <div className="grid-productos">
            <ProductoCard
              imagen={torino}
              alt="Camiseta Torino"
              nombre="Torino – Local 25/26"
              meta="Liga: Serie A · Colección moderna"
              precio="79,90 €"
              slug="torino-local-25-26"
            />

            <ProductoCard
              imagen={espana}
              alt="Camiseta de la selección española"
              nombre="Selección Española"
              meta="Selección nacional"
              precio="89,90 €"
              slug="seleccion-espanola"
            />

            <ProductoCard
              imagen={fulham}
              alt="Camiseta alternativa negra del Fulham"
              nombre="Fulham – Third"
              meta="Premier League · Colección especial"
              precio="84,90 €"
              slug="fulham-third"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;