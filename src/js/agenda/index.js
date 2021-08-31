import Rows from './components/rows';
import Slider from './components/slider';
import Pagination from './components/pagination';

export class AgendaRows {
  constructor() {
    const agendaRowsEls = document.querySelectorAll('.agenda-rows');
    window.rows = {};
    let timestamp = +new Date();
    if (agendaRowsEls.length) {
      agendaRowsEls.forEach((agendaRow) => {
        timestamp++;
        window.rows[timestamp] = new Rows(agendaRow, timestamp);
      });
    }
  }
}


export class AgendaSlider {
  constructor() {
    const agendaSliderEls = document.querySelectorAll('.agenda-slider');
    window.slider = {};
    let timestamp = +new Date();
    if (agendaSliderEls.length) {
      agendaSliderEls.forEach((agendaSlider) => {
        timestamp++;
        window.slider[timestamp] = new Slider(agendaSlider, timestamp);
      });
    }
  }
}

export class AgendaPagination {
  constructor() {
    const agendaPaginationEls = document.querySelectorAll('.agenda-pagination');
    window.pagination = {};
    let timestamp = +new Date();
    if (agendaPaginationEls.length) {
      agendaPaginationEls.forEach((agendaPagination) => {
        timestamp++;
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
