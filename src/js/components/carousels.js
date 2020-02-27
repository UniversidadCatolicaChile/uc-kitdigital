import {tns} from "tiny-slider/src/tiny-slider"

class UcCarousel {
    constructor() {

        let carousels = document.querySelectorAll('[data-carousel]');
        let autoPlayButtons = ["<i class='uc-icon play-button'>play_circle_filled</i>", "<i class='uc-icon pause-button'>pause_circle_filled</i>"]


        carousels.forEach(e => {
            var data = e.dataset;

            var options = {
                container: '.' + data.carousel,
                items: 1,
                slideBy: data.slideby ? parseInt(data.slideby, 10) : 1,
                loop: data.loop ? JSON.parse(data.loop) : false,
                nav: data.nav ? JSON.parse(data.nav) : false,
                gutter: data.gutter ? parseInt(data.gutter) : 10,
                autoplay: data.autoplay ? JSON.parse(data.autoplay) : false,
                speed: data.speed ? parseInt(data.speed, 10) : 300,
                controls: data.controls ? JSON.parse(data.controls) : false,
                navContainer: data.navcontainer ? data.navcontainer : false,
                autoplayButton: data.autoplaybutton ? data.autoplaybutton : false,
                prevButton: data.prevButton ? data.prevButton : false,
                nextButton: data.nextButton ? data.nextButton : false,
                autoplayText: data.autoplayText ? autoPlayButtons : false,
                responsive: {
                    768: {
                        items: data.smItems ? parseInt(data.smItems) : 1,
                        gutter: 32
                    },
                    992: {
                        items: data.items ? parseInt(data.items) : 1
                    }
                }
            };

            var carousel = tns(options);
            e.style.opacity = "1";

            if (data.counter && JSON.parse(data.counter)) {
                let indexCurrent = e.getElementsByClassName('index-current')[0];
                let indexTotal = e.getElementsByClassName('index-total')[0];
                let itemOffSet = data.offset ? parseInt(data.offset) : 0;
                indexCurrent.innerHTML = carousel.getInfo().items - itemOffSet;
                indexTotal.innerHTML = carousel.getInfo().slideCount - itemOffSet; //
                carousel.events.on('indexChanged', info => {
                    indexCurrent.innerHTML = (info.items-itemOffSet)+info.index;
                });
            }
            if(data.track && JSON.parse(data.track)){
                let containerWidth = document.getElementsByClassName('container')[0].offsetWidth;
                let slideSegment = containerWidth / carousel.getInfo().slideCount;
                let carouselTrack = e.getElementsByClassName('carousel-progress-indicator')[0];
                carousel.events.on('indexChanged', info => {
                    let totalpx = slideSegment*info.index;
                    carouselTrack.style.transform = 'translateX('+totalpx+'px)';
                });
            }

            // compensa ancho de scroll track, usando detector de ancho de scrollbar de David Walsh https://davidwalsh.name/detect-scrollbar-width

            function getScrollBarWidth () {
                var scrollDiv = document.createElement("div");
                scrollDiv.className = "scrollbar-measure";
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }

            if(data.type === 'cards') {
                e.style.width = "calc(100vw - "+ getScrollBarWidth()/2 +"px)"
            }
        });
    }

}

export {UcCarousel}
