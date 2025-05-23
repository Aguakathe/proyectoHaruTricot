// Selecciona el botón del menú hamburguesa (el ícono con las tres líneas)
const toggle = document.getElementById('menu-toggle');

// Selecciona el menú de navegación que se va a mostrar u ocultar
const navbar = document.getElementById('navbar');

// Agrega un "escuchador de eventos" al botón, que se activa cuando se hace clic
toggle.addEventListener('click', () => {
  
  // Alterna (agrega o quita) la clase 'active' en el menú de navegación
  // Si la clase 'active' está presente, la quita. Si no está, la agrega.
  // Esto se usa para mostrar u ocultar el menú, dependiendo del estado
  navbar.classList.toggle('active');
});