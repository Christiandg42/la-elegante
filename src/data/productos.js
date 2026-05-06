import alaves from "../assets/images/alaves.jpg";
import alemania from "../assets/images/alemania.jpg";
import fiore from "../assets/images/fiore.jpg";
import ganha from "../assets/images/ganha.jpg";
import frankfurt from "../assets/images/frankfurt.jpg";
import leeds from "../assets/images/leeds.jpg";
import milan from "../assets/images/milan.jpg";
import torino from "../assets/images/torino.jpg";
import espana from "../assets/images/espana.jpg";
import fulham from "../assets/images/fulham.jpg";
import malaga from "../assets/images/malaga.jpg";
import werder from "../assets/images/werder.jpg";
import belgica from "../assets/images/belgica.jpg";
import francia from "../assets/images/francia.jpg";
import grecia from "../assets/images/grecia.jpg";

const productos = [
  {
    slug: "alaves-local-24-25",
    imagen: alaves,
    alt: "Camiseta local azul del Alavés 2024/2025",
    nombre: "Alavés – Local 24/25",
    liga: "España",
    tipo: "Moderna",
    temporada: "2024/2025",
    descripcion:
      "Camiseta local del Alavés para la temporada 2024/2025. Diseño moderno, tejido cómodo y estilo pensado para aficionados.",
    precioNumero: 79.9,
    precio: "79,90 €",
  },
  {
    slug: "alemania-retro",
    imagen: alemania,
    alt: "Camiseta retro de la selección de Alemania",
    nombre: "Selección Alemania retro",
    liga: "Selección",
    tipo: "Retro",
    temporada: "Colección retro",
    descripcion:
      "Camiseta retro de la selección alemana, inspirada en diseños clásicos para coleccionistas.",
    precioNumero: 89.9,
    precio: "89,90 €",
  },
  {
    slug: "fiorentina-local",
    imagen: fiore,
    alt: "Camiseta de la Fiorentina",
    nombre: "Fiorentina – Local",
    liga: "Italia",
    tipo: "Especial",
    temporada: "Colección especial",
    descripcion:
      "Camiseta de la Fiorentina con diseño elegante y detalles inspirados en el fútbol italiano.",
    precioNumero: 84.9,
    precio: "84,90 €",
  },
  {
    slug: "ghana-2010",
    imagen: ganha,
    alt: "Camiseta de la selección de Ghana",
    nombre: "Ghana – 2010",
    liga: "Selección",
    tipo: "Retro",
    temporada: "2010",
    descripcion:
      "Camiseta retro de Ghana inspirada en una etapa histórica de la selección africana.",
    precioNumero: 99.9,
    precio: "99,90 €",
  },
  {
    slug: "frankfurt-local",
    imagen: frankfurt,
    alt: "Camiseta local del Frankfurt",
    nombre: "Frankfurt – Local",
    liga: "Alemania",
    tipo: "Moderna",
    temporada: "Colección moderna",
    descripcion:
      "Camiseta local del Frankfurt con diseño actual y acabado deportivo.",
    precioNumero: 89.9,
    precio: "89,90 €",
  },
  {
    slug: "leeds-local",
    imagen: leeds,
    alt: "Camiseta del Leeds",
    nombre: "Leeds – Local",
    liga: "Inglaterra",
    tipo: "Especial",
    temporada: "Colección especial",
    descripcion:
      "Camiseta del Leeds con diseño especial para seguidores de la Premier League.",
    precioNumero: 79.9,
    precio: "79,90 €",
  },
  {
    slug: "ac-milan-third-24-25",
    imagen: milan,
    alt: "Camiseta negra del AC Milan",
    nombre: "AC Milan – Third 24/25",
    liga: "Italia",
    tipo: "Especial",
    temporada: "2024/2025",
    descripcion:
      "Camiseta especial del AC Milan con diseño negro, detalles retro y tejido transpirable.",
    precioNumero: 89.9,
    precio: "89,90 €",
  },
  {
    slug: "torino-local-25-26",
    imagen: torino,
    alt: "Camiseta Torino",
    nombre: "Torino – Local 25/26",
    liga: "Italia",
    tipo: "Moderna",
    temporada: "2025/2026",
    descripcion:
      "Camiseta local del Torino con diseño actual y estilo clásico del fútbol italiano.",
    precioNumero: 79.9,
    precio: "79,90 €",
  },
  {
    slug: "seleccion-espanola",
    imagen: espana,
    alt: "Camiseta de la selección española",
    nombre: "Selección Española",
    liga: "Selección",
    tipo: "Moderna",
    temporada: "Colección actual",
    descripcion:
      "Camiseta de la selección española pensada para aficionados y coleccionistas.",
    precioNumero: 89.9,
    precio: "89,90 €",
  },
  {
    slug: "fulham-third",
    imagen: fulham,
    alt: "Camiseta alternativa negra del Fulham",
    nombre: "Fulham – Third",
    liga: "Inglaterra",
    tipo: "Especial",
    temporada: "Colección especial",
    descripcion:
      "Camiseta alternativa del Fulham con diseño negro y detalles modernos.",
    precioNumero: 84.9,
    precio: "84,90 €",
  },
  {
    slug: "malaga-clasico",
    imagen: malaga,
    alt: "Camiseta clásica del Málaga",
    nombre: "Málaga clásico",
    liga: "España",
    tipo: "Retro",
    temporada: "Colección retro",
    descripcion:
      "Camiseta clásica del Málaga inspirada en diseños históricos del club.",
    precioNumero: 119.9,
    precio: "119,90 €",
  },
  {
    slug: "werder-bremen-retro",
    imagen: werder,
    alt: "Camiseta clásica del Werder Bremen",
    nombre: "Werder Bremen",
    liga: "Alemania",
    tipo: "Retro",
    temporada: "Colección retro",
    descripcion:
      "Camiseta retro del Werder Bremen, pensada para seguidores de camisetas históricas.",
    precioNumero: 99.9,
    precio: "99,90 €",
  },
  {
    slug: "belgica-retro",
    imagen: belgica,
    alt: "Camiseta retro de la selección de Bélgica",
    nombre: "Selección Bélgica",
    liga: "Selección",
    tipo: "Retro",
    temporada: "Copa del Mundo",
    descripcion:
      "Camiseta retro de Bélgica inspirada en diseños clásicos de torneos internacionales.",
    precioNumero: 109.9,
    precio: "109,90 €",
  },
  {
    slug: "francia-2010",
    imagen: francia,
    alt: "Camiseta retro de la selección de Francia",
    nombre: "Selección Francia",
    liga: "Selección",
    tipo: "Retro",
    temporada: "Edición 2010",
    descripcion:
      "Camiseta de la selección francesa edición 2010, pensada para aficionados y coleccionistas.",
    precioNumero: 99.9,
    precio: "99,90 €",
  },
  {
    slug: "grecia-eurocopa",
    imagen: grecia,
    alt: "Camiseta retro de la selección de Grecia",
    nombre: "Selección Grecia",
    liga: "Selección",
    tipo: "Retro",
    temporada: "Eurocopa",
    descripcion:
      "Camiseta retro de Grecia inspirada en una etapa histórica de la selección.",
    precioNumero: 89.9,
    precio: "89,90 €",
  },
  {
    slug: "ac-milan-retro",
    imagen: milan,
    alt: "Camiseta negra clásica del AC Milan",
    nombre: "AC Milan retro",
    liga: "Italia",
    tipo: "Retro",
    temporada: "Final histórica",
    descripcion:
      "Camiseta retro del AC Milan inspirada en diseños clásicos del club italiano. Modelo pensado para coleccionistas y aficionados al fútbol histórico.",
    precioNumero: 129.9,
    precio: "129,90 €",
  },

];

export default productos;