const mainHeader = document.querySelector('.main-header');

window.onscroll = function showHeader() {
  if (window.pageYOffset > 85) {
    mainHeader.classList.add('main-header--on-scroll');
  } else {
    mainHeader.classList.remove('main-header--on-scroll');
  }

}
