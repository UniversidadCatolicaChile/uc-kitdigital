import { tns } from "../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
    container: '.home-carousel',
    items: 1,
    controls: false,
    autoplay: true,
    slideBy: 'page',
    navPosition: 'bottom',
    autoplayPosition: 'bottom',
    navContainer: '.carousel-nav-list',
    autoplayTimeout: 3000
});
