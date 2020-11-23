const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('img-load');

    const enlaces = document.querySelectorAll('.categorias a');
    enlaces.forEach((enlace) => {
        enlace.addEventListener('click', (ev) => {
            ev.preventDefault();
            enlaces.forEach((enl) => enl.classList.remove.add('activo'));
            ev.target.classList.add('activo');
        });
    });
});