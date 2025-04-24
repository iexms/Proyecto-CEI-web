'use strict'

// Definición de la clase HeaderComponent, que extiende de HTMLElement para crear un componente de encabezado personalizado.
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        // Adjunta un Shadow DOM al componente para encapsular el contenido.
        this.attachShadow({ mode: 'open' });
    }

    // Método que se ejecuta cuando el componente se conecta al DOM.
    connectedCallback() {
        // Llama al método render() para dibujar el contenido del componente.
        this.render();
        // Agrega los eventos necesarios para la interacción.
        this.addEventListeners();
        // Resalta la página actual en el menú de navegación.
        this.highlightCurrentPage();
    }

    // Función que renderiza el contenido del header
    render() {
        const template = `
        <style>
            * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

:root {
    font-size: 100%;
}

html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family: 'Arsenal';
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

li {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
    display: block;
}

p a {
    display: inline;
    text-decoration: underline;
}

img,
picture,
video,
iframe,
svg {
    display: block;
    width: 100%;
}

svg {
    color: currentColor;
}

form,
input,
label,
select,
option,
textarea {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    display: block;
    width: 100%;
    background-color: transparent;
}

button {
    background-color: transparent;
}

.header {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    padding: 0 2rem;
}

.header__logo {
    width: 20%;
}

.header__nav {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5rem;
    font-size: var(--font-medium);
}

a.header__item:hover {
    color: var(--color-brown);
}

a.menu--active {
    color: var(--color-brown);
    font-weight: bold;
}

.menu--active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: var(--color-brown);
    transform: scaleX(1);
    transition: transform 0.3s ease;
}

a:hover::after {
    transform: scaleX(1.2);
}

.menu__bttn span {
    display: none;
    width: 23px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: var(--color-secondary);
    border-radius: 3px;
    z-index: 1;
    cursor: pointer;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                opacity 0.55s ease;
}

.menu__bttn--active-first-span {
    opacity: 1;
    transform: rotate(45deg) translate(-1px, -2px);
    background: var(--color-secondary);
}

.menu__bttn--active-second-span {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

.menu__bttn--active-third-span {
    transform: rotate(-45deg) translate(3px, -4px);
}

.menu--active {
    transform: translateX(0);
    opacity: 1;
}

.menu {
    display: none;
}


@media (max-width: 1020px) {
    .header__logo {
        width: 30%;
    }

    .menu__bttn span {
        display: block;
    }

    .header__nav {
        display: none;
    }

    .header__logo {
        margin: auto;
    }

    .header {
        flex-flow: row-reverse wrap;
    }

    a.menu--active::after {
        display: none;
    }

    .menu {
        width: 100%;
        max-height: 0;
        overflow-x: hidden;
        background-color: white;
        padding-left: 5px;
        display: block;
        flex-flow: column wrap;
        opacity: 0;
        transition: max-height 0.5s ease, opacity 0.3s ease, padding-top 0.5s ease;
        padding-top: 0;
    }

    .menu li {
        padding-bottom: 10px;
        text-transform: uppercase;
        font-size: var(--font-small);
    }

    .menu li a:hover {
        color: var(--color-brown);
    }

    .menu li:after {
        display: block;
        content: "";
        width: 100%;
        min-height: 1px;
        background-color: rgb(0,0,0, 0.5);
        margin-top: 15px;
    }

    .menu li:last-child:after {
        display: none;
    }

    .menu--expand{
        max-height: 250px;
        opacity: 1;
        padding-top: 50px;
    }
}
        </style>

        <header class="header">
    <h1 class="header__logo">
        <a href="index.html" title="Logo: Sabor y Contexto">
            <img src="assets/logo.webp" alt="Logo: Sabor y Contexto" width= "700" height= "100" style="width:100%;height:auto;"> </a>
    </h1>

    <ul class="header__nav">
        <li class="header__item">
            <a href="index.html" title="Inicio"> Inicio </a>
        </li>
        <li class="header__item">
            <a href="blog.html" title="Blog"> Blog </a>
        </li>
        <li class="header__item">
            <a href="servicios.html" title="Servicios"> Servicios </a>
        </li>
        <li class="header__item">
            <a href="acerca-de.html" title="Acerca de"> Acerca de </a>
        </li>
        <li class="header__item">
            <a href="contacto.html" title="Contacto"> Contacto </a>
        </li>
    </ul>

    <button class="menu__bttn" title="Abrir o cerrar menu">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <ul class="menu">
        <li>
            <a href="index.html" title="Inicio"> Inicio </a>
        </li>
        <li>
            <a href="blog.html" title="Blog"> Blog </a>
        </li>
        <li>
            <a href="servicios.html" title="Servicios"> Servicios </a>
        </li>
        <li>
            <a href="acerca-de.html" title="Acerca de"> Acerca de </a>
        </li>
        <li>
            <a href="contacto.html" title="Contacto"> Contacto </a>
        </li>
    </ul>
</header>
        `;
        this.shadowRoot.innerHTML = template;
    }

     // Método para agregar los event listeners al componente
    addEventListeners() {
        const boton = this.shadowRoot.querySelector('.menu__bttn');
        const spans = this.shadowRoot.querySelectorAll('.menu__bttn span');
        const menu = this.shadowRoot.querySelector('.menu');

        // Event listener para el botón del menú (hamburguesa)
        boton.addEventListener('click', () => {
            // Se alternan las clases para animar las líneas del botón de hamburguesa
            spans[0].classList.toggle("menu__bttn--active-first-span"); 
            spans[1].classList.toggle("menu__bttn--active-second-span");
            spans[2].classList.toggle("menu__bttn--active-third-span");

            // Alterna la visibilidad del menú
            menu.classList.toggle("menu--active");
            menu.classList.toggle("menu--expand");
        });
    }

    // Método para resaltar la página actual en el menú
    highlightCurrentPage() {
        const links = this.shadowRoot.querySelectorAll('.header__item a, .menu a');
        const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual

        links.forEach(link => {
            const linkPage = link.getAttribute("href");

            // Si la página actual es la página de inicio (index.html), resalta ese enlace
            // Normalizamos la comparación: si la página actual es vacía (home), la comparamos con "index.html"
            if (currentPage === "" && linkPage === "index.html") {
                link.classList.add("menu--active");
                link.setAttribute("aria-current", "page");
            } else if (linkPage === currentPage) {
                link.classList.add("menu--active");
                link.setAttribute("aria-current", "page");
            }
        });
    }


}

// Registramos el componente personalizado con el nombre 'header-component'
customElements.define('header-component', HeaderComponent);
