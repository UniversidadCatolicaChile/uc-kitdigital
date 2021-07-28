import Card from './card'

export default class Base extends Card {
  months = {
    '01': { full: 'enero', small: 'ene' },
    '02': { full: 'febrero', small: 'feb' },
    '03': { full: 'marzo', small: 'mar' },
    '04': { full: 'abril', small: 'abr' },
    '05': { full: 'mayo', small: 'may' },
    '06': { full: 'junio', small: 'jun' },
    '07': { full: 'julio', small: 'jul' },
    '08': { full: 'agosto', small: 'ago' },
    '09': { full: 'septiembre', small: 'sep' },
    '10': { full: 'octubre', small: 'oct' },
    '11': { full: 'noviembre', small: 'nov' },
    '12': { full: 'diciembre', small: 'dic' }
  }

  constructor (el) {
    super();
    this.el = el;
    this.init();
  }

  init (getAttrinutes = true) {
    if (getAttrinutes) {
      this.getAttributes();
    }
    this.makeComponent();
  }

  listen () {
    elem.addEventListener('reload', () => {
      this.init();
    }, false);
  }

  getAttributes() {
    this.sm = this.el.getAttribute('sm');
    this.md = this.el.getAttribute('md');
    this.page = this.el.getAttribute('page') ? this.el.getAttribute('page') : 1;
    this.limit = this.el.getAttribute('limit');
    this.title_content = this.el.getAttribute('title_content');
    this.types_of_activities = this.el.getAttribute('types_of_activities');
    this.organizers = this.el.getAttribute('organizers');
    this.audience = this.el.getAttribute('audience');
    this.from = this.el.getAttribute('from');
    this.to = this.el.getAttribute('to');
    this.hideImg = this.el.hasAttribute('hide-img');
    this.hideTag = this.el.hasAttribute('hide-tag');

    this.base_url = this.el.getAttribute('base-url');
  }

  makeQuery () {
    this.query = `page_=${this.page}`;
    if (this.limit) {
      this.query += `&limit=${this.limit}`;
    }

    if (this.title_content) {
      this.query += `&title_content=${this.title_content}`;
    }

    if (this.types_of_activities) {
      this.query += `&types_of_activities=${this.types_of_activities}`;
    }

    if (this.organizers) {
      this.query += `&organizers=${this.organizers}`;
    }

    if (this.audience) {
      this.query += `&audience=${this.audience}`;
    }

    if (this.from) {
      this.query += `&from=${this.from}`;
    }

    if (this.to) {
      this.query += `&to=${this.to}`;
    }
  }

  async getData () {
    await this.makeQuery();

    return await fetch(`https://api.agenda.uc.asimov.cl/api/v1/activities?${this.query}`)
      .then(response => response.json())
      .then(data => {
        this.total = data.total_count;
        this.limit = data.limit;
        this.page = data.page;
        this.max_num_pages = data.max_num_pages;
        return data;
      });
  }
}