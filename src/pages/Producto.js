import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import productos from "../data/productos";

function Producto() {
  const { slug } = useParams();

  const producto =
    productos.find((item) => item.slug === slug) ||
    productos.find((item) => item.slug === "ac-milan-third-24-25");

  const [talla, setTalla] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  function agregarCarrito() {
    if (talla === "") {
      setMensaje("Selecciona una talla antes de añadir el producto.");
      return;
    }

    if (cantidad < 1 || Number.isNaN(cantidad)) {
      setMensaje("La cantidad debe ser al menos 1.");
      return;
    }

    setMensaje(
      `Añadidas ${cantidad} camiseta(s) talla ${talla} al carrito.`
    );
  }

  return (
    <>
      <section className="hero hero-producto">
        <div className="container">
          <h1 className="producto-titulo">{producto.nombre}</h1>

          <p className="producto-subtitulo">
            {producto.liga} · {producto.tipo} · {producto.temporada}
          </p>
        </div>
      </section>

      <section className="seccion seccion-breadcrumb">
        <div className="container breadcrumb">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">›</span>
          <Link to="/catalogo">Catálogo</Link>
          <span aria-hidden="true">›</span>
          <span className="breadcrumb-actual">{producto.nombre}</span>
        </div>
      </section>

      <section className="seccion">
        <div className="container producto-layout">
          <div className="producto-galeria">
            <img
              src={producto.imagen}
              alt={producto.alt}
              className="producto-img-principal"
            />
          </div>

          <div className="producto-detalles">
            <p className="producto-precio-grande">{producto.precio}</p>

            <p className="producto-descripcion">
              {producto.descripcion}
            </p>

            <div className="producto-formulario">
              <div className="campo-formulario">
                <label htmlFor="talla">Selecciona talla</label>

                <select
                  id="talla"
                  name="talla"
                  value={talla}
                  onChange={(e) => setTalla(e.target.value)}
                >
                  <option value="">Selecciona</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <div className="campo-formulario">
                <label htmlFor="cantidad">Cantidad</label>

                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  min="1"
                  max="10"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={agregarCarrito}
              >
                Añadir al carrito
              </button>

              {mensaje && (
                <p
                  className="mensaje-carrito"
                  role="status"
                  aria-live="polite"
                >
                  {mensaje}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Producto;