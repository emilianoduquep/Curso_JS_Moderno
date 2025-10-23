const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Supongamos que queremos traer todos los productos que cuesten mas de 400.
// Esto genera un nuevo arreglo que cumpla con la condicion colocada....
let resultado;
resultado = carrito.filter( (producto) => {
    return producto.precio > 400
});
console.log(resultado);

// Otro uso es sacar del arreglo un producto, como cuando alguien elinina un elemento del carrito.
let resultado2;
resultado2 = carrito.filter( producto => producto.precio > 400);
resultado2 = carrito.filter( producto => producto.precio < 400);
resultado2 = carrito.filter( producto => producto.nombre !== 'Audifonos');
resultado2 = carrito.filter( producto => producto.nombre === 'Audifonos');

console.log(resultado2);