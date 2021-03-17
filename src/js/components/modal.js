class Modal {
    constructor(){
        /* Obtendremos a todos los botones que abren modales  */
        this.elements = document.querySelectorAll('[data-mtarget]');

        this.elements.forEach(element => {
            element.addEventListener('click', (e) => this.onClick(e));
        });

        this.modalOpen = null;
        this.initModals();
        this.setClosedButtons();
    }

    initModals(){
        this.modals = document.querySelectorAll('[data-modal]');
        this.closeAll();
    }

    closeAll(){
        this.modals.forEach(element => {
            element.style.display = 'none';
        });
    }

    onClick(e){
        let element = e.target;
        let target = document.querySelector("[data-modal='" + element.dataset.mtarget + "']");
        this.open(target);
    }

    open(target){
        if (target == null){
            return;
        }
        target.style.display = 'block';
        this.modalOpen = target;
    }

    close(target){
        // only this video has youtube content 
        let frames = document.querySelectorAll('.uc-message_body iframe'),  i;
        for (i = 0; i < frames.length; ++i) {
            frames[i].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
        target.style.display = 'none';
        this.modalOpen = null;
    }

    getParent(element){
        return (typeof element.parentElement == 'undefined') ? null : 
        ((typeof element.parentElement.dataset.modal != 'undefined') ? element.parentElement : this.getParent(element.parentElement));
    }

    setClosedButtons(){
        let closed_buttons = document.querySelectorAll('[data-mclosed]');

        
        closed_buttons.forEach(element => {
            let parent = this.getParent(element);
            element.addEventListener('click', (e) => this.close(parent));
        });

        let w_click = window.onclick;

        window.onclick = (event) => {
            if (typeof w_click == 'function'){
                w_click(event);
            }
            
            if (event.target == this.modalOpen) {
                this.modalOpen.style.display = "none";
            }
        }

        document.addEventListener("keydown", (e) => {
            if (e.key == 'Escape'){
                if (this.modalOpen == null){
                    return;
                }
                this.close(this.modalOpen);
            }
        });
    }
}

export {Modal};