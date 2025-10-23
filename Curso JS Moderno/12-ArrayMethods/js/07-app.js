const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];

// Lo que se quiere hacer es concatenar dos arreglos
const resultado = meses.concat(meses2,meses3);
console.log(resultado);

// SPREAD OPERATOR
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(resultado2);