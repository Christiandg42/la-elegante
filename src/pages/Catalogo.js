import { useState } from "react";

import ProductoCard from "../components/ProductoCard";
import productos from "../data/productos";

function Catalogo() {
  const [liga, setLiga] = useState("");
  const [tipo, setTipo] = useState("");
  const [precioMaximo, setPrecioMaximo] = useState(100);

  const productosFiltrados = productos.filter((producto) => {
    const coincideLiga = liga === "" || producto.liga === liga;
    const coincideTipo = tipo === "" || producto.tipo === tipo;
    const coincidePrecio = producto.precioNumero <= precioMaximo;

    return coincideLiga && coincideTipo && coincidePrecio;
  });

  function resetearFiltros() {
    setLiga("");
    setTipo("");
    setPrecioMaximo(100);
  }

  function obtenerMensajeResultados() {
    if (productosFiltrados.length === 0) {
      return "No hay productos que coincidan con los filtros.";
    }

    if (productosFiltrados.length === 1) {
      return "Mostrando 1 producto.";
    }

    return `Mostrando ${productosFiltrados.length} productos.`;
  }

  return (
    <>
      <section className="hero hero-catalogo" id="catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Catálogo completo</h1>
          <p className="catalogo-desc">
            Encuentra tu camiseta favorita por liga, selección o colección especial.
          </p>
        </div>
      </section>

      <section className="seccion filtros-catalogo">
        <div className="container">
          <h2 className="seccion-titulo">Filtros</h2>

          <div className="filtros-grid">
            <div className="filtro-bloque">
              <label htmlFor="filtro-liga">Liga</label>
              <select
                id="filtro-liga"
                name="filtro-liga"
                value={liga}
                onChange={(e) => setLiga(e.target.value)}
              >
                <option value="">Todas</option>
                <option value="España">España</option>
                <option value="Inglaterra">Inglaterra</option>
                <option value="Italia">Italia</option>
                <option value="Alemania">Alemania</option>
                <option value="Selección">Selección</option>
              </select>
            </div>

            <div className="filtro-bloque">
              <label htmlFor="filtro-tipo">Tipo</label>
              <select
                id="filtro-tipo"
                name="filtro-tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="Moderna">Moderna</option>
                <option value="Retro">Retro</option>
                <option value="Especial">Especial</option>
              </select>
            </div>

            <div className="filtro-bloque">
              <label htmlFor="filtro-precio">Precio máximo</label>
              <input
                type="range"
                id="filtro-precio"
                name="filtro-precio"
                min="20"
                max="200"
                value={precioMaximo}
                onChange={(e) => setPrecioMaximo(Number(e.target.value))}
                aria-describedby="precio-valor"
              />
              <span id="precio-valor" className="precio-valor">
                Hasta {precioMaximo} €
              </span>
            </div>
          </div>

          <div className="filtros-acciones">
            <button
              className="btn btn-outline"
              type="button"
              onClick={resetearFiltros}
            >
              Restablecer filtros
            </button>
          </div>

          <p className="resultado-filtros" aria-live="polite" role="status">
            {obtenerMensajeResultados()}
          </p>
        </div>
      </section>

      <section className="seccion seccion-beige">
        <div className="container">
          <div className="grid-productos">
            {productosFiltrados.map((producto) => (
              <ProductoCard
                key={producto.slug}
                imagen={producto.imagen}
                alt={producto.alt}
                nombre={producto.nombre}
                meta={`Liga: ${producto.liga} · ${producto.tipo}`}
                precio={producto.precio}
                slug={producto.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalogo;