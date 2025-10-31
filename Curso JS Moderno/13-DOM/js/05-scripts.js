// querySelectorAll()
const cards = document.querySelectorAll('.card');
console.log(cards);
console.log(cards.length);  

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no existe, querySelectorAll() regresa un nodeList vacio
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);  