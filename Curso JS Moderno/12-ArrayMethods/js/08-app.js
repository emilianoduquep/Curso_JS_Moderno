const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const meses2 = [...meses, 'Julio'];
console.log(meses2);

// Es importante nontar que esto no modifica el arreglo original
console.log(meses);

// veamos como usar el SPREAD OPERATOR para concatenar un array de objetos con otro objeto.
// es imortante anotar, que no se colocan los (...) puntos.
const producto = { producto: 'Disco Duro', precio: 450 };

const carrito2 = [...carrito, producto]; //no se colocan los (...) puntos.
console.log(carrito2);


// Si se puede usar el spread operator con dos arrays de objetos
const producto3 = [
    { producto: 'Lampara Computador', precio: 210 },
    { producto: 'Ventilador de mesa', precio: 120}
];

const carrito3 = [...carrito, ...producto3];
console.log(carrito3);
