document.addEventListener("DOMContentLoaded", () => {
    const menuBoton = document.getElementById("menu-boton");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Abrir y cerrar el menú Celular
    menuBoton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mostrar-menu");
        
        // Mejora de accesibilidad: indica si el menú está abierto o cerrado
        menuBoton.setAttribute("aria-expanded", isOpen);
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("mostrar-menu")) {
                navLinks.classList.remove("mostrar-menu");
                menuBoton.setAttribute("aria-expanded", "false"); // Resetea el atributo
            }
        });
    });
});