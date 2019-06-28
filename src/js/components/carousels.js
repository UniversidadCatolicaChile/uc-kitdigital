import {tns} from "./tiny-slider.js"

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
                gutter: data.gutter ? parseInt(data.gutter) : 0,
                autoplay: data.autoplay ? JSON.parse(data.autoplay) : false,
                speed: data.speed ? parseInt(data.speed, 10) : 300,
                controls: data.controls ? JSON.parse(data.controls) : false,
                navContainer: data.navcontainer ? data.navcontainer : false,
                autoplayButton: data.autoplaybutton ? data.autoplaybutton : false,
                prevButton: data.prevButton ? data.prevButton : false,
                nextButton: data.nextButton ? data.nextButton : false,
                autoplayText: data.autoplayText ? autoPlayButtons : false,
                responsive: {
                    720: {
                        items: data.smItems ? parseInt(data.smItems) : 1,
                        gutter: 30
                    },
                    960: {
                        items: data.items ? parseInt(data.items) : 1
                    }
                }
            };

            console.log(options);

            // var options = {
            //     container: '.' + data.carousel,
            //     items: 1,
            //     slideBy: 1,
            //     loop: false,
            //     nav: false,
            //     gutter: 0,
            //     autoplay: false,
            //     speed: 300,
            //     controls: false,
            //     navContainer: false,
            //     autoplayButton: false,
            //     prevButton: false,
            //     nextButton: false,
            //     autoplayText: false
            // };

            // Object.keys(data).forEach(option => {
            //     console.log(option);
            //     options[option] = this.optionParser(data[options])
            // });

            var carousel = tns(options);

            if (data.counter && JSON.parse(data.counter)) {
                let indexCurrent = e.getElementsByClassName('index-current')[0];
                let indexTotal = e.getElementsByClassName('index-total')[0];
                indexCurrent.innerHTML = carousel.getInfo().items;
                indexTotal.innerHTML = carousel.getInfo().slideCount;
                carousel.events.on('indexChanged', info => {
                    indexCurrent.innerHTML = info.items+info.index;
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
        });
    }

}

export {UcCarousel}
