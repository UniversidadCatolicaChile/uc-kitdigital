class Footer {
  constructor() {
    this.render();
  }

  render() {
    const target = document.getElementById("uc-global-footer");
    if (!target) return;

    target.innerHTML = `
    <div class="uc-footer_help">
      <div class="container">
        <div class="row">
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">Mesa central</div>
            <p class="p-size--sm">Teléfono para comunicarse con las distintas áreas de la Universidad.</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223544000">(56)22354 4000</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">emergencias uc</div>
            <p class="p-size--sm">Teléfono en caso de accidente o situación que ponga en riesgo tu vida dentro de algún campus.</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223545000">(56)22354 5000</a></p>
            <p class="p-size--sm"><i class="uc-icon">public</i> <a href="https://www.uc.cl/emergencias" class="external" target="_blank">Ir al sitio de Emergencias</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">violencia sexual</div>
            <p class="p-size--sm">Teléfono para orientación y acompañamiento en casos de violencia sexual.</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel(56)95814 5614">(56)95814 5614</a></p>
            <p class="p-size--sm"><i class="uc-icon">public</i> <a href="https://www.uc.cl/no-a-la-violencia-sexual/" target="_blank" class="external">Unidad de Prevención y Apoyo a Víctimas de Violencia Sexual</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">Mediación Universitaria</div>
            <p class="p-size--sm">Teléfonos para orientación y consejo si se ha vulnerado alguno de tus derechos en la universidad.</p>
            <p class="p-size--sm mb-8"><i class="uc-icon">phone</i> <a href="tel:56223541691">(56)22354 1691</a></p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223541247" class="uc-btn btn-inline">(56)22354 1247</a></p>
            <p class="p-size--sm"><i class="uc-icon mr-4">public</i><a href="https://ombuds.uc.cl/" target="_blank" class="external">Ir a la Oficina de Ombuds UC</a></p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

export { Footer };
