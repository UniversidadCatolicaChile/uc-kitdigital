class Events {
  constructor() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://beta.agenda.uc.cl/api/v1/activities?api_token=s1F4cfPwKPurccC0ZL04wG7wJgoiIB0i3oZnOfVugqCKvhiBEvdJUrIE8JmzfSHukf0T0mQkFCf2nKwZ&=&limit=5")
    .then((response) => response.json())
    .then((data) => {
      this.activities = data.activities;
      this.render()

    });
  }

  renderEventCards() {
    let render = "";
    this.activities.forEach((a) => {
      render += `
        <div class="col-lg-3 mb-32">
          <div class="uc-card card-type--event card-height--same">
            <div class="uc-card card-type--date">
              <div class="day">7</div>
              <div class="month">Nov</div>
            </div>
            <div class="uc-card_body"><a href="#" class="uc-tag my-20">tag</a>
              <h4>${a.title}</h4>
              <div class="uc-card_event--content">
                <div class="date">1 de Diciembre</div>
                <div class="time">15:00 a 20:30 hrs.</div>
                <div class="venue"><a href="#" class="uc-link">${a.place.name}</a></div>
              </div>
            </div>
          </div>
        </div>`
    });
    
    return render
  }

  render(data) {
    const target = document.getElementsByClassName("uc-global-events");
    if (!target) return;

    const template = `
      <section>
        <div class="container mb-160">
          <div class="row align-items-center mb-80">
            <div class="col-lg-6">
              <div class="heading-container">
                <h2>Está pasando</h2>
                <div class="uc-heading-decoration"></div>
              </div>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <div class="text-right">
                <a href="#" class="uc-btn btn-inline">
                  Ver todas los eventos
                  <i class="uc-icon icon-shape--rounded">add</i></a></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="featured-image-container d-none d-lg-block">
                <div class="uc-card-event-featured_image" style="background-image: url(&quot;https://via.placeholder.com/400x400&quot;);"></div>
              </div>
            </div>
            ${this.renderEventCards()}
          </div>
        </div>
      </section>`;

    Array.prototype.forEach.call(target, function(el) {
      el.innerHTML = template;
    });
  }
}

export { Events };
