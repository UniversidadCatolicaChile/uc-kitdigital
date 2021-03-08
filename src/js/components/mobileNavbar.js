class mobileNavbar {
  constructor() {
    const navbarContainer = document.getElementsByClassName("navbar_mobile-slide")[0];
    const toggleButton = navbarContainer.getElementsByClassName("uc-navbar_mobile-button")[0];

    const nestedSlides = navbarContainer.querySelectorAll(".uc-navbar_mobile-list .has-list-children");

    nestedSlides.forEach((element) => {
      const listButton = element.getElementsByClassName("list-open")[0];
      listButton.addEventListener('click', (e) => {
        if (element.getElementsByClassName("list-children").length) {
          element.getElementsByClassName("list-children")[0].classList.toggle("is-children-open");
        }
      });
      const closeButtons = element.querySelectorAll(".list-close");
      closeButtons.forEach((el) => {
        el.addEventListener('click', (close) => {
          close.target.parentNode.parentNode.classList.remove("is-children-open");
        })
      })
    });

    toggleButton.addEventListener('click', (e) => {
      navbarContainer.classList.toggle("is-open");
      const elBody = document.getElementsByTagName("body")[0];
      if(navbarContainer.classList.contains("is-open")) {
        elBody.classList.add("uc-navbar_mobile--open");
      } else {
        elBody.classList.remove("uc-navbar_mobile--open");
      }
      const visibleItems = document.querySelectorAll(".is-children-open");
      visibleItems.forEach((el) => {
        el.classList.remove("is-children-open");
      });
    })
  }
}


export {mobileNavbar}
