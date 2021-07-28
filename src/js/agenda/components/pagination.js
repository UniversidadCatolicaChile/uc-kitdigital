import Base from '../base';

export default class Rows extends Base {
  constructor (el) {
    super(el);
  }

  makePagination () {
    this.current_page = this.current_page ? this.current_page : 1;
    let pages = '';

    for (let index = 1; index <= this.max_num_pages; index++) {
      pages += `
        <li class="page-item ${ this.page === index ? 'active' : '' }">
          <a href="#" onclick="window.pagination.goToPage(${index})" class="page-link">${index}</a>
        </li>
      `;
    }
    
    return `
      <nav class="uc-pagination">
        <button onclick="window.pagination.goToPrev()" class="uc-pagination_prev mr-12">
          <i class="uc-icon">keyboard_arrow_left</i>
        </button>
        <ul class="uc-pagination_pages">
          ${pages}
        </ul>
        <button onclick="window.pagination.goToNext()" class="uc-pagination_next ml-12">
          <i class="uc-icon">keyboard_arrow_right</i>
        </button>
      </nav>
    `;
  }

  async goToPrev () {
    if (this.page == 1) {
      return;
    }

    await this.goToPage(this.page - 1);
  }

  async goToNext () {
    if (this.page === this.max_num_pages) {
      return;
    }

    await this.goToPage(this.page + 1);
  }

  async goToPage (index) {
    if (this.page === index) {
      return;
    }

    this.page = index;
    await this.makeComponent();
  }

  async makeComponent () {
    const data = await this.getData();
    const pagination = this.makePagination();
    let html = '';

    Object.values(data.activities).forEach((activity) => {
      html += `
      <div class="col-sm-${this.sm} col-md-${this.md} mb-40">
        ${this.make(activity)}
      </div>`;
    });

    this.el.innerHTML = `
      <div class="row">${html}</div>
      ${pagination}
    `;
  }
}