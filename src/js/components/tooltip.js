import tippy from 'tippy.js'

class Tooltip {
    constructor() {
        tippy('.uc-tooltip', {
            theme: 'uc',
            arrow: true,
            arrowType: "round",
            interactive: true
        });
    }
}

export {Tooltip}
