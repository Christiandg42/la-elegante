import banner from "../assets/images/banner.png";

function SobreNosotros() {
  return (
    <>
      <section className="hero-catalogo hero-sobre">
        <div className="sobre-wrap">
          <img
            src={banner}
            alt="Repartidor de La Elegante"
            className="sobre-img"
          />

          <div className="sobre-texto">
            <h1 className="catalogo-titulo">Sobre La Elegante</h1>
            <p className="catalogo-desc">
              Una tienda pensada para quienes viven el fútbol con estilo,
              nostalgia y detalle.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="container about-layout">
          <div className="about-texto">
            <h2 className="seccion-titulo">Nuestra historia</h2>
            <p>
              La Elegante nace de la unión de dos pasiones: las camisetas de
              fútbol y el diseño clásico. Queríamos crear una tienda clara,
              cómoda y visualmente cuidada.
            </p>

            <p>
              Cada camiseta está seleccionada pensando en aficionados,
              coleccionistas y personas que buscan una prenda con identidad.
            </p>

            <h3>Nuestra filosofía</h3>
            <p>
              Una camiseta de fútbol no es solo una prenda: representa una
              historia, un equipo, una temporada y recuerdos compartidos.
            </p>

            <h3>Valores</h3>
            <ul className="servicio-lista">
              <li>Respeto por la historia y la cultura del fútbol.</li>
              <li>Calidad en el producto y en la experiencia digital.</li>
              <li>Compromiso con un diseño accesible y usable.</li>
            </ul>
          </div>

          <aside className="about-datos">
            <h3>Datos rápidos</h3>
            <ul className="servicio-lista">
              <li>Catálogo organizado por ligas, selecciones y retro.</li>
              <li>Diseño adaptativo para móvil, tablet y escritorio.</li>
              <li>Formulario de contacto con búsqueda por foto.</li>
              <li>Interfaz basada en React y componentes reutilizables.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default SobreNosotros;