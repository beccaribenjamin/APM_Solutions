document.addEventListener("DOMContentLoaded", () => {
    const menuBoton = document.getElementById("menu-boton");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Abrir y cerrar el menú Celular
    menuBoton.addEventListener("click", () => {
        navLinks.classList.toggle("mostrar-menu");
    });

    // Cerrar el menú automáticamente
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("mostrar-menu")) {
                navLinks.classList.remove("mostrar-menu");
            }
        });
    });
});