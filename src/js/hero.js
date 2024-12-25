/* Open menu */

const openMobMenu = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openMobMenu.addEventListener('click', menuOpener);

function menuOpener() {
  mobileMenu.classList.add('is-open');
}

/* Close menu*/

const mobileMenuContainer = document.querySelector('.mobile-menu-container');

mobileMenu.addEventListener('click', menuClose);

function menuClose(event) {
  const click = event.target.nodeName;
  if (click !== 'A' && click !== 'SPAN' && click !== 'BUTTON') {
    return;
  }

  mobileMenu.classList.remove('is-open');
}
