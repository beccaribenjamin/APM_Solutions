// 1. Select the HTML target element
const button = document.querySelector('.menu-boton');

// Mover la variable FUERA de la función para que no se reinicie
let veces = 0;

// 2. Define the callback logic
function handleClick(event) {
  // Sumar 1 en cada clic
  veces++; 
  
  console.log('Tocaste el boton!', event.target);

  // Ahora sí va a superar el 3
  if (veces > 3) {
    console.log('Deja de joder, comilon', event.target);
  }
}

// 3. Attach the event listener
button.addEventListener('click', handleClick);
