const productosCarrito = [
  {
    nombre: "AC Milan – Third 24/25",
    talla: "M",
    cantidad: 1,
    precio: 89.9,
  },
  {
    nombre: "Selección Española",
    talla: "L",
    cantidad: 1,
    precio: 89.9,
  },
];

function formatearPrecio(valor) {
  return valor.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}

function Carrito() {
  const subtotal = productosCarrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const envio = 5;
  const total = subtotal + envio;

  return (
    <>
      <section className="hero hero-catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Carrito de compra</h1>
          <p className="catalogo-desc">
            Revisa tus camisetas antes de finalizar la compra.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="container carrito-layout">
          <div className="carrito-tabla-wrapper">
            <table className="carrito-tabla">
              <caption>Productos incluidos en el carrito</caption>

              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Talla</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                {productosCarrito.map((producto, index) => (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>{producto.talla}</td>
                    <td>{producto.cantidad}</td>
                    <td>{formatearPrecio(producto.precio)}</td>
                    <td>
                      {formatearPrecio(producto.precio * producto.cantidad)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="carrito-resumen" aria-labelledby="resumen-carrito">
            <h2 id="resumen-carrito">Resumen</h2>

            <p>
              <strong>Subtotal:</strong> {formatearPrecio(subtotal)}
            </p>

            <p>
              <strong>Envío:</strong> {formatearPrecio(envio)}
            </p>

            <p>
              <strong>Total:</strong> {formatearPrecio(total)}
            </p>

            <button className="btn btn-primary" type="button">
              Finalizar compra
            </button>

            <p className="carrito-nota">
              Esta pantalla representa una simulación de compra para el proyecto
              de Diseño de Interfaces Web.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Carrito;