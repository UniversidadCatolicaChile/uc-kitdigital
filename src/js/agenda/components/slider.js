import Base from '../base';
import { UcCarousel } from '../../components/carousels';

export default class Slider extends Base {
  constructor (el) {
    super(el);
  }

  sliderAttributes () {
    this.data_items = this.el.getAttribute('data-items') ? this.el.getAttribute('data-items') : "4";
    this.data_slideby = this.el.getAttribute('data-slideby') ? this.el.getAttribute('data-slideby') : "1";
    this.data_loop = this.el.getAttribute('data-loop') ? this.el.getAttribute('data-loop') : "false";
    this.data_controls = this.el.getAttribute('data-controls') ? this.el.getAttribute('data-controls') : "true";
    this.data_speed = this.el.getAttribute('data-speed') ? this.el.getAttribute('data-speed') : "500";
    this.data_autoplayText = this.el.getAttribute('data-autoplay-text') ? this.el.getAttribute('data-autoplayText') : "true";
    this.data_prev_button = this.el.getAttribute('data-prev-button') ? this.el.getAttribute('data-prev-button') : ".events-controls .prev";
    this.data_next_button = this.el.getAttribute('data-next-button') ? this.el.getAttribute('data-next-button') : ".events-controls .next";
    this.data_counter = this.el.getAttribute('data-counter') ? this.el.getAttribute('data-counter') : "true";
    this.data_track = this.el.getAttribute('data-track') ? this.el.getAttribute('data-track') : "true";
  }

  async makeComponent () {

    this.sliderAttributes();

    const data = await this.getData();
    let html = '';
    Object.values(data.activities).forEach((activity) => {
      html += `
      <div class="uc-carousel-events-${this.timestamp} d-flex">
        <div class="item w-full">
          ${this.makeCard(activity)}
        </div>
      </div>`;
    });

    this.el.innerHTML = `
      <div class="container">
        <div
          class="uc-carousel-cards"
          data-carousel="uc-carousel-events-${this.timestamp}"
          data-type="cards"

          data-items="${this.data_items}"
          data-slideby="${this.data_slideby}"
          data-loop="${this.data_loop}"
          data-controls="${this.data_controls}"
          data-speed="${this.data_speed}"
          data-autoplay-text="${this.data_autoplayText}"
          data-prev-button="${this.data_prev_button}-${this.timestamp}"
          data-next-button="${this.data_next_button}-${this.timestamp}"
          data-counter="${this.data_counter}"
          data-track="${this.data_track}"
        >
          <div class="uc-carousel-events-${this.timestamp} d-flex">
            ${html}
          </div>
          <div class="carousel-track d-block d-lg-none">
            <div class="carousel-progress-indicator"></div>
          </div>
          <div class="carousel-controls d-none d-lg-flex events-controls">
            <div class="prev prev-${this.timestamp}">
              <svg width="48px" height="16px" viewBox="0 0 48 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-272.000000, 0.000000)" fill="#0176DE">
                    <path d="M319.999999,7.99862356 C320,7.9990823 320,7.99954111 320,8 C320,8.00045889 320,8.0009177 319.999999,8.00137644 C319.999683,8.23695673 319.918232,8.47244231 319.755645,8.65920128 L313.646473,15.6766505 C313.296166,16.0790401 312.698312,16.1101069 312.311129,15.7460401 C311.923947,15.3819733 311.894054,14.7606376 312.244362,14.3582479 L316.909085,9 L273.088579,9 C272.487374,9 272,8.55228475 272,8 C272,7.44771525 272.487374,7 273.088579,7 L316.909085,7 L312.244362,1.64175206 C311.894054,1.23936242 311.923947,0.618026698 312.311129,0.253959882 C312.698312,-0.110106935 313.296166,-0.0790401485 313.646473,0.323349491 L319.755645,7.34079872 C319.918232,7.52755769 319.999683,7.76304327 319.999999,7.99862356 Z" id="arrow-forward"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="uc-carousel_index">
              <span class="index-current current"></span> / <span class="index-total"></span>
            </div>
            <div class="next next-${this.timestamp}">
              <svg width="48px" height="16px" viewBox="0 0 48 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-272.000000, 0.000000)" fill="#0176DE">
                    <path d="M319.999999,7.99862356 C320,7.9990823 320,7.99954111 320,8 C320,8.00045889 320,8.0009177 319.999999,8.00137644 C319.999683,8.23695673 319.918232,8.47244231 319.755645,8.65920128 L313.646473,15.6766505 C313.296166,16.0790401 312.698312,16.1101069 312.311129,15.7460401 C311.923947,15.3819733 311.894054,14.7606376 312.244362,14.3582479 L316.909085,9 L273.088579,9 C272.487374,9 272,8.55228475 272,8 C272,7.44771525 272.487374,7 273.088579,7 L316.909085,7 L312.244362,1.64175206 C311.894054,1.23936242 311.923947,0.618026698 312.311129,0.253959882 C312.698312,-0.110106935 313.296166,-0.0790401485 313.646473,0.323349491 L319.755645,7.34079872 C319.918232,7.52755769 319.999683,7.76304327 319.999999,7.99862356 Z" id="arrow-forward"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;

    new UcCarousel();
  }
}
