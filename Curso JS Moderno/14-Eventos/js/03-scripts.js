const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', (evento) => {
    if (evento.target.value === '') {
        console.log('Fallo la validacion');
    } 
    console.log(evento.target.value);

});