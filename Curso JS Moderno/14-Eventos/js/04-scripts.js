// Eventos que suceden en un formulario

const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('buscando...');
//     console.log(e.target.action);
// });

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('buscando...');
    console.log(e.target.action);
}

// Nota: preventDefault() evita que el formulario se envie y recargue la pagina