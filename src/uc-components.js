import {tns} from "../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
    container: '.home-carousel',
    items: 1,
    controls: false,
    autoplay: true,
    slideBy: 1,
    navPosition: 'bottom',
    autoplayPosition: 'bottom',
    navContainer: '.carousel-nav-list',
    autoplayButtonOutput: false,
    autoplayButton: '.autoplay-buttons',
    autoplayText: [
        "<i class='material-icons play'>play_circle_filled</i>",
        "<i class='material-icons pause'>pause_circle_filled</i>"
    ]

});

// tomas el boton
var boton = document.getElementsByClassName("autoplay-buttons")[0];
var indicator = document.querySelector('.tns-nav-active .indicator');
// haces bind de la funcion click
boton.addEventListener('click', event => {
    var action = boton.getAttribute("data-action");
    indicator.classList.toggle('paused');
});
