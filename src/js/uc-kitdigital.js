if (window.NodeList && !NodeList.prototype.forEach) {NodeList.prototype.forEach = Array.prototype.forEach; }
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

if (!!window.MSInputMethodContext && !!document.documentMode) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find,Promise,Object.assign";
    document.body.appendChild(script);
}

import {Modal} from "./components/modal.js";
import {Accordion} from "./components/accordion.js";
import {Dropdown} from "./components/dropdown.js";
import {Tab} from "./components/tab.js";
import {UcCarousel} from "./components/carousels.js";
import {Tooltip} from "./components/tooltip.js";
import {Navbar} from "./components/navbar.js";
import {mobileNavbar} from "./components/mobileNavbar.js";

import {Footer} from "./globals/Footer.js";
import {Topbar} from "./globals/Topbar.js";


new Topbar();
new Footer();

const uc_kit_components = {
    ac: new Accordion(),
    modal: new Modal(),
    drop: new Dropdown(),
    tab: new Tab(),
    carousels: new UcCarousel(),
    tooltip: new Tooltip(),
    navbar: new Navbar(),
    mobilenavbar: new mobileNavbar(),
};
