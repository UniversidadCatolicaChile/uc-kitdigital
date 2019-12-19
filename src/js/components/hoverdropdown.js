class HoverDropdown {
    constructor(){
        this.elements = document.querySelectorAll('[data-hdtarget]');
        this.targets = document.querySelectorAll('[data-hdropdown]');
        this.elements.forEach(element => {
            if (!element.classList.contains('external')) {
                element.addEventListener('mouseover', (e) => {
                    let target = document.querySelector(`[data-hdropdown='${e.target.dataset.hdtarget}']`);
                    if (target) {
                        target.classList.add('show');
                    }
                });
            }
        });   
        this.targets.forEach(element => {
            element.addEventListener('mouseleave', (e) => {
                e.target.classList.remove('show')
            })
        });
    }
}
export {HoverDropdown}