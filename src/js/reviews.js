import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

let hasErrorShown = false; // Прапорець для перевірки, чи показана помилка

const swiperButtonBrev = document.querySelector('.rev-button');
swiperButtonBrev.disabled = true;

async function getReviers() {
  console.log('виклик функції');
  const API_URL = 'https://portfolio-js.b.goit.study/api/reviews'; // правильний URL
  return await axios(`${API_URL}`);
}

const reviews = document.querySelector('.js-review');
getReviers()
  .then(({ data }) => {
    console.log('повернення запиту');
    console.log(data);
    reviews.innerHTML = '';
    reviews.insertAdjacentHTML('beforeend', createMarkUp(data));

    const revSwiper = new Swiper('.rev-swiper', {
      modules: [Navigation, Pagination, Scrollbar],
      navigation: {
        nextEl: '.rev-next', // Клас для кнопки "next"
        prevEl: '.rev-prev', // Клас для кнопки "prev"
      },
      on: {
        slideChange: function () {
          const nextButton = document.querySelector('.right-btn-disabled  ');
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
    console.log('Swiper initialized', revSwiper);
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
