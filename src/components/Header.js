import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo-la-elegante.png";
import lupa from "../assets/images/lupa.png";
import usuario from "../assets/images/usuario.png";
import carrito from "../assets/images/carrito.png";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cambiarMenu() {
    setMenuAbierto(!menuAbierto);
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">

        <div className="logo">
          <NavLink to="/" onClick={cerrarMenu}>
            <img src={logo} alt="Logo La Elegante" className="logo-img" />
            <span>La Elegante</span>
          </NavLink>
        </div>

        <button
          className={menuAbierto ? "menu-toggle activo" : "menu-toggle"}
          type="button"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          aria-label={
            menuAbierto
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          onClick={cambiarMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={menuAbierto ? "main-nav menu-abierto" : "main-nav"}
          id="menu-principal"
          aria-label="Navegación principal"
        >
          <ul>
            <li>
              <NavLink to="/" onClick={cerrarMenu}>
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink to="/catalogo" onClick={cerrarMenu}>
                Catálogo
              </NavLink>
            </li>

            <li>
              <NavLink to="/ligas" onClick={cerrarMenu}>
                Ligas
              </NavLink>
            </li>

            <li>
              <NavLink to="/selecciones" onClick={cerrarMenu}>
                Selecciones
              </NavLink>
            </li>

            <li>
              <NavLink to="/retro" onClick={cerrarMenu}>
                Retro
              </NavLink>
            </li>

            <li>
              <NavLink to="/sobre-nosotros" onClick={cerrarMenu}>
                Sobre nosotros
              </NavLink>
            </li>

            <li>
              <NavLink to="/contacto" onClick={cerrarMenu}>
                Contacto
              </NavLink>
            </li>

            <li>
              <NavLink to="/carrito" onClick={cerrarMenu}>
                Carrito
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions" aria-label="Acciones de usuario">
          <button className="icon-btn" aria-label="Buscar camiseta">
            <img src={lupa} alt="" className="icon-img" />
          </button>

          <button className="icon-btn" aria-label="Acceder a mi cuenta">
            <img src={usuario} alt="" className="user-icon" />
          </button>

          <NavLink to="/carrito" className="icon-btn" aria-label="Ver carrito">
            <img src={carrito} alt="" className="cart-icon" />
          </NavLink>
        </div>

      </div>
    </header>
  );
}

export default Header;