// Traversing the DOM: es la forma como recorremos el DOM.

// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco tambien son nodos o elementos
// console.log(navegacion.children); // solo los elementos HTML


//Traversing de padre a hijos
const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent); 

// card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM';

// card.children[0].src = 'img/hacer2.jpg';


// Traversing the DOM de hijos a padres
// console.log(card.parentNode); // accede al nodo padre
// console.log(card.parentElement.parentElement); // accede al elemento padre

// Traversing the DOM entre hermanos
// console.log(card.nextElementSibling); // accede al siguiente elemento hermano
// console.log(card.nextElementSibling.nextElementSibling);


// este es para ver el elemeto hermano anterior
// const ultimoCard = document.querySelector('.card:nth-child(4)');    
// console.log(ultimoCard.previousElementSibling); // accede al elemento hermano anterior
// console.log(ultimoCard.previousElementSibling.previousElementSibling);

//
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); // primer elemento hijo
console.log(navegacion.lastElementChild); // ultimo elemento hijo
