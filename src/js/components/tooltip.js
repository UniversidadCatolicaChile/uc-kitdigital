class ToolTip {
    constructor() {

        this.list_class = {
            elementClass : 'asm-tooltip',
            boxClass : 'uc-tooltip'
        };

        this.box_id = 'divfortooltipasimov';

        this.render();
    }

    render(){
        /* Obtendremos a todos los elementos  */
        this.elements = document.querySelectorAll('[data-tooltip]');

        this.elements.forEach(element => {
            element.classList.add(this.list_class.elementClass);
            element.addEventListener('mouseover', (e) => this.show(e));
            element.addEventListener('mouseout', (e) => this.hide(e));
        });

        this.box = document.querySelectorAll('[data-tooltipbox]');

        this.box.forEach(element => {
            element.style.visibility = 'hidden';
            element.style.position = 'absolute';
        });
    }

    show(e){
        this.change(e, true);
    }

    hide(e){
        this.change(e, false);
    }

    change(e, isShow){

        let element = e.target;
        let x = element.offsetLeft + (element.offsetWidth/2) - 45;
        let y = element.offsetTop + (element.offsetHeight/2) + 20;

        let div = document.getElementById(this.box_id);
        if (div){
            div.parentNode.removeChild(div);
        }

        let tooltip = document.createElement('div');

        tooltip.id = this.box_id;
        tooltip.style.position = 'absolute';
        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
        tooltip.innerHTML = this.getTemplate(this.title(element), this.body(element), this.image(element));
        tooltip.classList.add(this.list_class.boxClass);

        if (isShow){
            document.body.appendChild(tooltip);
        }
    }

    title(element){
        return typeof element.dataset.tooltiptitle != 'undefined' ? element.dataset.tooltiptitle : null;
    }

    body(element){
        return typeof element.dataset.tooltipbody != 'undefined' ? element.dataset.tooltipbody: null;
    }

    image(element){
        return typeof element.dataset.tooltipimage != 'undefined' ? element.dataset.tooltipimage: null;
    }

    getTemplate(title, body, image){

        let image_el = image != null ? '<img src = "' + image + '" class="img-fluid">' : '';

        return `
        <div class='white-triangle'></div>
        ${image_el}
        <div class='tooltip-body'>
            <h1>${title}</h1>
            <p>${body}</p>
        </div>
        `;
    }

}

export {ToolTip};
