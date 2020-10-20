if (window.NodeList && !NodeList.prototype.forEach) {NodeList.prototype.forEach = Array.prototype.forEach; }
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

import {Modal} from "./components/modal.js";
import {Accordion} from "./components/accordion.js";
import {Dropdown} from "./components/dropdown.js";
import {Tab} from "./components/tab.js";
import {UcCarousel} from "./components/carousels.js";
import {Tooltip} from "./components/tooltip.js";
import {Navbar} from "./components/navbar.js";

// componentes interactivos
const uc_kit_components = {
    ac: new Accordion(),
    modal: new Modal(),
    drop: new Dropdown(),
    tab: new Tab(),
    carousels: new UcCarousel(),
    tooltip: new Tooltip(),
    navbar: new Navbar()
};
