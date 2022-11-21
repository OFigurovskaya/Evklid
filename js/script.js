

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

document.querySelectorAll('.work__item__href').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work__item__href').forEach(function (btn) {
      btn.classList.remove('work__item__href--active')
    });
    e.currentTarget.classList.add('work__item__href--active');

    document.querySelectorAll('.work__right').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work__right--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.toggle('work__right--active');
  });
});

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__item');

burger.addEventListener('click', function () {

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__menu--active');

  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__menu--active');

    document.body.classList.remove('stop-scroll');
  })
})

let searchInput = document.querySelector('.search-wrapper__input');
let search = document.querySelector('.header__search__href');
let closeBtn = document.querySelector('.header__search__href2');
let searchWrapper = document.querySelector('.search-wrapper');


search.addEventListener('click', function(event) {
event.preventDefault();
searchInput.classList.add('search-wrapper__input--active');
closeBtn.classList.add('header__search__href2--active');
searchWrapper.classList.add('search-wrapper--active');

closeBtn.addEventListener('click', function() {
  searchInput.classList.remove('search-wrapper__input--active');
closeBtn.classList.remove('header__search__href2--active');
searchWrapper.classList.remove('search-wrapper--active');
});
});
