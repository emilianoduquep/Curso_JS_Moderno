// querySelector te va a retornar maximo un solo elemento.
const card = document.querySelector('.card');
console.log(card);

// podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario pero esta vez  usando su id
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Tambien se pueden seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);