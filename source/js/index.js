// import header from 'header.js'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

var indexSwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  // width: 968,
  // spaceBetween: 0,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

const mainHeader = document.querySelector('.main-header');

window.onscroll = function showHeader() {
  if (window.pageYOffset > 85) {
    mainHeader.classList.add('main-header--on-scroll');
  } else {
    mainHeader.classList.remove('main-header--on-scroll');
  }

}

