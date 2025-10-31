// const primerEnlace = document.querySelector("a");
//  // Supongamos que queremos eliminar un elemento del DOM.
//  // una forma es haciendo buscarlos con el document.querySelector y luego usar el método .remove()
//     primerEnlace.remove();


    // Otra forma es acceder al padre del elemento y usar el metodo .removeChild()
    const navegacion = document.querySelector(".navegacion");
    console.log(navegacion.children);
    navegacion.removeChild(navegacion.children[2]);