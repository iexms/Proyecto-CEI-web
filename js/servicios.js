'use strict'

// Efecto de escritura (typing effect)
const text = "Cocina creativa y asesoría profesional para lo que necesites.";
let i = 0;
const typingText = document.querySelector(".titulo__typing");

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80); // Velocidad de escritura
  } else {
    // Activar el cursor parpadeante al final de la escritura
    typingText.style.borderRight = "4px solid var(--color-brown)";
    // Hacer que el cursor parpadee después de unos segundos
    setTimeout(function () {
      typingText.style.animation = "blink-caret 0.75s step-end infinite";
    }, 150);
    // Desaparecer el cursor después de 2 segundos
    setTimeout(function () {
      typingText.style.borderRight = "none";
      typingText.style.animation = "none";
    }, 2000);
  }
}

// ⏱ Iniciar después de 2 segundos
setTimeout(typeWriter, 2200);

//Carrusel con flechas y automático
const prevButton = document.querySelector('.testimonios__arrow--prev');
const nextButton = document.querySelector('.testimonios__arrow--next');
const container = document.querySelector('.testimonios__container');
let index = 0;

const items = document.querySelectorAll('.testimonios__item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -(index * 100);
    container.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', function() {
    index = (index > 0) ? index - 1 : totalItems - 1;
    updateCarousel();
});

nextButton.addEventListener('click', function() {
    index = (index < totalItems - 1) ? index + 1 : 0;
    updateCarousel();
});

setInterval(() => {
    index = (index < totalItems - 1) ? index + 1 : 0;
    updateCarousel();
  }, 7000);