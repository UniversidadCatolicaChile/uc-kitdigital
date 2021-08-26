import Rows from './components/rows';
import Slider from './components/slider';
import Pagination from './components/pagination';

export class AgendaRows {
  constructor() {
    document.addEventListener("DOMContentLoaded", async () => {
      const agendaRows = document.querySelector('#agenda-rows');
      
      if (agendaRows) {
        window.rows = new Rows(agendaRows);
      }
    });
  }
}


export class AgendaSlider {
  constructor() {
    document.addEventListener("DOMContentLoaded", async () => {
      const agendaSliderEls = document.querySelectorAll('.agenda-slider');
      window.slider = {};
      let timestamp;
      if (agendaSliderEls.length) {
        agendaSliderEls.forEach((agendaSlider) => {
          timestamp = +new Date();
          window.slider[timestamp] = new Slider(agendaSlider, timestamp);
        });
      }

    });
  }
}

export class AgendaPagination {
  constructor() {
    document.addEventListener("DOMContentLoaded", async () => {
      const agendaPaginationEls = document.querySelectorAll('.agenda-pagination');
      window.pagination = {};

      if (agendaPaginationEls.length) {
        agendaPaginationEls.forEach((agendaPagination) => {
          timestamp = +new Date();
          window.pagination[timestamp] = new Pagination(agendaPagination, timestamp);
        });
      }
    });
  }
}
