import {Modal} from "./components/modal.js";
import {Accordion} from "./components/accordion.js";
import {Dropdown} from "./components/dropdown.js";
import {Tab} from "./components/tab.js";
import {ToolTip} from "./components/tooltip.js";

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js"

const uc_kit_components = {
    ac : new Accordion(),
    modal : new Modal(),
    drop: new Dropdown(),
    tab: new Tab(),
    tooltip: new ToolTip()
};

var imageCardsCarousel = tns({
    container: '.uc-carousel-cards_content',
    items: 1.05,
    slideBy: 1,
    gutter: 10,
    loop: false,
    nav: false,
    prevButton: '.carousel-controls .prev',
    nextButton: '.carousel-controls .next',
    responsive: {
        720: {
            items: 2,
            gutter: 30
        },
        960: {
            items: 3
        }
    }
});

var homeCarousel = tns({
    container: '.home-carousel',
    items: 1,
    slideBy: 1,
    loop: true,
    autoplay: true,
    controls: false,
    speed: 500,
    navContainer: '.carousel-nav-list',
    autoplayButton: '.autoplay-buttons',
    autoplayText: ["<i class='uc-icon play-button'>play_circle_filled</i>", "<i class='uc-icon pause-button'>pause_circle_filled</i>"]
});

let indexCurrent = document.getElementsByClassName('index-current')[0];
let indexTotal = document.getElementsByClassName('index-total')[0];

let containerWidth = document.getElementsByClassName('container')[0].offsetWidth;
let slideSegment = containerWidth / imageCardsCarousel.getInfo().slideCount;
let carouselTrack = document.getElementsByClassName('carousel-progress-indicator')[0]

indexCurrent.innerHTML = imageCardsCarousel.getInfo().items;
indexTotal.innerHTML = imageCardsCarousel.getInfo().slideCount;

imageCardsCarousel.events.on('indexChanged', updateInfo);

function updateInfo(info) {
    indexCurrent.innerHTML = info.items+info.index;
    let totalpx = slideSegment*info.index;
    carouselTrack.style.transform = 'translateX('+totalpx+'px)';
}
