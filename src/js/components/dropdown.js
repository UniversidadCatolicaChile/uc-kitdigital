class Dropdown {
    constructor(){
        /* Obtendremos a todos los botones que abren modales  */
        this.elements = document.querySelectorAll('[data-dtarget]');

        this.list_class = {
            button : 'dropbtn',
            show : 'show'
        };

        this.elements.forEach(element => {
            element.addEventListener('click', (e) => this.onClick(e));
        });

        this.prepareDropButtons();
        this.prepareClose();
    }

    onClick(e){
        let element = e.target;
        let target = document.querySelector("[data-dropdown='" + element.dataset.dtarget + "']");
        target.classList.toggle(this.list_class.show);
    }

    prepareDropButtons(){
        let dropdowns = document.querySelector("[data-dropdown]");

        if (dropdowns == null){
            return;
        }

        if (!Array.isArray(dropdowns)){
            dropdowns.classList.add(this.list_class.button);
            return;
        }

        dropdowns.forEach(element => {
            element.classList.add(this.list_class.button);
        })

    }

    prepareClose(){
        let w_click = window.onclick;
        window.onclick = (e) => {
            if (typeof w_click == 'function'){
                w_click(event);
            }
            if (!event.target.matches('.' + this.list_class.button)) {
                let dropdowns = document.querySelector("[data-dropdown]");

                if (dropdowns == null){
                    return;
                }

                if (!Array.isArray(dropdowns)){
                    if (dropdowns.classList.contains(this.list_class.show)) {
                        dropdowns.classList.remove(this.list_class.show);
                    }
                    return;
                }

                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains(this.list_class.show)) {
                        openDropdown.classList.remove(this.list_class.show);
                    }
                }
            }
        };
    }
}

export {Dropdown}