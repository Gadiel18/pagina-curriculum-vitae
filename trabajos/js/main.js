const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');


    // Agregamos los listener de los enlaces para filtrar por categoria.
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlaces) => enlaces.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        })
    });


    // Agregamos el listener para la barra de busqueda.

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });

    // Agregar listener para las imasgenes

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
           
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        
        });
    });

    // eventListener del boton de cerrar
    document.querySelector('#btn-cerrar-papup').addEventListener('click', ()  => {
        overlay.classList.remove('activo');
    });

   

    overlay.addEventListener('click', (evento) => {
        //  overlay.classList.remove('activo');
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : ''

    });
});


