import Rows from './components/rows';
import Slider from './components/slider';
import Pagination from './components/pagination';

export class AgendaRows {
  constructor() {
    const agendaRows = document.querySelector('#agenda-rows');
    if (agendaRows) {
      window.rows = new Rows(agendaRows);
    }
  }
}


export class AgendaSlider {
  constructor() {
    const agendaSliderEls = document.querySelectorAll('.agenda-slider');
    window.slider = {};
    let timestamp;
    if (agendaSliderEls.length) {
      agendaSliderEls.forEach((agendaSlider) => {
        timestamp = +new Date();
        window.slider[timestamp] = new Slider(agendaSlider, timestamp);
      });
    }
  }
}

export class AgendaPagination {
  constructor() {
    const agendaPaginationEls = document.querySelectorAll('.agenda-pagination');
    window.pagination = {};

    if (agendaPaginationEls.length) {
      agendaPaginationEls.forEach((agendaPagination) => {
        timestamp = +new Date();
        window.pagination[timestamp] = new Pagination(agendaPagination, timestamp);
      });
    }
  }
}

export class AgendaDomContentLoad {
  constructor() {
    document.addEventListener("DOMContentLoaded", async () => {
        new AgendaRows()
        new AgendaPagination()
        new AgendaSlider()
    });
  }
}
