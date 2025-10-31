console.log(1);


// es importante entender que este evento se dispara cuando el HTML ha sido
// completamente cargado y analizado, pero antes de que se carguen los estilos CSS,
// imágenes y subframes. Por lo tanto, es útil para ejecutar código que depende
// del DOM sin esperar a que todos los recursos externos se hayan cargado.  
document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
    console.log('El DOM ha sido completamente cargado y analizado');
});

console.log(3);