const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Vamos a comprobar si un valor existe en un arreglo
// podemos usar para esto un forEach

meses.forEach((mes) => {
    console.log(mes);
    if (mes === 'Enero') {
        console.log('Enero si existe!');
    }
});

// Puedo usar un array method llamado .includes() que me revisa si un valor existe en un arreglo
const resultado = meses.includes('Enero');
console.log(resultado); //boolean true or false

// Cuando quiero verificar un arreglo de objetos, debo de usar .some()
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular'
});
console.log(`la busqueda es ${existe}`);

// puede quedar un poco mas compacto de la siguente forma
const existe2 = carrito.some(producto => producto.nombre === 'Celular');
console.log(`la busqueda es ${existe2}`);

// con .some() tambien puedo verficar un arreglo de indices
const existe3 = meses.some(mes => mes === 'Febrero');
console.log(existe3);

// En conclusion, con .some() puedo hacer ambas, array de indices y array de objetos y se usa para revisar si un elemento existe