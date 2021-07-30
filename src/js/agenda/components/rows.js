import Base from '../base';

export default class Rows extends Base {
  constructor (el) {
    super(el);
  }
  async makeComponent () {
    const data = await this.getData();
    let html = '';
    Object.values(data.activities).forEach((activity) => {
      html += `
      <div class="col-sm-${this.sm} col-md-${this.md} mb-40">
        ${this.makeCard(activity)}
      </div>`;
    });
    this.el.innerHTML = `<div class="row">${html}</div>`;
  }
}