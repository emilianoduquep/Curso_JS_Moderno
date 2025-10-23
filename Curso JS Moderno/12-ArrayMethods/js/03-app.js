const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Supongamos que quiero sumar todos los valores del carrito de compras
let total = 0;
carrito.forEach( producto => total+= producto.precio);
console.log('El total a pagar es: ', total);

// Esto mismo se puede hacer con un .reduce()
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 100);// el ultimo valor es la semilla inicial conla que empiza la suma.
console.log('El resultado usando .reduce() es: ',resultado);