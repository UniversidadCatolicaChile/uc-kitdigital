class Accordion {
    constructor() {

        this.list_class = {
            titleClass : 'js-accordion-title',
            contentClass : 'js-accordion-content',
            active_element : 'js-accordion-active-element'
        };

        this.render();
    }

    render() {
        /* Obtendremos a todos los elementos  */
        this.elements = document.querySelectorAll('[data-collapse]');

        this.elements.forEach(element => {
            element.classList.add(this.list_class.titleClass);
            element.addEventListener('click', (e) => this.onClick(e));
            element.href = 'javascript:void(0);'
        });

        this.closeAll();
    }

    getParent(element){
        return (typeof element.parentElement == 'undefined' || element.parentElement == null) ? null :
        ((typeof element.parentElement.dataset.accordion != 'undefined') ? element.parentElement : this.getParent(element.parentElement));
    }

    onClick(e){

        let element = e.target;
        let parent = this.getParent(element);

        if (parent == null){
            let targets = document.querySelectorAll('[data-toggle="' + element.dataset.collapse + '"]');
            targets.forEach(item => {
                this.toggle(item, element);
            });
            return;
        }

        let targets = parent.querySelectorAll('[data-toggle="' + element.dataset.collapse + '"]');

        if (element.dataset.open == "true"){
            this.toggle(element, element);
            return;
        }

        /* SALVANDO ESTADOS */

        this.closeAll(parent, targets);

        targets.forEach(item => {
            this.toggle(item, element);
        });
    }

    closeAll(parent, objectives) {

        let isFirst = (typeof parent == 'undefined');
        let container = isFirst ? document : parent;
        let targets = container.querySelectorAll('[data-toggle]');

        targets.forEach(item => {

            if (typeof (objectives) == 'undefined'){
                /*
                if (isFirst){
                    item.classList.add(this.contentClass);
                    if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                        this.toggle(item);
                        return;
                    }
                }
                item.dataset.open = false;
                item.style.height = 0; */
                this.operate(item, isFirst, container);
                return;
            }


            objectives.forEach(obj => {
                if (obj == item){
                    return;
                }
                this.operate(item, isFirst, container);
                /*
                if (isFirst){
                    item.classList.add(this.contentClass);
                    if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                        this.toggle(item);
                        return;
                    }
                }
                item.dataset.open = false;
                item.style.height = 0; */

            });
        });
    }

    operate(item, isFirst, container){
        if (isFirst){
            item.classList.add(this.list_class.contentClass);
            if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                this.toggle(item);
                return;
            }
        }
        item.dataset.open = false;
        item.style.height = 0;

        let parent = container.querySelectorAll('[data-collapse="' + item.dataset.toggle + '"]');

        if (typeof(parent[0]) != 'undefined'){
            parent.forEach(par => {
                par.classList.remove(this.list_class.active_element);
            });
            return;
        }

        if (typeof(parent.classList) == 'undefined'){
            return;
        }

        parent.classList.remove(this.list_class.active_element);
    }

    toggle(el, parent) {
        // getting the height every time in case
        // the content was updated dynamically

        let height = el.scrollHeight;

        if (el.style.height === '0px' || el.style.height === '') {
            el.style.height = height + 'px';
            el.setAttribute('data-open', 'true');
            if (typeof (parent) != 'undefined'){
                parent.classList.add(this.list_class.active_element);
            }
        } else {
            el.style.height = 0;
            el.setAttribute('data-open', 'false');
            if (typeof (parent) != 'undefined'){
                parent.classList.remove(this.list_class.active_element);
            }
        }
    }
}

export {Accordion};
