import { Link } from "react-router-dom";

function Selecciones() {
  return (
    <>
      <section className="hero hero-catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Selecciones</h1>
          <p className="catalogo-desc">
            Camisetas de selecciones nacionales históricas y actuales.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="container grid-ligas">
          <article className="liga-card">
            <h2>Europa</h2>
            <p>
              España, Francia, Alemania, Italia e Inglaterra: camisetas de
              selecciones con historia en Eurocopas y Mundiales.
            </p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver selecciones europeas
            </Link>
          </article>

          <article className="liga-card">
            <h2>Sudamérica</h2>
            <p>
              Brasil, Argentina, Uruguay y otras selecciones con gran identidad
              visual y futbolística.
            </p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver Sudamérica
            </Link>
          </article>

          <article className="liga-card">
            <h2>Resto del mundo</h2>
            <p>
              Camisetas de África, Asia, Norteamérica y Oceanía para
              coleccionistas.
            </p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver resto del mundo
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default Selecciones;