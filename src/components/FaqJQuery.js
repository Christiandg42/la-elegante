import { useEffect } from "react";
import $ from "jquery";

function FaqJQuery() {
  useEffect(() => {
    $(".faq-respuesta").hide();

    $(".faq-pregunta").on("click", function () {
      const respuesta = $(this).next(".faq-respuesta");
      const estaAbierta = $(this).attr("aria-expanded") === "true";

      $(".faq-pregunta").attr("aria-expanded", "false");
      $(".faq-respuesta").not(respuesta).slideUp();

      if (estaAbierta) {
        respuesta.slideUp();
        $(this).attr("aria-expanded", "false");
      } else {
        respuesta.slideDown();
        $(this).attr("aria-expanded", "true");
      }
    });

    return () => {
      $(".faq-pregunta").off("click");
    };
  }, []);

  return (
    <section className="seccion seccion-beige">
      <div className="container">
        <header className="seccion-header">
          <h2 className="seccion-titulo">Preguntas frecuentes</h2>
          <p className="seccion-subtitulo">
            Resolvemos algunas dudas habituales antes de enviar el formulario.
          </p>
        </header>

        <div className="faq">
          <article className="faq-item">
            <button
              className="faq-pregunta"
              type="button"
              aria-expanded="false"
            >
              ¿Cuánto tardáis en responder?
            </button>
            <div className="faq-respuesta">
              <p>
                Normalmente respondemos en un plazo de 24 a 48 horas laborables.
              </p>
            </div>
          </article>

          <article className="faq-item">
            <button
              className="faq-pregunta"
              type="button"
              aria-expanded="false"
            >
              ¿Cómo funciona la búsqueda por foto?
            </button>
            <div className="faq-respuesta">
              <p>
                El usuario puede subir una imagen de la camiseta y el equipo
                revisará si puede identificar el modelo o proponer una alternativa.
              </p>
            </div>
          </article>

          <article className="faq-item">
            <button
              className="faq-pregunta"
              type="button"
              aria-expanded="false"
            >
              ¿Puedo pedir una camiseta que no esté en catálogo?
            </button>
            <div className="faq-respuesta">
              <p>
                Sí. Se puede escribir desde el formulario de contacto indicando
                equipo, temporada o competición.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FaqJQuery;