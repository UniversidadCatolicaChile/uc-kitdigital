import Base from '../base';

export default class Rows extends Base {
  constructor(el) {
    super(el);
  }
  async makeComponent() {
    this.el.innerHTML = `
    <div class="">
      <svg class="uc-loader" viewBox="0 0 24 24">
      <circle class="uc-loader_value" cx="12" cy="12" r="10"/>
      </svg>
      </div>`;
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
