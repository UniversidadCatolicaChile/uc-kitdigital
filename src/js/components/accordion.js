class Accordion {
    constructor() {
        this.titleClass = 'js-accordion-title';
        this.contentClass = 'js-accordion-content';

        this.render();
    }

    render() {
        /* Obtendremos a todos los elementos  */
        this.elements = document.querySelectorAll('[data-collapse]');

        this.elements.forEach(element => {
            element.classList.add(this.titleClass);
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
                this.toggle(item);
            });
            return;
        }

        let targets = parent.querySelectorAll('[data-toggle="' + element.dataset.collapse + '"]');

        if (element.dataset.open == "true"){
            this.toggle(element);
            return;
        }

        /* SALVANDO ESTADOS */

        this.closeAll(parent, targets);

        targets.forEach(item => {
            this.toggle(item);
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
                this.operate(item, isFirst);
                return;
            }


            objectives.forEach(obj => {
                if (obj == item){
                    return;
                }
                this.operate(item, isFirst);
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

    operate(item, isFirst){
        if (isFirst){
            item.classList.add(this.contentClass);
            if (typeof(item.dataset.open) != 'undefined' && item.dataset.open != "false"){
                this.toggle(item);
                return;
            }
        }
        item.dataset.open = false;
        item.style.height = 0;
    }

    toggle(el) {
        // getting the height every time in case
        // the content was updated dynamically

        let height = el.scrollHeight;

        if (el.style.height === '0px' || el.style.height === '') {
            el.style.height = height + 'px';
            el.setAttribute('data-open', 'true');
        } else {
            el.style.height = 0;
            el.setAttribute('data-open', 'false');
        }
    }
}

export {Accordion};
