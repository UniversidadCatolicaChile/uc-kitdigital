class Dropdown {
    constructor(){
        /* Obtendremos a todos los botones que abren modales  */
        this.elements = document.querySelectorAll('[data-dtarget]');

        this.elements.forEach(element => {
            element.addEventListener('click', (e) => this.onClick(e));
        });

        this.prepareDropButtons();
        this.prepareClose();
    }

    onClick(e){
        let element = e.target;
        let target = document.querySelector("[data-dropdown='" + element.dataset.dtarget + "']");
        target.classList.toggle("show");
    }

    prepareDropButtons(){
        let dropdowns = document.querySelector("[data-dropdown]");

        if (dropdowns == null){
            return;
        }

        if (!Array.isArray(dropdowns)){
            dropdowns.classList.add('dropbtn');
            return;
        }

        dropdowns.forEach(element => {
            element.classList.add('dropbtn');
        })

    }

    prepareClose(){
        let w_click = window.onclick;
        window.onclick = (e) => {
            if (typeof w_click == 'function'){
                w_click(event);
            }
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.querySelector("[data-dropdown]");

                if (dropdowns == null){
                    return;
                }

                if (!Array.isArray(dropdowns)){
                    if (dropdowns.classList.contains('show')) {
                        dropdowns.classList.remove('show');
                    }
                    return;
                }

                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    }
}

export {Dropdown}