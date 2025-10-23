const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Vamos a usar el .find() Esto va a generar un nuevo arreglo basado en la condicion que se esta revisando.

// Con forEach
let resultado = [];
carrito.forEach( (producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index]
    }
});

console.log(resultado);

// Ahora vamos a hacer lo mismo con .find()
const resultado2 = carrito.find( producto => producto.precio === 100);
console.log('El resultado2: ',resultado2);