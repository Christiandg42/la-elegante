import { Link } from "react-router-dom";

function ProductoCard({ imagen, alt, nombre, meta, precio, slug }) {
  const rutaProducto = slug ? `/producto/${slug}` : "/producto/ac-milan-third-24-25";

  return (
    <article className="producto-card">
      <Link to={rutaProducto} className="producto-imagen-link">
        <figure className="producto-imagen">
          <img src={imagen} alt={alt} />
        </figure>
      </Link>

      <div className="producto-info">
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-meta">{meta}</p>
        <p className="producto-precio">{precio}</p>

        <Link to={rutaProducto} className="btn btn-secondary">
          Ver más
        </Link>
      </div>
    </article>
  );
}

export default ProductoCard;