'use strict'

// Definición de un componente personalizado de tipo footer
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        // Adjuntamos un Shadow DOM abierto para encapsular el contenido y estilos del footer
        this.attachShadow({ mode: 'open' });
    }

    // Función que renderiza el contenido del footer
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

html {
    scroll-behavior: smooth;
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


.footer {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 5rem;
    margin-bottom: 1.5rem;
}

.footer span {
    width: 50%;
    min-height: 2px;
    background-color: #71552E;
}

.footer__container {
    width: 90%;
    display: flex;
    padding-top: 5rem;
    justify-content: space-between;
    align-items: flex-end;
}

.footer__logo {
    width: 50%;
    margin-bottom: 1rem;
}

.footer__redes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    visibility: visible;
}


@media (max-width: 1020px) {

    .footer__container {
        width: 90%;
        display: flex;
        flex-direction: column;
        padding-top: 5rem;
        justify-content: center;
        align-items: center;
    }

    .footer__redes {
        margin-top: 1.5rem;
    }
}
 </style>

 <footer class="footer">

    <span></span>

    <div class="footer__container">

        <div class="footer__info">
            <h2 class="footer__logo">
                <a href="index.html" title="Logo: Sabor y Contexto">
                    <img src="assets/logo.webp" alt="Logo: Sabor y Contexto" loading="lazy" width= "700" height= "100" style="width:100%;height:auto;"">
                </a>
            </h2>
            <div class="footer__copy"> Copyright &#64; 2025 SaboryContexto. Todos los derechos reservados.
            </div>
        </div>

        <ul class="footer__redes">
            <li class="footer__red">
                <a href="#" title="Enlace a Pinterest">
                    <svg width="20" height="20">
                        <use xlink:href="#icon-pinterest"></use>
                    </svg>
                </a>
            </li>
            <li class="footer__red">
                <a href="#" title="Enlace a Twitter">
                    <svg width="20" height="20">
                        <use xlink:href="#icon-twitter"></use>
                    </svg>
                </a>
            </li>
            <li class="footer__red">
                <a href="#" title="Enlace a Instagram">
                    <svg width="20" height="20">
                        <use xlink:href="#icon-instagram"></use>
                    </svg>
                </a>
            </li>
            <li class="footer__red">
                <a href="#" title="Enlace a Facebook">
                    <svg width="20" height="20">
                        <use xlink:href="#icon-facebook"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</footer>

<svg style="display:none;">
    <!-- Icono Pinterest -->
    <symbol id="icon-pinterest" viewBox="0 0 16 16">
        <path
            d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
    </symbol>

    <!-- Icono Twitter -->
    <symbol id="icon-twitter" viewBox="0 0 16 16">
        <path
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
    </symbol>

    <!-- Icono Instagram -->
    <symbol id="icon-instagram" viewBox="0 0 16 16">
        <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </symbol>

    <!-- Icono Facebook -->
    <symbol id="icon-facebook" viewBox="0 0 16 16">
        <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
    </symbol>
</svg>
        `;
        // Establecemos el contenido dentro del Shadow DOM
        this.shadowRoot.innerHTML = template;
    }

    // Ejecutamos la función de renderizado cuando se instancia el componente
    connectedCallback() {
        this.render();
    }
}

// Registramos el componente personalizado con el nombre 'footer-component'
customElements.define('footer-component', FooterComponent);
