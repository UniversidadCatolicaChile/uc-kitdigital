import Rows from './components/rows';
import Slider from './components/slider';
import Pagination from './components/pagination';

document.addEventListener("DOMContentLoaded", async () => {
  const agendaRows = document.querySelector('#agenda-rows');
  if(agendaRows) {
    window.rows = new Rows(agendaRows);
  }

  const agendaSlider = document.querySelector('#agenda-slider');
  if(agendaSlider) {
    window.slider = new Slider(agendaSlider);
  }

  const agendaPagination = document.querySelector('#agenda-pagination');
  if(agendaPagination) {
    window.pagination = new Pagination(agendaPagination);
  }
});