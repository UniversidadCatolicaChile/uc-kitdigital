import { property, render, html, define } from "hybrids";

const overwrite = [
  {title: 'Biblioteca',url: '#',external: true,},
  {title: 'Donaciones',url: '#',external: true}
];

export const TopBar = {
  items: property(Array),
  render: render(
    ({ items }) => html`
      <header class="uc-header">
        <div class="uc-top-bar">
          <div class="container">
            <div class="top-bar_mobile-logo d-block d-lg-none">
              <img
                src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-comprimido.svg"
                alt="Logo UC"
                class="img-fluid"
              />
            </div>
            <div class="top-bar_links justify-content-between d-none d-lg-flex">
              <ul class="top-bar_links">
                <li>
                  <a
                    href="http://uc.cl/"
                    target="_blank"
                    class="text-size--sm external"
                  >
                    ir al sitio UC
                  </a>
                </li>
              </ul>
              <ul class="top-bar_links">
                ${overwrite.map(item => html`
                    <li>
                      <a href="${item}" target="_blank" class="text-size--sm external">
                        ${item.title}
                      </a>
                    </li>
                  `)}
                <li>
                  <a href="https://correo.uc.cl" target="_blank" class="text-size--sm external">
                    Correo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `,
    { shadowRoot: false }
  ),
};

define("uc-top-bar", TopBar);
