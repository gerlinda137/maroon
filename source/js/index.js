// import header from 'header.js';

import Swiper from 'swiper';


// init Swiper:
const indexSwiper = new Swiper('.swiper-container', {
  // // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


console.log("hhhhhhhhhhhhhhhhhh");

const mainHeader = document.querySelector('.main-header');

window.onscroll = function showHeader() {
  if (window.pageYOffset > 85) {
    mainHeader.classList.add('main-header--on-scroll');
  } else {
    mainHeader.classList.remove('main-header--on-scroll');
  }

}

