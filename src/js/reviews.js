import axios from 'axios';  
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

async function getReviers() {
    console.log("bich")
        const API_URL = "https://portfolio-js.b.goit.study/api/reviews"
        return await axios(`${API_URL}`);
}
const reviews = document.querySelector(".js-review")
console.log(reviews)
getReviers()
   
    .then(({ data }) => {
        console.log('ok')
        console.log(data)
        reviews.innerHTML = "";
        reviews.insertAdjacentHTML("beforeend", createMarkUp(data))
        const backBtn = document.querySelector('.back-btn');
         const nextBtn = document.querySelector('.next-btn');
        const revSwiper = new Swiper('.rev-swiper', {
        
       slidesPerView: 1,
       spaceBetween: 16, 
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
  },
   
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.back-btn',
    },
    
            on: {
                slideChange: function () {
                    if (revSwiper.isBeginning) {
                     
                        
                        backBtn.classList.add('disabled');
                        backBtn.firstElementChild.classList.add('disabled');
                    
                    } else {
                       backBtn.classList.remove('disabled');
                       backBtn.firstElementChild.classList.remove('disabled');
                    }

                    if (revSwiper.isEnd) {
                       
                        nextBtn.classList.add('disabled');
                        nextBtn.firstElementChild.classList.add('disabled');
                    }else
                    {
                         nextBtn.classList.remove('disabled');
                         nextBtn.firstElementChild.classList.remove('disabled');
                    }
                }
            }
    
          

            
       
        });


    })


  .catch((error) => {
        
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        }
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry) {
               
                toShowMessage(error); // Передаємо помилку у функцію
            
            }
        });
    }, options);
  
        observer.observe(reviews);
   
        
});



 
 
function createMarkUp(arr) {
    return arr.map(({ author, avatar_url, review }) => `<li class="swiper-slide  reviews-item">
  <div class="wraper"><img class="reviews-img" src="${avatar_url}" alt="${author}">
  <h2 class="review-author">${author}</h2>
  <p class="review-text">${review}</p>
</div></li>`).join("")
    
}

function toShowMessage(error) {
      
    iziToast.show({
        title: "X",
        message: `${error.message}`,
        position: "center",
        color: "red",
    });
   
    reviews.innerHTML = "Not found"; // Виправлено доступ до елемента
   
}

