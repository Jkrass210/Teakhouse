export function mainSwiper() {
  const swiper = new Swiper('.main-swiper', {
    // Параметры
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    // Пагинация в формате "текущий/всего"
    /*pagination: {
      el: '.main-swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          ' / ' +
          '<span class="' + totalClass + '"></span>';
      }
    },*/

    pagination: {
      el: ".main-swiper-pagination",
      type: "fraction",
    },

    // Навигационные кнопки
    navigation: {
      nextEl: '.__prev',
      prevEl: '.__next',
    },

    // Дополнительные параметры
    speed: 500,
    effect: 'slide',
    autoHeight: false
  });
}