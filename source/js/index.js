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

//show menu on scroll

const mainHeader = document.querySelector('.main-header');

window.onscroll = function showHeader() {
  if (window.pageYOffset > 1) {
    mainHeader.classList.add('main-header--on-scroll');
  } else {
    mainHeader.classList.remove('main-header--on-scroll');
  }

}

//show menu on btn click

const menu = document.querySelector('.menu-list');
const nav = document.querySelector('.main-nav');
const menuBtn = nav.querySelector('.main-nav__button');
const menuSocials = document.querySelector('.main-nav__socials');
const header = document.querySelector('.main-header');
const headerLogo = header.querySelector('.main-header__logo');

let menuOpened;

let adjustMenuOnClick = function () {
  if (menuOpened) {
    headerLogo.classList.add('main-header__logo--opened-menu');

  }
}

let resetMenuOnClose = function () {
  if (!menuOpened) {
    headerLogo.classList.remove('main-header__logo--opened-menu');
  }
}


menuBtn.onclick = function () {
  if (!menuOpened) {
    menu.classList.add('menu-list--show');
    menuSocials.style = 'display: flex';
    header.classList.add('main-header--opened-menu');
    menuBtn.classList.add('main-nav__button--close');
    menuOpened= true;
    adjustMenuOnClick();
  } else if (menuOpened && window.innerWidth <= 1200) {
    menu.classList.remove('menu-list--show');
    menuSocials.style = 'display: none';
    header.classList.remove('main-header--opened-menu');
    menuBtn.classList.remove('main-nav__button--close');
    menuOpened= false;
    resetMenuOnClose();
  }
}

//открытие-закрытие фильтра


const filter = document.querySelector('.catalog__filter-wrapper');
const filterBtn = document.querySelector('.catalog__filter-btn');
const filterCloseBtn = document.querySelector('.catalog__close-btn');

if (filterBtn!=null) {
  let filterOpened;

  filterBtn.onclick = function () {
    if (!filterOpened) {
      filter.classList.remove('catalog__filter-wrapper--hidden');
      filterBtn.classList.add('catalog__filter-btn--hidden');
      filterCloseBtn.classList.remove ('catalog__close-btn--hidden');
      filterOpened = true;
    }
  }

  filterCloseBtn.onclick = function () {
    if (filterOpened) {
      filter.classList.add('catalog__filter-wrapper--hidden');
      filterBtn.classList.remove('catalog__filter-btn--hidden');
      filterCloseBtn.classList.add ('catalog__close-btn--hidden');
      filterOpened = false;
    }
  }
}


//аккордеон фильтра
const accordions = document.querySelectorAll('.filter__column');

for ( const item of accordions) {
  item.addEventListener('click', function () {
    this.classList.toggle('filter__column--active')
  })
  item.addEventListener('keydown', function (e) {
    if (13 == e.keyCode) {
      this.classList.toggle('filter__column--active')
    }
  })

}
