import {tns} from "../node_modules/tiny-slider/src/tiny-slider"

var homeCarousel = tns({
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
    /*
    autoplayText: [
        "<i class='material-icons play'>play_circle_filled</i>",
        "<i class='material-icons pause'>pause_circle_filled</i>"
    ]
    */
});

// tomamos el boton
var boton = document.getElementsByClassName("autoplay-buttons")[0];

// hacemos bind de la funcion click
/*
boton.addEventListener('click', event => {
    var activeIndicator = document.querySelector('.tns-nav-active .indicator');
    activeIndicator.classList.toggle('paused');
    /*
    var action = boton.getAttribute("data-action");
    switch (action) {
        case 'start':
            console.log("pausado");
            console.log(activeIndicator);
            break;
        case 'stop':
            activeIndicator.classList.remove('paused');
            console.log("andando");
            break;
    }
}, );

var pauseButton = document.querySelector('.pause-button');
var playButton = document.querySelector('.play-button');

pauseButton.addEventListener('click',event  => {
    var indicatorBar = document.querySelector('.tns-nav-active .indicator');
    indicatorBar.classList.remove('playing');
    indicatorBar.classList.add('paused');
    homeCarousel.pause();
    console.log('paused');
});

playButton.addEventListener('click',event  => {
    var indicatorBar = document.querySelector('.tns-nav-active .indicator');
    indicatorBar.classList.remove('paused');
    indicatorBar.classList.add('playing');
    homeCarousel.play();
    console.log('playing');
});
*/
