"use strict"
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

async function getReviers() {
    console.log("виклик функції")
        const API_URL = "https://portfolio-js.b.goit.study/api/reviews"
        return await axios(`${API_URL}`);
}
const reviews = document.querySelector(".js-review");
getReviers()
   
    .then(({ data }) => {
        console.log('повернення з запиту');
        console.log(data);
        reviews.innerHTML = "";
        reviews.insertAdjacentHTML("beforeend", createMarkUp(data))
        const swiper = new Swiper('.rev-swiper', {
        
            slidesPerView: 1,
            slidesPerGroup: 1,
            breakpoints: {
                768: {
        
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1440: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                },
            }
        })})
    

function createMarkUp(arr) {
    return arr.map(({ author, avatar_url, review }) => `<li class="swiper-slide  reviews-item">
  <div class="wraper"><img class="reviews-img" src="${avatar_url}" alt="${author}">
  <h2 class="review-author">${author}</h2>
  <p class="review-text">${review}</p>
</div></li>`).join("")
}