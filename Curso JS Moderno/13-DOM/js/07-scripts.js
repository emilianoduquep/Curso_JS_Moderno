// vamos a ver como cambiar el color del encabezado 
/*
const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'blue';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

*/

// vamos a ver como agregar una clase al encabezado
const card = document.querySelector('.card');
console.log(card.classList);

card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);

card.classList.remove('segunda-clase');
console.log(card.classList);