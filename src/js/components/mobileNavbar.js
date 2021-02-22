class mobileNavbar {
  constructor() {
    const navbarContainer = document.getElementsByClassName("navbar_mobile-slide")[0];
    const toggleButton = navbarContainer.getElementsByClassName("uc-navbar_mobile-button")[0];

    const nestedSlides = navbarContainer.querySelectorAll(".uc-navbar_mobile-list .has-children")

    nestedSlides.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target.getElementsByClassName("children").length) {
          e.target.getElementsByClassName("children")[0].classList.toggle("is-children-open")
        }
      });
      let closeButtons = element.querySelectorAll(".close");
      closeButtons.forEach((el) => {
        el.addEventListener('click', (close) => {
          console.log(close)
        })
      })
    });

    toggleButton.addEventListener('click', (e) => navbarContainer.classList.toggle("is-open"))
  }
}


export {mobileNavbar}
