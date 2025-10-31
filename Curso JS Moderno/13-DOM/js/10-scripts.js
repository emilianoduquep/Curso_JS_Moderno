// en este punto vamos a aprender a genrar html desde javascript

const enlace = document.createElement('a');// puede ser mayusculas o minusculas

enlace.textContent = 'Nuevo Enlace'; // esto es lo que va a tener el enlace


// todo enlace tienen un href.... entonces
enlace.href = '/';

enlace.target = '_blank'; // para que se abra en una nueva pestaña

// lugo de generar el elemento, hay que insertarlo en le html

const navegacion = document.querySelector('.navegacion'); // seleccionamos donde lo vamos a insertar

navegacion.appendChild(enlace); // asi se inserta un elemento hijo dentro de otro elemento
console.log(enlace);    

// Tambien puedo controlar la posicion donde se inserta el elemento
navegacion.insertBefore(enlace, navegacion.children[1]); 


// en este ejemplo, vamos a insertar un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

// insertar los parrafos dentro del div info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';   

// crear el card
const card = document.createElement('div');
card.classList.add('card');

// insertar la imagen al card
card.appendChild(imagen);

// insertar info al card
card.appendChild(info);

// insertar el card al html
const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card);
// si lo que quieres es ponerlo al inicio
// contenedor.insertBefore(card, contenedor.firstChild);
contenedor.insertBefore(card, contenedor.children[0]);

console.log(card);  