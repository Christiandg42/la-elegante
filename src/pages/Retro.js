import ProductoCard from "../components/ProductoCard";

import malaga from "../assets/images/malaga.jpg";
import milan from "../assets/images/milan.jpg";
import werder from "../assets/images/werder.jpg";

import belgica from "../assets/images/belgica.jpg";
import francia from "../assets/images/francia.jpg";
import grecia from "../assets/images/grecia.jpg";

function Retro() {
  return (
    <>
      <section className="hero hero-catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Colección Retro</h1>
          <p className="catalogo-desc">
            Camisetas históricas de clubes y selecciones que marcaron época.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="container">
          <header className="seccion-header">
            <h2 className="seccion-titulo">Retro clubs</h2>
            <p className="seccion-subtitulo">
              Camisetas clásicas de clubes míticos de los 80, 90 y 2000.
            </p>
          </header>

          <div className="grid-productos">
            <ProductoCard
              imagen={malaga}
              alt="Camiseta clásica del Málaga"
              nombre="Málaga clásico"
              meta="España · Retro"
              precio="119,90 €"
              slug="malaga-clasico"
            />

            <ProductoCard
              imagen={milan}
              alt="Camiseta negra clásica del AC Milan"
              nombre="AC Milan retro"
              meta="Italia · Retro"
              precio="129,90 €"
              slug="ac-milan-retro"
            />

            <ProductoCard
              imagen={werder}
              alt="Camiseta clásica del Werder Bremen"
              nombre="Werder Bremen"
              meta="Alemania · Retro"
              precio="99,90 €"
              slug="werder-bremen-retro"
            />
          </div>
        </div>
      </section>

      <section className="seccion seccion-beige">
        <div className="container">
          <header className="seccion-header">
            <h2 className="seccion-titulo">Retro selecciones</h2>
            <p className="seccion-subtitulo">
              Camisetas de selecciones que marcaron época en Copas del Mundo y Eurocopas.
            </p>
          </header>

          <div className="grid-productos">
            <ProductoCard
              imagen={belgica}
              alt="Camiseta retro de la selección de Bélgica"
              nombre="Selección Bélgica"
              meta="Selección · Retro"
              precio="109,90 €"
              slug="belgica-retro"
            />

            <ProductoCard
              imagen={francia}
              alt="Camiseta retro de la selección de Francia"
              nombre="Selección Francia"
              meta="Selección · Edición 2010"
              precio="99,90 €"
              slug="francia-2010"
            />

            <ProductoCard
              imagen={grecia}
              alt="Camiseta retro de la selección de Grecia"
              nombre="Selección Grecia"
              meta="Selección · Eurocopa"
              precio="89,90 €"
              slug="grecia-eurocopa"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Retro;