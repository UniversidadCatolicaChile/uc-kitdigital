export default class Card {
  makeCard(activity) {
    // const year = activity.sort_date.slice(0,4)
    const month = activity.sort_date.slice(4,6);
    const day = activity.sort_date.slice(6,8);
    let hours;

    if (activity.sort_hours) {
      hours = `${activity.sort_hours[0].hora_inicio} hrs a ${activity.sort_hours[0].hora_termino}`;
    } else {
      hours = 'Todo el día';
    }
    let img;
    if (this.hideImg) {
      img = '';
    } else {
      img = `
        <img
          src="${activity.featured_image.sizes['600_450']}"
          class="d-none d-lg-block img-fluid custom-img-event"
          style="min-height: 200px; background-color: lightgrey"
        >
      `;
    }

    let tags;
    if (this.hideTag) {
      tags = '';
    } else {
      tags = `
        <a
          href="https://uc.cl/agenda/?types_of_activities=${activity.type[0].id}"
          class="uc-tag my-20"
        >
          ${activity.type[0].name}
        </a>
      `;
    }

    return `
      <div class="uc-card card-type--event card-height--same">
        ${img}
        <div class="position-relative">
          <div class="uc-card card-type--date">
            <div class="day">
              <span>${day}</span>
            </div>
            <div class="month">
              <span>${this.months[month].small}</span>
            </div>
          </div>
          <div class="uc-card_body">
            ${tags}
            <a
              href="${this.base_url ? this.base_url : 'https://www.uc.cl/agenda' }/${activity.slug}"
              ${ this.base_url ? '' : 'target="_blank"'}
              class="h4 color-black uc-card-link ${ this.hideTag ? 'mt-20' : '' }">
                ${activity.title}
            </a>
            <div class="uc-card_event--content">
              <div>
                <div class="date">
                  <span>${day} de ${this.months[month].full}</span>
                </div>
                <div class="time">${hours}</div>
              </div>
              <div class="venue">
                <p>${activity.place.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}