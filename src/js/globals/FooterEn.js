class FooterEn {
  constructor() {
    this.render();
  }

  render() {
    const target = document.getElementById("uc-global-footer-en");
    if (!target) return;

    target.innerHTML = `
    <div class="uc-footer_help">
      <div class="container">
        <div class="row">
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">Mesa central</div>
            <p>Comunícate con las distintas áreas de la Universidad.</p>
            <p><i class="uc-icon">phone</i> <a href="#">(56)22354 4000</a></p>
            <p><i class="uc-icon">chat</i> <a href="#" class="external">Consultas en línea</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">emergencias uc</div>
            <p>Si sufres un accidente o situación que ponga en riesgo tu vida, comunícate con el teléfono de emergencias.</p>
            <p><i class="uc-icon">phone</i> <a href="#">(56)22354 5000</a></p>
            <p><i class="uc-icon">public</i> <a href="#" class="external">Ir al sitio de Emergencias</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">violencia sexual</div>
            <p>Si sufres una situación de violencia sexual, comunícate con nosotros para orientación y acompañamiento.</p>
            <p><i class="uc-icon">phone</i> <a href="#">(56)95814 5614</a></p>
            <p><i class="uc-icon">public</i> <a href="#">Más información</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">Mediación Universitaria</div>
            <p>Si sientes que se han vulnerado tus derechos al interior de la UC, te pedimos que te comuniques con la <a href="https://ombuds.uc.cl/contacto" target="_blank" class="uc-bn btn-inline external">oficina de Ombuds</a> para recibir orientación.</p>
            <p><i class="uc-icon">phone</i> <a href="#">(56)22354 1691</a> - <a href="#" class="uc-btn btn-inline">(56)22354 1247</a></p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

export { FooterEn };
