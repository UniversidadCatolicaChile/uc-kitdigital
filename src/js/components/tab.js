class Tab {
    constructor() {

        this.list_class = {
            active : 'active'
        };

        this.tab_panels = document.querySelectorAll('[data-tabpanel]');
        this.tab_buttons = document.querySelectorAll('[data-tabtarget]');
        this.tabs_active = document.querySelectorAll('[data-tabactive]');

        this.tab_buttons.forEach(element => {
            element.addEventListener('click', (e) => this.onClick(e));
        });

        this.tab_panels.forEach(element => {
            this.closeAll(element);
        });

        this.tabs_active.forEach(element => {
            let parent = this.getParent(element);

            if (parent == null){
                console.error('Tab fuera de element tabpanel');
                return;
            }

            let target = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');           
            element.classList.add(this.list_class.active);

            if (target == null){
                return;
            }

            target.forEach(child => {
                this.open(child);
            })
            
        });

    }

    onClick(e){
        let element = e.target;
        let parent = this.getParent(element);

        if (parent == null){
            console.error('Tab fuera de element tabpanel');
            return;
        }

        let buttons = parent.querySelectorAll('[data-tabtarget]');

        buttons.forEach(button => {
            button.classList.remove(this.list_class.active);
        })

        element.classList.add(this.list_class.active);

        this.closeAll(parent);
        let targets = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');

        this.action(targets, 'open');
    }

    getParent(element){
        return (typeof element.parentElement == 'undefined' || element.parentElement == null) ? null : 
        ((typeof element.parentElement.dataset.tabpanel != 'undefined') ? element.parentElement : this.getParent(element.parentElement));
    }

    open(element){
        element.style.display = '';
    }

    close(element){
        element.style.display = 'none';
    }

    closeAll(parent){
        let buttons = parent.querySelectorAll('[data-tabtarget]');
        let targets = [];
        
        buttons.forEach(element => {
            let objectives = parent.querySelectorAll('[data-tab="' + element.dataset.tabtarget + '"]');
            objectives.forEach(child => {
                targets.push(child);
            });
        });

        this.action(targets, 'close');
    }

    action(targets, action){
        if (targets == null){
            return;
        }
        
        targets.forEach(element => {
            this[action](element);
        });
    }
}

export {Tab};