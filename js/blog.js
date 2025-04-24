'use strict'

// Cargar los datos del archivo JSON que contiene los posts
fetch('posts/posts.json')
    .then(response => response.json()) // Convertir la respuesta en formato JSON
    .then(data => {
        const posts = data.posts; // Extraer los posts del archivo JSON
        const postList = document.querySelector('.post-list'); // Contenedor donde se mostrarán los posts
        const pageTitle = document.querySelector('.categorias__titulo'); // Título de la página
        const categoryFilter = document.querySelector('.categorias__filtro-lista'); // Lista de categorías (botones)
        const selectFilter = document.querySelector('.categorias__filtro-select'); // Filtro de selección (select)

        const popup = document.querySelector('.popup'); // Contenedor del popup
        const popupOverlay = document.querySelector('.popup__overlay'); // Fondo del popup
        const closePopupBtn = document.querySelector('.popup__menu-bttn'); // Botón de cierre del popup
        const popupContent = document.querySelector('.popup__content'); // Contenedor del contenido dentro del popup
        const categoryButtons = document.querySelectorAll('.categorias__filtro-lista .categorias__filtro-item'); // Botones de categorías

        let activeCategoryClass = 'all'; // Variable para almacenar la categoría activa

        // Función para mostrar los posts filtrados y el título de la categoría
        function displayPosts(filteredPosts, categoryTitle) {
            postList.innerHTML = ''; // Limpiar el contenido de la lista de posts
            filteredPosts.forEach((post, index) => {
                // Crear un nuevo artículo (post) y añadirle contenido
                const postItem = document.createElement('article');
                postItem.classList.add('post-item');
                postItem.innerHTML = `
                    <img src="${post.image_url}" alt="${post.title}" ${index >= 3 ? 'loading="lazy"' : ''}>
                    <section class="post-card">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-info">${post.publish_date} ·  ${post.reading_time}</p>
                        <p class="post-description">${post.description}</p>
                    </section>
                `;
                // Añadir un evento para abrir el popup con el contenido del post al hacer clic
                postItem.addEventListener('click', () => openPopup(post));
                postList.appendChild(postItem); // Añadir el post al contenedor
            });

            // Actualizar el título de la categoría (o poner "Todos los posts" si no se filtra por categoría)
            pageTitle.textContent = categoryTitle || "Todos los posts";
        }

        // Función para abrir el popup y cargar el contenido del post
        function openPopup(post) {
            // Cargar el contenido del post desde su URL
            fetch(post.content_url)
                .then(response => response.text()) // Obtener el contenido como texto
                .then(content => {
                    popupContent.innerHTML = content; // Insertar el contenido en el popup
                    popup.style.display = 'flex'; // Mostrar el popup
                    popupOverlay.style.display = 'block'; // Mostrar el fondo del popup
                })
                .catch(err => {
                    popupContent.innerHTML = '<p>Error al cargar el contenido.</p>'; // Mostrar un mensaje de error si no se puede cargar
                    popup.style.display = 'flex'; // Mostrar el popup
                    popupOverlay.style.display = 'block'; // Mostrar el fondo del popup
                });
        }

        // Evento para cerrar el popup al hacer clic en el botón de cierre
        closePopupBtn.addEventListener('click', () => {
            popup.style.display = 'none'; // Ocultar el popup
            popupOverlay.style.display = 'none'; // Ocultar el fondo del popup
        });

        // Función para actualizar los controles (botones y select) según la categoría activa
        function updateControls() {
            // Actualizar botones de lista (ul) con la categoría activa
            categoryButtons.forEach(btn => {
                btn.classList.toggle('categorias__filtro--active', btn.classList.contains(`categorias__filtro-item--${activeCategoryClass}`));
            });

            // Actualizar el select para reflejar la categoría activa
            Array.from(selectFilter.options).forEach(option => {
                option.selected = option.classList.contains(`categorias__filtro-item--${activeCategoryClass}`);
            });
        }

        // Evento para filtrar los posts al hacer clic en los botones de la lista de categorías
        categoryFilter.addEventListener('click', (e) => {
            // Verificar que el elemento clickeado es un botón de categoría
            if (e.target.classList.contains('categorias__filtro-item')) {
                // Obtener la clase de la categoría activa
                activeCategoryClass = e.target.classList[1].split('--')[1]; 
                const categoryTitle = e.target.textContent; // Obtener el título de la categoría

                // Filtrar los posts según la categoría activa
                const filteredPosts = activeCategoryClass && activeCategoryClass !== 'all'
                    ? posts.filter(post => post.category.toLowerCase().includes(activeCategoryClass.toLowerCase()))
                    : posts;

                displayPosts(filteredPosts, categoryTitle); // Mostrar los posts filtrados
                updateControls(); // Actualizar los controles de la lista y el select
            }
        });

        // Evento para filtrar los posts cuando se selecciona una categoría desde el select
        selectFilter.addEventListener('change', (e) => {
            const selectedOption = e.target.options[e.target.selectedIndex]; // Obtener la opción seleccionada
            activeCategoryClass = selectedOption.classList[1].split('--')[1]; // Obtener la categoría seleccionada
            const categoryTitle = selectedOption.textContent; // Obtener el título de la categoría

            // Filtrar los posts según la categoría activa
            const filteredPosts = activeCategoryClass && activeCategoryClass !== 'all'
                ? posts.filter(post => post.category.toLowerCase().includes(activeCategoryClass.toLowerCase()))
                : posts;

            displayPosts(filteredPosts, categoryTitle); // Mostrar los posts filtrados
            updateControls(); // Actualizar los controles de la lista y el select
        });

        // Mostrar todos los posts por defecto al cargar la página
        displayPosts(posts);
        updateControls(); // Activar "Todos los posts" por defecto

    })
    .catch(err => {
        console.error('Error al cargar los posts: ', err); // Mostrar un error si no se pueden cargar los posts
    });
