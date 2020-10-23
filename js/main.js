let menuTogle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuTogle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
});