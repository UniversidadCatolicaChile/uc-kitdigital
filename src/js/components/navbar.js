import { createPopper } from '@popperjs/core';

class Navbar {
    constructor() {
        const elements = document.querySelectorAll('.uc-navbar-dropdown');
        const boundary = document.querySelector('.uc-navbar_nav');

        if (boundary.dataset.init) return
        boundary.dataset.init = true
        
        elements.forEach(el => {
            const button = el;
            const submenu = el.querySelector('.uc-navbar-dropdown_menu');

            button.setAttribute('tabindex', '0');
            submenu.insertAdjacentHTML('beforeend', '<li><div class="uc-navbar_arrow" data-popper-arrow></div></li>');

            let popperInstance = null;

            function create() {
                popperInstance = createPopper(button, submenu, {
                    placement: 'bottom',
                    modifiers: [
                        {
                            name: 'preventOverflow',
                            options: {
                                boundary: boundary,
                            },
                        },
                        {
                            name: 'flip',
                            enabled: false,
                        },
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 15],
                            },
                        }
                    ]
                })
            }
            function destroy() {
                if (popperInstance) {
                    popperInstance.destroy();
                    popperInstance = null;
                }
            }

            function show() {
                submenu.setAttribute('data-show', '');
                create();
            }

            function hide() {
                submenu.removeAttribute('data-show');
                destroy();
            }

            document.addEventListener('keyup', tabNav);

            function tabNav(e) {
                if(e.key === 'Tab' && !el.contains(document.activeElement)) {
                    hide();
                }
            }

            const showEvents = ['mouseenter', 'focus'];

            showEvents.forEach(event => {
                button.addEventListener(event, show);
            });

            button.addEventListener('mouseleave', hide);

            function menuWidth(el) {
                const items = el.querySelectorAll('li').length;
                if (items <= 10) {
                    el.classList.add('cols-1');
                } else if (items > 10 && items <= 20) {
                    el.style.width = '480px';
                    el.classList.add('cols-2');
                } else if (items > 20 && items <= 30) {
                    el.style.width = '710px';
                    el.classList.add('cols-3');
                } else if (items > 30 && items <= 40) {
                    el.style.width = '960px';
                    el.classList.add('cols-4');
                } else {
                    el.classList.add('cols-5');
                    el.style.width = boundary.offsetWidth+'px';
                }
            }
            menuWidth(submenu);

            window.addEventListener('resize', function () {
                menuWidth(submenu);
            });
        });
    }
}

export {Navbar}
