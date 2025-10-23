const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Si queremos saber en INDICE se encuantra un elemento de un array...
meses.forEach( (mes, index) => {
    console.log(`El mes que esta iterando es ${mes}`);
    console.log(`esta en el indice ${index}`);
});

// si quiero ver un mes especifico (ej: Abril)
meses.forEach( (mes, index) => {
    if( mes === 'Abril') {
        console.log(`El mes ${mes} esta en el indice ${index}`);
    }
});

// Ahora usnado un array function .findIndex()
const indice = meses.findIndex( mes => mes === 'Abril');
console.log('El valor buscado esta en el indice: ', indice);

// en el caso que .findIndex() no encuentre un valor, nos dara como resultado -1.
const indice2 = meses.findIndex( mes => mes === 'Abril2');
if (indice2 > 0 ) {
    console.log('Si se encontro el elemento');
} else {
    console.log('NO se encontro el elemento');
}

// Para encontrar un indice de un arreglo de objetos
const indice3 = carrito.findIndex( producto => producto.precio === 700);
console.log('En el array de objetos, el producto esta en el indice: ', indice3);

// Nota: findIndex() solo va a devolver el primero que encuentre, asi hallan mas.