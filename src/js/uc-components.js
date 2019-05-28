import {Modal} from "./components/modal.js";
import {Accordion} from "./components/accordion.js";
import {Dropdown} from "./components/dropdown.js";
import {Tab} from "./components/tab.js";
import {ToolTip} from "./components/tooltip.js";
import {UcCarousel} from "./components/carousels.js";

import {DonutChart} from "./visualizations/donut-chart.js"
import {BarChart} from "./visualizations/bar-chart.js"
import {DonutChartAlt} from "./visualizations/donut-chart-alt";
import {sunburstChart} from "./visualizations/sunburst-chart.js";


// componentes interactivos
const uc_kit_components = {
    ac: new Accordion(),
    modal: new Modal(),
    drop: new Dropdown(),
    tab: new Tab(),
    tooltip: new ToolTip(),
    carousels: new UcCarousel()
};

// visualizaciones
new DonutChart();
new DonutChartAlt();
new BarChart();
new sunburstChart();

