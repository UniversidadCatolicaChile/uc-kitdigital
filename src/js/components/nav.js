class Nav {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.elements = document.querySelectorAll('.nav a');

    if (!this.nav) return;

    this.pickDefault();

    this.listenClick();
  }
  listenClick () {
    this.elements.forEach((el) => {
      el.addEventListener('click', () => {
        this.setActive(el);
      })
    })
  }
  setActive (current) {
    current.classList.add('active')
    this.elements.forEach((el) => {
      if (el !== current) el.classList.remove('active')
    })
  }
  pickDefault () {
    this.hasDefault = false;

    this.elements.forEach((el => {
      if (el.classList.contains('active')) this.hasDefault = true;
    }));
    
    if(!this.hasDefault) this.elements[0].classList.add('active')
  }
}

export {Nav}
