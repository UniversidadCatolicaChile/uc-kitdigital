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

  constructor (el, timestamp = +new Date()) {
    super();
    this.el = el;
    this.timestamp = timestamp
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
    const data = this.el.dataset;
    this.token = data.token;
    this.title_content = data.titleContent;
    this.limit = data.limit;
    this.sm = data.sm;
    this.md = data.md;
    this.page = data.page ? data.page : 1;
    this.typesOfActivities = data.typesOfActivities;
    this.organizers = data.organizers
    this.audience = data.audience
    this.from = data.from;
    this.to = data.to;
    this.hideImg = this.el.hasAttribute('hide-img');
    this.hideTag = this.el.hasAttribute('hide-tag');
    this.type = data.type;
    this.middleDate = data.middleDate !== undefined ? 'middle-date' : false;
    this.base_url = data.dataUrl;
  }

  makeQuery () {
    this.query = `page_=${this.page}`;
    if (this.limit) {
      this.query += `&limit=${this.limit}`;
    }

    if (this.token) {
      this.query += `&api_token=${this.token}`;
    }

    if (this.title_content) {
      this.query += `&title_content=${this.title_content}`;
    }

    if (this.typesOfActivities) {
      this.query += `&types_of_activities=${this.typesOfActivities}`;
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
