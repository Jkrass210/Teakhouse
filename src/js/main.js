import { mainSwiper } from './module/mainSwiper.js';
import { boxCategoriesScroll } from './module/boxCategoriesScroll.js';

if(document.querySelectorAll('.main-swiper')) {
  mainSwiper()
}

if(document.querySelectorAll('.box-categories__list')){
  boxCategoriesScroll()
}