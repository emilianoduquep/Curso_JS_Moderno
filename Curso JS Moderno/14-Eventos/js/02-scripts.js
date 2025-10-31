// eventos  que corren con el mouse

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('diste click en nav');
});


// entrando a la zona de navegacion
nav.addEventListener('mouseenter', () => {
    console.log('entrando en la zona de navegacion');
    nav.style.backgroundColor = 'white';
});


// saliendo de la zona de navegacion
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la zona de navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () => {
    console.log('el click esta down');
    
});

nav.addEventListener('mouseup', () => {
    console.log('el click esta up');
    
});