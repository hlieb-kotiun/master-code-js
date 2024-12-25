import{S as u,N as h,P as E,a as S,A as y,b as L,i as v,K as P,M as q}from"./assets/vendor-C3XLetNg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();console.log("header");console.log("hero");new u(".project-swiper",{modules:[h,E,S],slidesPerView:1,spaceBetween:0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){const e=document.querySelector(".right-btn"),t=document.querySelector(".left-btn");this.isEnd?e.setAttribute("disabled",!0):e.removeAttribute("disabled"),this.isBeginning?t.setAttribute("disabled",!0):t.removeAttribute("disabled")}},loop:!1,autoplay:!1});document.addEventListener("DOMContentLoaded",function(){new y(".js-accordion-container",{showMultiple:!0,duration:300})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-container"),t=document.querySelectorAll(".image-container"),s=document.querySelectorAll(".covers-item");e&&new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?t.forEach(i=>{i.style.animationPlayState="running"}):t.forEach(i=>{i.style.animationPlayState="paused"})})},{threshold:.3}).observe(e),s.forEach(r=>{r.addEventListener("click",()=>{t.forEach(o=>{o.style.animationPlayState==="running"?o.style.animationPlayState="paused":o.style.animationPlayState="running"})})})});async function A(){return console.log("виклик функції"),await L("https://portfolio-js.b.goit.study/api/reviews")}const p=document.querySelector(".js-review");A().then(({data:e})=>{console.log("повернення з запиту"),console.log(e),p.innerHTML="",p.insertAdjacentHTML("beforeend",I(e)),new u(".rev-swiper",{slidesPerView:1,slidesPerGroup:1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2},1440:{slidesPerView:4,slidesPerGroup:2}}})});function I(e){return e.map(({author:t,avatar_url:s,review:r})=>`<li class="swiper-slide  reviews-item">
  <div class="wraper"><img class="reviews-img" src="${s}" alt="${t}">
  <h2 class="review-author">${t}</h2>
  <p class="review-text">${r}</p>
</div></li>`).join("")}const M="https://portfolio-js.b.goit.study/api/requests",f=document.querySelector(".contact-form"),c=document.querySelector(".footer-input"),a=document.querySelector(".footer-textarea"),l=document.querySelector(".footer-modal"),k=document.querySelector(".modal-close-btn"),w=document.querySelector(".footer-backdrop");async function O(e){try{const t=await fetch(M,e);if(!t.ok)throw new Error("Not found");return await t.json()}catch(t){throw console.error("Error during post request:",t),t}}function x(){l.classList.add("is-open"),w.classList.add("is-open")}function m(){l.classList.remove("is-open"),w.classList.remove("is-open")}k.addEventListener("click",m);document.addEventListener("keydown",e=>{e.key==="Escape"&&m()});l.addEventListener("click",e=>{e.target===l&&m()});function g(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function N(e){b(e);const t=e.value,s=g(t),r=s?"Success!":"Invalid email, try again",o=s?"success":"error";s?e.style.borderBottom="2px solid green":e.style.borderBottom="2px solid red",j(e,r,o)}function V(e){e.style.borderBottom=""}function j(e,t,s){const r=document.createElement("label");r.textContent=t,r.className=s==="success"?"success-label":"error-label",e.insertAdjacentElement("afterend",r)}function b(e){const t=e.parentNode.querySelector("label");t&&t.remove()}function C(e,t){return e.length>t?e.slice(0,t)+"...":e}a.addEventListener("change",()=>{a.value=C(a.value,20)});function R(){v.show({color:"red",message:"ERROR SERVER",position:"topCenter"})}f.addEventListener("submit",async e=>{e.preventDefault();const t=c.value.trim(),s=a.value.trim();if(g(t)&&s){const r={method:"POST",body:JSON.stringify({email:t,comment:s}),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{await O(r),x(),f.reset(),V(c)}catch{R()}}else v.show({color:"red",message:"All form fields must be filled in",position:"topCenter"});b(c)});c.addEventListener("change",()=>{N(c)});const T=document.querySelector(".accordeon-list");new y(T,{duration:600,showMultiple:!0,openOnInit:[0]});const B=document.querySelectorAll(".accordeon-title");B.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".title-icon"),s=e.nextElementSibling;t.classList.toggle("active-is"),s.classList.toggle("hidden")})});const $=document.querySelector(".swiper-next"),U=document.querySelector(".about-me-swiper-container"),d=new u(".about-me-skills",{modules:[P,q],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});$.addEventListener("click",()=>{d.slideNext()});U.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?d.slideNext():d.slidePrev()});
//# sourceMappingURL=index.js.map
