import axios from 'axios';  
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

async function getReviers() {
        const API_URL = "https://portfolio-js.b.goit.study/api/reviews"
        return await axios.get(`${API_URL}`);
}
const reviews = document.querySelector(".js-review")
console.log(reviews)
getReviers()
    .then(({ data }) => {
        console.log(data)
        reviews.insertAdjacentHTML("beforeend", createMarkUp(data))
        const swiper = new Swiper('.swiper', {
       slidesPerView: 1, // Кількість видимих слайдів
    spaceBetween: 16, // Відступи між слайдами
    slidesPerGroup: 1, // Кількість слайдів для прокручування
    centeredSlides: true, // Центрування слайдів
   
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.back-btn',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
          

            
       
      });

    })


    .catch((error) => {
            console.log(error.message)
            iziToast.show({
                title: "X",
                message: `${error.message}`,
                position: "center",
                color: "red"
            })
        reviews.innerHTML="Not found"
        })



 
 
function createMarkUp(arr) {
    return arr.map(({ author, avatar_url, review }) => `<li class="swiper-slide  reviews-item">
  <div class="wraper"><img class="reviews-img" src="${avatar_url}" alt="${author}">
  <h2 class="review-author">${author}</h2>
  <p class="review-text">${review}</p>
</div></li>`).join("")
    
}