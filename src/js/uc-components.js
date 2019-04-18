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

var slider = tns({
    container: '.uc-carousel-cards_content',
    items: 1,
    slideBy: 1,
    gutter: 30,
    loop: false,
    nav: false,
    controlsContainer: '.carousel-controls',
    responsive: {
        720: {
            items: 2
        },
        960: {
            items: 3
        }
    }
});

//console.log(slider.getInfo().displayIndex+' a '+slider.getInfo().items+' de '+slider.getInfo().slideCount);

slider.events.on('indexChanged', function (info) {
    console.log(info.displayIndex+2+' / '+info.slideCount);
});
