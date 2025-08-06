import { mainSwiper } from './module/mainSwiper.js';
import { boxCategoriesScroll } from './module/boxCategoriesScroll.js';
import { initDetailedSwipers } from './module/initDetailedSwipers.js';
import { initTabs } from './module/initTabs.js';
import { initCatalogMenu } from './module/initCatalogMenu.js';
import { initCatalogLinkHandler } from './module/initCatalogLinkHandler.js';
import { initHeaderFixed } from './module/initHeaderFixed.js';

if (document.querySelectorAll('.main-swiper').length) {
  mainSwiper()
}

if (document.querySelectorAll('.box-categories__list').length) {
  boxCategoriesScroll('.box-categories__list')
}

if (document.querySelectorAll('.swiper-detailed').length) {
  initDetailedSwipers()
}

if (document.querySelectorAll('.info').length) {
  initTabs('box-info-detailed__list', 'info__btn', 'active');
}

if (document.querySelector('.drop-down-catalog')) {
  initCatalogMenu()
}

if (document.querySelector('.catalog-link__link')) {
  initCatalogLinkHandler({
    linkSelector: '.catalog-link__link',
    dropdownSelector: '.catalog-link__drop-down-catalog',
    activeClass: 'active'
  });
}

if (document.querySelector('.header')) {
  initHeaderFixed();
}