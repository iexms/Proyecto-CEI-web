'use strict'

/* ==========================================================================
   PRIMERA SECCIÓN: ELEMENTOS DEL DOM
   Selección de los elementos HTML que se utilizarán para mostrar el popup y su contenido.
   ========================================================================== */

const popup = document.querySelector('.popup'); // Contenedor del popup
const overlay = document.querySelector('.popup__overlay'); // Capa de fondo del popup
const content = document.querySelector('.popup__content'); // Contenedor donde se cargará el contenido
const closeBtn = document.querySelector('.popup__menu-bttn'); // Botón para cerrar el popup

/* ==========================================================================
   SEGUNDA SECCIÓN: FUNCIONES PRINCIPALES
   Funciones para abrir y cerrar el popup, y cargar contenido de forma dinámica.
   ========================================================================== */

/**
 * Función para abrir el popup y cargar el contenido desde un archivo HTML.
 * @param {string} htmlPath - Ruta del archivo HTML que se cargará en el popup.
 */
function openPopup(htmlPath) {
    console.log(`Abriendo popup con el archivo: ${htmlPath}`);

    // Mostrar el popup y el overlay
    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Cargar el contenido del archivo HTML usando fetch
    fetch(htmlPath)
        .then(res => res.text()) // Convertir la respuesta a texto
        .then(data => {
            content.innerHTML = data; // Insertar el contenido cargado en el popup
        })
        .catch(err => {
            content.innerHTML = '<p>Error al cargar el contenido.</p>'; // Mensaje de error si falla la carga
            console.error(err);
        });
}

/**
 * Función para cerrar el popup y limpiar su contenido.
 */
function closePopup() {
    overlay.style.display = 'none'; // Ocultar el fondo
    popup.style.display = 'none'; // Ocultar el popup
    content.innerHTML = ''; // Limpiar el contenido del popup
}

/* ==========================================================================
   TERCERA SECCIÓN: EVENTOS DE CIERRE
   Manejo de eventos para cerrar el popup al hacer clic en el botón de cerrar, el overlay o presionar la tecla Escape.
   ========================================================================== */

// Añadir evento al botón de cerrar
closeBtn.addEventListener('click', closePopup);

// Añadir evento al overlay para cerrar el popup al hacer clic fuera de él
overlay.addEventListener('click', closePopup);

// Cerrar el popup al presionar la tecla Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup(); // Cerrar el popup si se presiona Escape
    }
});

/* ==========================================================================
   CUARTA SECCIÓN: MAPEADO DE RUTAS DE LOS ARCHIVOS HTML
   Mapeo de los ID de los platos, gastronomías y artículos a sus respectivas rutas de archivos HTML.
   ========================================================================== */

// Mapeo de archivos HTML por ID
const popupMappings = {
    'invierno': '/posts/blog-post-churros.html',
    'primavera': '/posts/blog-post-fresas.html',
    'verano': '/posts/blog-post-gazpacho.html',
    'otono': '/posts/blog-post-calabaza.html',
    'japonesa': '/posts/blog-post-japonesa.html',
    'espanola': '/posts/blog-post-espanola.html',
    'italiana': '/posts/blog-post-italiana.html',
    'desayuno': '/posts/blog-post-desayuno.html',
    'comida': '/posts/blog-post-comida.html',
    'cena': '/posts/blog-post-cena.html',
    'restaurante': '/posts/blog-post-restaurante.html'
};

/* ==========================================================================
   QUINTA SECCIÓN: GESTIÓN DE EVENTOS DE CLIC
   Asignación de eventos de clic a los elementos de la página para abrir el popup con el contenido adecuado.
   ========================================================================== */

// PLATOS: Añadir evento de clic a los elementos de la lista de platos
const platoIds = ['invierno', 'primavera', 'verano', 'otono'];
document.querySelectorAll('.platos__list').forEach((item, index) => {
    const id = platoIds[index]; // Obtener el ID correspondiente al plato
    const url = popupMappings[id]; // Obtener la URL del archivo HTML
    item.addEventListener('click', () => {
        console.log(`Plato clickeado: ${id}`);
        openPopup(url); // Abrir el popup con el contenido correspondiente
    });
});

// GASTRONOMÍAS: Añadir evento de clic a los elementos de la lista de gastronomías
const gastroIds = ['japonesa', 'espanola', 'italiana'];
document.querySelectorAll('.gastronomias__list').forEach((item, index) => {
    const id = gastroIds[index]; // Obtener el ID correspondiente a la gastronomía
    const url = popupMappings[id]; // Obtener la URL del archivo HTML
    item.addEventListener('click', () => {
        console.log(`Gastronomía clickeada: ${id}`);
        openPopup(url); // Abrir el popup con el contenido correspondiente
    });
});

// ARTÍCULOS: Añadir evento de clic a los botones de artículos
const articuloIds = ['desayuno', 'comida', 'cena', 'restaurante'];
document.querySelectorAll('.articulos__container button').forEach((item, index) => {
    const id = articuloIds[index]; // Obtener el ID correspondiente al artículo
    const url = popupMappings[id]; // Obtener la URL del archivo HTML
    item.addEventListener('click', () => {
        console.log(`Artículo clickeado: ${id}`);
        openPopup(url); // Abrir el popup con el contenido correspondiente
    });
});
