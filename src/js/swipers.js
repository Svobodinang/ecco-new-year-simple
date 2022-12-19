import Swiper, { Pagination, Navigation } from 'swiper';
// import isMobilePt from './isMobilePt';

export default class Swipers {
    constructor() {
        this.initSwipers();
    }

    // eslint-disable-next-line
    initSwipers() {
        Array.from(document.querySelectorAll('.swiper-goods')).forEach((swiperEl) => {
            // eslint-disable-next-line
            const swiperInstance = new Swiper(swiperEl, {
                slidesPerView: 'auto',
                modules: [Pagination, Navigation],
                pagination: {
                    el: '.section-goods__pagination'
                },
                navigation: {
                    nextEl: '.section-goods__navigation--next',
                    prevEl: '.section-goods__navigation--prev'
                }
            });
        });
    }
}
