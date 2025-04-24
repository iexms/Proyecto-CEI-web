'use strict'

/* ==========================================================================
   PRIMERA SECCIÓN: DETECTAR EL SCROLL Y ACHICAR EL TÍTULO
   Cuando el usuario hace scroll en la página, el tamaño del título (h2) se ajusta.
   ========================================================================== */

// Detectar scroll para achicar el h2
window.addEventListener('scroll', function() {
    const titulo = document.querySelector('.titulo__text'); // Seleccionar el elemento h2
    const scrollPosition = window.scrollY; // Obtener la posición del scroll

    // Si la posición del scroll es mayor que 50, se aplica la clase 'titulo__text--shrink' (reduce el tamaño)
    if (scrollPosition > 50) {
        titulo.classList.add('titulo__text--shrink');
    } else {
        // Si el scroll es menor o igual a 50, se elimina la clase y se vuelve al tamaño original
        titulo.classList.remove('titulo__text--shrink');
    }
});
 
/* ==========================================================================
   SEGUNDA SECCIÓN: CREAR PARTÍCULAS FLOTANTES
   Esta sección genera partículas flotantes de forma aleatoria dentro de un contenedor.
   ========================================================================== */

// Crear partículas flotantes
const particlesContainer = document.querySelector('.titulo__particles'); // Contenedor de las partículas

// Crear 40 partículas de forma aleatoria
for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div'); // Crear un div para cada partícula
    particle.classList.add('titulo__particle'); // Añadir una clase CSS para estilizarla

    // Generar tamaños aleatorios entre 2px y 6px
    const size = Math.random() * 4 + 2; 
    // Generar posiciones aleatorias en el eje X
    const posX = Math.random() * window.innerWidth;
    // Duración de la animación aleatoria entre 5 y 15 segundos
    const duration = Math.random() * 10 + 5;

    // Establecer el tamaño y la posición de la partícula
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.animationDuration = `${duration}s`; // Duración de la animación

    // Añadir la partícula al contenedor de partículas
    particlesContainer.appendChild(particle);
}

/* ==========================================================================
   TERCERA SECCIÓN: CARRUSEL DE PLATOS
   Implementación de un carrusel con flechas de navegación y transición automática.
   ========================================================================== */

// Seleccionar botones de navegación (anterior y siguiente)
const prevButton = document.querySelector('.platos__arrow--prev');
const nextButton = document.querySelector('.platos__arrow--next');
const container = document.querySelector('.platos__list'); // Contenedor de los elementos del carrusel
let index = 0; // Índice de la imagen actual

// Seleccionar todos los elementos del carrusel
const items = document.querySelectorAll('.platos__item');
const totalItems = items.length; // Obtener el total de elementos del carrusel

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const offset = -(index * 100); // Calcular el desplazamiento horizontal
    container.style.transform = `translateX(${offset}%)`; // Aplicar el desplazamiento en el contenedor
}

// Evento para mover al elemento anterior cuando se hace clic en la flecha izquierda
prevButton.addEventListener('click', function() {
    // Si el índice es mayor que 0, decrementamos el índice, sino volvemos al último elemento
    index = (index > 0) ? index - 1 : totalItems - 1;
    updateCarousel(); // Actualizar la vista del carrusel
});

// Evento para mover al siguiente elemento cuando se hace clic en la flecha derecha
nextButton.addEventListener('click', function() {
    // Si el índice es menor que el total de elementos menos 1, incrementamos el índice, sino volvemos al primer elemento
    index = (index < totalItems - 1) ? index + 1 : 0;
    updateCarousel(); // Actualizar la vista del carrusel
});

// Configurar el carrusel para que se mueva automáticamente cada 5 segundos
setInterval(() => {
    // Incrementar el índice y actualizar la vista del carrusel
    index = (index < totalItems - 1) ? index + 1 : 0;
    updateCarousel();
}, 5000);
