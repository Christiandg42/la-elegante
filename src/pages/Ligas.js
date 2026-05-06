import { Link } from "react-router-dom";

function Ligas() {
  return (
    <>
      <section className="hero hero-catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Ligas</h1>
          <p className="catalogo-desc">
            Explora camisetas de las principales ligas del mundo.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="container grid-ligas">
          <article className="liga-card">
            <h2>La Liga</h2>
            <p>Camisetas de clubes españoles, actuales y clásicas.</p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver La Liga
            </Link>
          </article>

          <article className="liga-card">
            <h2>Premier League</h2>
            <p>Diseños de equipos ingleses con gran tradición futbolística.</p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver Premier
            </Link>
          </article>

          <article className="liga-card">
            <h2>Serie A</h2>
            <p>Camisetas italianas con estilo clásico y elegante.</p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver Serie A
            </Link>
          </article>

          <article className="liga-card">
            <h2>Bundesliga</h2>
            <p>Camisetas alemanas modernas y retro.</p>
            <Link to="/catalogo" className="btn btn-outline">
              Ver Bundesliga
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

export default Ligas;