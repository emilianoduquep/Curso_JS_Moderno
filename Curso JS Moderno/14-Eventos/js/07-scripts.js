// el event bubbling tambie se puede detener con DELEGATION

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en el titulo');
    }

    if (e.target.classList.contains('precio')) {
        console.log('Diste click en el precio');
    }

    if (e.target.classList.contains('card')) {
        console.log('Diste click en el card');
    }
});