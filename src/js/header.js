const burgerButton = document.querySelector('.mobile-menu-burger-btn');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const menuWrapper = document.querySelector('.mobile-menu-wrapper');
const menuCloseLink = document.querySelector('.mobile-menu-container');

menuCloseLink.addEventListener('click', event => {
  menuWrapper.classList.remove('is-open');
});
if (burgerButton && closeButton && menuWrapper) {
  burgerButton.addEventListener('click', function () {
    toggleMenu();
  });
  closeButton.addEventListener('click', function () {
    menuWrapper.classList.remove('is-open');
  });
}
// =================================
// burgerButton.addEventListener('click', function () {
//   toggleMenu();
// });
// closeButton.addEventListener('click', function () {
//   menuWrapper.classList.remove('is-open');
// });
// ===========================
function toggleMenu() {
  if (menuWrapper.classList.contains('is-open')) {
    menuWrapper.classList.remove('is-open');
  } else {
    menuWrapper.classList.add('is-open');
  }
}

const menuTitle = document.querySelector('.title-menu');
const menuWrapperTablet = document.querySelector('.tablet-menu-wrapper');

menuTitle.addEventListener('click', function () {
  menuWrapperTablet.classList.add('is-open');
  menuWrapperTablet.classList.remove('visually-hidden');
});

const menuLinks = document.querySelectorAll('.tablet-menu-link');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuWrapperTablet.classList.remove('is-open');
    menuWrapperTablet.classList.add('visually-hidden');
  });
});
