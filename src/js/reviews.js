import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let hasErrorShown = false; // Прапорець для перевірки, чи показана помилка

const swiperButtonBrev = document.querySelector('.rev-button');
swiperButtonBrev.disabled = true;

async function getReviers() {
  const API_URL = 'https://portfolio-js.b.goit.study/api/reviews'; 
  return await axios(`${API_URL}`);
}

const reviews = document.querySelector('.js-review');
getReviers()
  .then(({ data }) => {
    reviews.innerHTML = '';
    reviews.insertAdjacentHTML('beforeend', createMarkUp(data));

    const revSwiper = new Swiper('.rev-swiper', {
      modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel],
      navigation: {
        nextEl: '.rev-next', // Клас для кнопки "next"
        prevEl: '.rev-prev', // Клас для кнопки "prev"
      },
      on: {
        slideChange: function () {
          const nextButton = document.querySelector('.right-btn-disabled');
          const prevButton = document.querySelector('.left-btn-disabled');

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
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        forceToAxis: true,
      },
      spaceBetween: 16,
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
      },
    });

    const swiperButtonNext = document.querySelector('.rev-next');
    const swiperButtonPrev = document.querySelector('.rev-prev');

    swiperButtonNext.addEventListener('click', () => revSwiper.slideNext());
    swiperButtonPrev.addEventListener('click', () => revSwiper.slidePrev());

    swiperButtonNext.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        revSwiper.slideNext();
        event.preventDefault();
      }
    });

    swiperButtonPrev.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        revSwiper.slidePrev();
        event.preventDefault();
      }
    });
  })
  .catch(error => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasErrorShown) {
          hasErrorShown = true;
          toShowMessage(error);
        }
      });
    }, options);

    observer.observe(reviews);
  });

function toShowMessage(error) {
  iziToast.show({
    title: 'X',
    message: `${error.message}`,
    position: 'center',
    color: 'red',
  });

  reviews.innerHTML = 'Not found...';
}

function createMarkUp(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) => `
        <li class="swiper-slide reviews-item">
            <div class="wraper">
                <img class="reviews-img" src="${avatar_url}" alt="${author}">
                <h2 class="review-author">${author}</h2>
                <p class="review-text">${review}</p>
            </div>
        </li>
    `
    )
    .join('');
}
