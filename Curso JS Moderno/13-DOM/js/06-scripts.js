const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // este nos trae el texto visible en pantalla. En caso que este visvility: hidden; no lo va a mostrar.
console.log(encabezado.textContent); // este si lo va a encontrar aunque tenga visibility: hidden;
console.log(encabezado.innerHTML); // este nos trae el HTML interno

// con esta info, yo puedo cambiar cosas directamente en el html desde JS
const nuevoHeading = 'Nuevo Heading desde JS';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';