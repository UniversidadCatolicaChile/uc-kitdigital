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
            <div class="uc-footer_list-title mb-8">Main Phone</div>
            <p class="p-size--sm">Number to connect to all UC offices (in Spanish).</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223544000">(56)22354 4000</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">UC Emergency Line</div>
            <p class="p-size--sm">In case of an accident or a situation that puts your life in danger at one of our campuses</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223545000">(56)22354 5000</a></p>
            <p class="p-size--sm"><i class="uc-icon">public</i> <a href="https://www.uc.cl/emergencias" class="external" target="_blank">Emergency Site (in spanish)</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">Sexual Assault Line</div>
            <p class="p-size--sm">For guidance and support in cases of sexual violence</p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel(56)95814 5614">(56)95814 5614</a></p>
            <p class="p-size--sm"><i class="uc-icon">public</i> <a href="https://www.uc.cl/no-a-la-violencia-sexual/" target="_blank" class="external">Office for Sexual Violence Prevention and Victim Support (in Spanish)</a></p>
          </div>
          <div class="col-lg mb-12">
            <div class="uc-footer_list-title mb-8">University Ombuds Office</div>
            <p class="p-size--sm">If you feel your rights have been violated at the University, please contact the UC Ombuds Office (in Spanish) for guidance and advice.</p>
            <p class="p-size--sm mb-8"><i class="uc-icon">phone</i> <a href="tel:56223541691">(56)22354 1691</a></p>
            <p class="p-size--sm"><i class="uc-icon">phone</i> <a href="tel:56223541247" class="uc-btn btn-inline">(56)22354 1247</a></p>
            <p class="p-size--sm"><i class="uc-icon mr-4">public</i><a href="https://ombuds.uc.cl/" target="_blank" class="external">UC Ombuds Office (in Spanish)</a></p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

export { FooterEn };
