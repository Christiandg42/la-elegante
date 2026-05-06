import { useState } from "react";
import FaqJQuery from "../components/FaqJQuery";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fotoSeleccionada, setFotoSeleccionada] = useState(false);
  const [respuesta, setRespuesta] = useState("");
  const [tipoRespuesta, setTipoRespuesta] = useState("");

  function emailValido(valorEmail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail);
  }

  function enviarFormulario(e) {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      tipoConsulta === "" ||
      mensaje.trim() === ""
    ) {
      setRespuesta("Revisa el formulario: hay campos obligatorios sin completar.");
      setTipoRespuesta("error");
      return;
    }

    if (!emailValido(email)) {
      setRespuesta("Introduce un correo electrónico válido.");
      setTipoRespuesta("error");
      return;
    }

    if (tipoConsulta === "foto" && !fotoSeleccionada) {
      setRespuesta("Si eliges búsqueda por foto, debes subir una imagen.");
      setTipoRespuesta("error");
      return;
    }

    setRespuesta("Formulario enviado correctamente. Te responderemos lo antes posible.");
    setTipoRespuesta("exito");

    setNombre("");
    setEmail("");
    setTipoConsulta("");
    setMensaje("");
    setFotoSeleccionada(false);
  }

  return (
    <>
      <section className="hero hero-catalogo">
        <div className="container">
          <h1 className="catalogo-titulo">Contacto</h1>
          <p className="catalogo-desc">
            Escríbenos para dudas, soporte o para buscar una camiseta a partir de una foto.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="container contacto-layout">
          <form className="contacto-form" onSubmit={enviarFormulario} noValidate>
            <h2 className="seccion-titulo">Envíanos tu mensaje</h2>

            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="tipo-consulta">Tipo de consulta</label>
              <select
                id="tipo-consulta"
                name="tipo-consulta"
                value={tipoConsulta}
                onChange={(e) => {
                  setTipoConsulta(e.target.value);
                  setFotoSeleccionada(false);
                }}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="pedido">Duda sobre un pedido</option>
                <option value="catalogo">Consulta de catálogo</option>
                <option value="foto">Buscar camiseta por foto</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {tipoConsulta === "foto" && (
              <fieldset className="campo-form">
                <legend>Buscar camiseta por foto</legend>

                <label htmlFor="foto-camiseta">
                  Sube una imagen de la camiseta
                </label>

                <input
                  id="foto-camiseta"
                  name="foto-camiseta"
                  type="file"
                  accept="image/*"
                  aria-describedby="ayuda-foto"
                  onChange={(e) =>
                    setFotoSeleccionada(e.target.files.length > 0)
                  }
                />

                <p id="ayuda-foto" className="ayuda-campo">
                  Añade una imagen clara para ayudarte mejor.
                </p>
              </fieldset>
            )}

            <div className="campo-form">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
            </div>

            {respuesta && (
              <p
                className={
                  tipoRespuesta === "error"
                    ? "mensaje-formulario mensaje-error"
                    : "mensaje-formulario mensaje-exito"
                }
                role="status"
                aria-live="polite"
              >
                {respuesta}
              </p>
            )}

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </form>

          <aside className="contacto-info">
            <h3>Información de contacto</h3>
            <p>
              Intentamos responder a todas las consultas en un plazo de
              <strong> 24–48 horas</strong> en días laborables.
            </p>

            <p>
              <strong>Email:</strong> soporte@laelegante.com
            </p>

            <p>
              <strong>Horario:</strong> Lunes a viernes, 10:00–18:00
            </p>

            <h3>Consejos para buscar por foto</h3>
            <ul>
              <li>Sube una foto donde se vea bien la camiseta.</li>
              <li>Indica si recuerdas el año aproximado o el torneo.</li>
              <li>Si es de club, dinos la liga; si es de selección, el país.</li>
            </ul>
          </aside>
        </div>
      </section>

      <FaqJQuery />
    </>
  );
}

export default Contacto;