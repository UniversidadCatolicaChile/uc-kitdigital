import Base from '../base';

export default class Pagination extends Base {
  constructor(el, timestamp) {
    super(el, timestamp);
  }

  makePagination() {
    this.current_page = this.current_page ? this.current_page : 1;
    let pages = '';

    for (let index = 1; index <= this.max_num_pages; index++) {
      pages += `
        <li class="page-item ${this.page === index ? 'active' : ''}">
          <a href="#" onclick="window.pagination[${this.timestamp}].goToPage(${index})" class="page-link">${index}</a>
        </li>
      `;
    }

    return `
      <nav class="uc-pagination">
        <button onclick="window.pagination[${this.timestamp}].goToPrev()" class="uc-pagination_prev mr-12">
          <i class="uc-icon">keyboard_arrow_left</i>
        </button>
        <ul class="uc-pagination_pages">
          ${pages}
        </ul>
        <button onclick="window.pagination[${this.timestamp}].goToNext()" class="uc-pagination_next ml-12">
          <i class="uc-icon">keyboard_arrow_right</i>
        </button>
      </nav>
    `;
  }

  async goToPrev() {
    if (this.page == 1) {
      return;
    }

    await this.goToPage(this.page - 1);
  }

  async goToNext() {
    if (this.page === this.max_num_pages) {
      return;
    }

    await this.goToPage(this.page + 1);
  }

  async goToPage(index) {
    if (this.page === index) {
      return;
    }

    this.page = index;
    await this.makeComponent();
  }

  async makeComponent() {
    this.el.innerHTML = `
    <div class="">
      <svg class="uc-loader" viewBox="0 0 24 24">
      <circle class="uc-loader_value" cx="12" cy="12" r="10"/>
      </svg>
      </div>`;
    const data = await this.getData();
    const pagination = this.makePagination();
    let html = '';

    Object.values(data.activities).forEach((activity) => {
      html += `
      <div class="col-sm-${this.sm} col-md-${this.md} mb-40">
        ${this.makeCard(activity)}
      </div>`;
    });

    this.el.innerHTML = `
      <div class="row">${html}</div>
      ${pagination}
    `;
  }
}
