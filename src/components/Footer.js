import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-bloque">
          <h3>La Elegante</h3>
          <p>Tienda online de camisetas de fútbol con estilo vintage.</p>
        </div>

        <div className="footer-bloque">
          <h3>Navegación</h3>
          <ul className="footer-links">
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/ligas">Ligas</Link></li>
            <li><Link to="/selecciones">Selecciones</Link></li>
            <li><Link to="/retro">Retro</Link></li>
          </ul>
        </div>

        <div className="footer-bloque">
          <h3>Legal y soporte</h3>
          <ul className="footer-links">
            <li><Link to="/sobre-nosotros">Aviso legal</Link></li>
            <li><Link to="/sobre-nosotros">Política de cookies</Link></li>
            <li><Link to="/contacto">Soporte</Link></li>
          </ul>
        </div>

        <div className="footer-bloque">
          <h3>Síguenos</h3>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 La Elegante. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;