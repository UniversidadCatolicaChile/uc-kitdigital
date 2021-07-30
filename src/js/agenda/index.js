import Rows from './components/rows';
import Slider from './components/slider';
import Pagination from './components/pagination';


document.addEventListener("DOMContentLoaded", async () => {
  const agendaRows = document.querySelector('#agenda-rows');
  let timestamp;
  if(agendaRows) {
    window.rows = new Rows(agendaRows);
  }

  const agendaSliderEls = document.querySelectorAll('.agenda-slider');
  window.slider = {};

  if(agendaSliderEls.length) {
    agendaSliderEls.forEach((agendaSlider) => {
      timestamp = +new Date();
      window.slider[timestamp] = new Slider(agendaSlider, timestamp);
    });
  }

  const agendaPaginationEls = document.querySelectorAll('.agenda-pagination');
  window.pagination = {};
  
  if(agendaPaginationEls.length) {
    agendaPaginationEls.forEach((agendaPagination) => {
      timestamp = +new Date();
      window.pagination[timestamp] = new Pagination(agendaPagination, timestamp);
    });
  }
});