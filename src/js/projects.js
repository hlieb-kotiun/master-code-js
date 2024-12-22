import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false, // Зациклення слайдів (за потреби можна ввімкнути)
  autoplay: true, // Вимкнення автопрокрутки
});
