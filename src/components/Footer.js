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
            <li><a href="#cookies">Política de cookies</a></li>
            <li><a href="#aviso-legal">Aviso legal</a></li>
            <li><Link to="/contacto">Soporte</Link></li>
          </ul>
        </div>

        <div className="footer-bloque">
          <h3>Síguenos</h3>
          <ul className="footer-social">
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#x">X</a></li>
            <li><a href="#facebook">Facebook</a></li>
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