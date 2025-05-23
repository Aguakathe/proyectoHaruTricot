const productos = [
  {
    name: "Pulpo Pequeño",
    price: 13500,
    size: "6 cm aprox",
    description: "Variedad de colores disponible",
    image: "/imgHaruT/pulpoPequeño.jpg"
  },
  {
    name: "Dinosarurio bebé",
    price: 14000,
    size: "10 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/dinoRosa.jpg"
  },
  {
    name: "Pulpo Grande",
    price: 14000,
    size: "7 cm aprox",
    description: "¡Listo para entrega en 2 colores! También puedes elegir entre una amplia variedad de tonos personalizados.",
    image: "/imgHaruT/pulpoGrande.jpg"
  },
  {
    name: "Medusa",
    price: 18000,
    size: "10 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/medusa.jpg"
  },
  {
    name: "Capibara Pochita",
    price: 17000,
    size: "7 cm aprox de alto",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/capibaraPochita.jpg"
  },
  {
    name: "Mini Osito",
    price: 17800,
    size: "7 cm aprox de alto",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/miniOsito.jpg"
  },
  {
    name: "Gato Pequeño",
    price: 14000,
    size: "6 cm aprox de alto",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/gatoPeque.jpg"
  },
  {
    name: "Conejo Pequeño",
    price: 14500,
    size: "13 cm aprox de alto",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/conejoBlanco.jpg"
  },
  {
    name: "Serpiente",
    price: 15000,
    size: "70 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/serpiente.jpg"
  },
  {
    name: "Foca",
    price: 19000,
    size: "8 cm de alto, 16 cm de largo aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/focaBlancadeLado.jpg"
  },
  {
    name: "Pato con Sombrero de Rana",
    price: 28000,
    size: "12 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/patoRana.jpg"
  },
  {
    name: "Bebé Búho",
    price: 21500,
    size: "12 cm aprox",
    description: "Se puede hacer en diferente color",
    image: "/imgHaruT/bebeBuho.jpg"
  },
  {
    name: "Mini Bouquet",
    price: 25500,
    size: "9 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/miniRamitoFlores.jpg"
  },
  {
    name: "Chihuahua",
    price: 30000,
    size: "12 cm aprox",
    description: "Aunque el modelo base es un Chihuahua, ¡puedo crear a tu mascota favorita! Golden, Husky u otra raza, con sus colores y detalles únicos. El precio puede variar según la personalización.",
    image: "/imgHaruT/chihuahua.jpg"
  },
  {
    name: "Tortuga",
    price: 30000,
    size: "7 cm de alto, 21 cm de largo aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/tortugaVerde.jpg"
  },
  {
    name: "Gato Panzón",
    price: 30500,
    size: "12 cm alto, 24 cm largo aprox",
    description: "Se puede personalizar",
    image: "/imgHaruT/gatoBlancodeLado.jpg"
  },
  {
    name: "Conejo Grande",
    price: 35000,
    size: "18 cm aprox",
    description: "El corazón y los moños se pueden cambiar de color",
    image: "/imgHaruT/conejoGrande.jpg"
  },
  {
    name: "Capibara con Mochila de Tortuga",
    price: 43000,
    size: "25 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/capibaraMochila.jpg"
  },
  {
    name: "Oso",
    price: 43000,
    size: "25 cm aprox de alto",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/oso.jpg"
  },
  {
    name: "Stitch",
    price: 48000,
    size: "25 cm aprox",
    description: "Variedad de colores disponibles",
    image: "/imgHaruT/stitch.jpg"
  },
  {
    name: "Stitch Rosa",
    price: 52000,
    size: "25 cm aprox",
    description: "Variedad de colores disponible",
    image: "/imgHaruT/stitchRosa.jpg"
  },
  {
    name: "Dinosaurio",
    price: 67000,
    size: "28 cm aprox de alto",
    description: "Se puede hacer en el color que desees.",
    image: "/imgHaruT/brontoRosa.jpg"
    
  },
  {
    name: "Vaca",
    price: 78000,
    size: "30 cm aprox de alto",
    description: "Se puede hacer en blanco y negro",
    image: "/imgHaruT/vaca.jpg"
  }
];

//Funciones
const container = document.getElementById("productContainer");

productos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="card-back">
        <h3>${p.name}</h3>
        <p class="price">$${p.price.toLocaleString()}</p>
        <p>${p.size}</p>
        <p>${p.description || ' '}</p>
        <a href="contacto.html">Contáctanos</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});