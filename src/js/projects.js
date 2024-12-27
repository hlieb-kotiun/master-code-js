import Swiper from 'swiper';
import 'swiper/css';
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';

const leftBtn = document.querySelector('.left-btn');

leftBtn.disabled = true;

const swiper = new Swiper('.project-swiper', {
  modules: [Navigation, Pagination, Scrollbar, Mousewheel, Keyboard], 
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      const nextButton = document.querySelector('.right-btn');
      const prevButton = document.querySelector('.left-btn');

      if (this.isEnd) {
        nextButton.setAttribute('disabled', true);
      } else {
        nextButton.removeAttribute('disabled');
      }

      if (this.isBeginning) {
        prevButton.setAttribute('disabled', true);
      } else {
        prevButton.removeAttribute('disabled');
      }
    },
  },
  loop: false,
  autoplay: false,
  mousewheel: {
    forceToAxis: true, 
  },
  keyboard: {
    enabled: true, 
    onlyInViewport: true, 
  },
});
