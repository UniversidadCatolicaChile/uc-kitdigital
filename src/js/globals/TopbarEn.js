class TopbarEn {
  constructor() {
    this.items = [
      {
        title: "Biblioteca",
        url: "http://bibliotecas.uc.cl/",
        external: true,
      },
      {
        title: "Donaciones",
        url: "https://donaciones.uc.cl/",
        external: true,
      },
      {
        title: "Mi Portal UC",
        url: "https://sso.uc.cl/cas/login",
        external: true,
      },
      {
        title: "Correo",
        url: "https://correo.uc.cl",
        external: false,
        childs: [
          {
            title: "Mi Portal UC",
            url: "https://sso.uc.cl/cas/login",
            external: true,
          },
          {
            title: "Mi Portal UC",
            url: "https://sso.uc.cl/cas/login",
            external: true,
          },
          {
            title: "Mi Portal UC",
            url: "https://sso.uc.cl/cas/login",
            external: true,
          }   
        ]
      },
    ];
    this.render();
  }

  setItems(items) {
    this.items = items;
  }

  renderList(items) {
    let render = "";
    this.items.forEach((i) => {
      render += `
        <li>
          <a href="${i.url}" target="${i.external ? "_blank": "_self"}" class="text-size--sm ${i.external ? "external": ""}">${i.title}</a>
        </li>`
    });
    return render
  }

  render() {
    const target = document.getElementById("uc-global-topbar");
    if (!target)
      return;

    try {
      let items = JSON.parse(target.dataset.items);
      if (items) {
          this.setItems(items)
      }
    } catch (error) {
      console.error("Error on parse data-items")
      console.error(error)
    }
 
    const template = `
    <div class="uc-top-bar">
      <div class="container">
        <div class="top-bar_mobile-logo d-block d-lg-none">
          <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-comprimido.svg" alt="Logo UC" class="img-fluid">
        </div>
        <div class="top-bar_links justify-content-between d-none d-lg-flex">
          <ul class="top-bar_links">
            <li><a href="http://uc.cl/" target="_blank" class="text-size--sm external">ir al sitio UC</a></li>
          </ul>
          <ul class="top-bar_links">
            ${this.renderList()}
          </ul>
        </div>
      </div>
    </div>`;
    
    target.innerHTML = template;
  }
}

export { TopbarEn };
