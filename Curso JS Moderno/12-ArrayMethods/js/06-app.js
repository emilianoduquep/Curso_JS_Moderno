const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Every retorna un true si TODOS los elementos cumplen con la condicion
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);

// por otro lado si quiero que cumpla ALMENOS UNO la condicion, se usa some
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);