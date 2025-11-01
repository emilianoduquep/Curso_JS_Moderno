// eventos con el scroll del mouse

// estos eventos suceden en la ventana global - window
// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY;
//     console.log(scrollPX); // muestra los pixeles que se han scrolleado
// })

// supongamos que queremos agregar una animacion cuando se llegue a cierto punto del scroll
window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // metodo que devuelve la ubicacion del elemento en el viewport

    // console.log(ubicacion);

    if (ubicacion.top < 700) {
        console.log('El elemento ya esta visible');

    } else {
        console.log('Aun no llegas al elemento');
    }
});