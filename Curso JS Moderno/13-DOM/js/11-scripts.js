const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// este boton esta es perando que se de el evento de hacer un click usando una funcion anonima
// btnFlotante.addEventListener('click', () => {
//     console.log('diste click en el boton flotante');
// });

// esto hace lo mismo de arriba pero declarando una funcion
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    console.log('le diste al clavo');
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }

};

