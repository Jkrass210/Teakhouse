export function initDetailedSwipers() {
  const detailedSwipers = document.querySelectorAll('.swiper-detailed');
  
  if (!detailedSwipers.length) return;

  detailedSwipers.forEach(container => {
    const topSwiperEl = container.querySelector('.swiper-detailed__top');
    const bottomSwiperEl = container.querySelector('.swiper-detailed__bottom');
    
    const bottomSwiper = new Swiper(bottomSwiperEl, {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,
      /*breakpoints: {
        320: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 4 },
      },*/
    });

    const topSwiper = new Swiper(topSwiperEl, {
      spaceBetween: 0,
      loop: true,
      navigation: {  
        nextEl: '.swiper-detailed__btn.__prev',
        prevEl: '.swiper-detailed__btn.__next',
      },
      thumbs: {
        swiper: bottomSwiper,
      },
    });

    const bottomSlides = bottomSwiperEl.querySelectorAll('.swiper-slide');
    bottomSlides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        topSwiper.slideTo(index);
      });
    });
  });
}