// event bubbling es cuando se presiona un elemento y ese evento se propaga.

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en card');
});
infoDiv.addEventListener('click',(e) => {
    e.stopPropagation();
    console.log('Click en info');
});
titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en titulo');
});

// en este ejemplo si le das click en info, tambien muestra que se hizo click en card, y se le doy click en tutulo, se
// diparan todos los eventos, dado que titulo estadentro de info e info esta dendro de card.

// para evitar que se probague, se usa el metodo stopPropagation()