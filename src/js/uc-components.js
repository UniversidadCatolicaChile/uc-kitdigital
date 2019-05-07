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

let indexCurrent = document.getElementsByClassName('index-current')[0];
let indexTotal = document.getElementsByClassName('index-total')[0];

indexCurrent.innerHTML = imageCardsCarousel.getInfo().items;
indexTotal.innerHTML = imageCardsCarousel.getInfo().slideCount;

imageCardsCarousel.events.on('indexChanged', function(info) {
    indexCurrent.innerHTML = info.items+info.index;
});


let containerWidth = document.getElementsByClassName('container')[0].offsetWidth;
let slideSegment = containerWidth / imageCardsCarousel.getInfo().slideCount;
let carouselTrack = document.getElementsByClassName('carousel-progress-indicator')[0]

function moveTrack(info) {
    let totalpx = slideSegment*info.index;
    carouselTrack.style.transform = 'translateX('+totalpx+'px)';
}

imageCardsCarousel.events.on('indexChanged', moveTrack)

