import{S as f,N as w,P as h,a as E,A as p,i as y,K as S,M as L}from"./assets/vendor-Dsi-S8qo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();console.log("header");console.log("hero");new f(".swiper",{modules:[w,h,E],slidesPerView:1,spaceBetween:0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){const e=document.querySelector(".right-btn"),t=document.querySelector(".left-btn");this.isEnd?e.setAttribute("disabled",!0):e.removeAttribute("disabled"),this.isBeginning?t.setAttribute("disabled",!0):t.removeAttribute("disabled")}},loop:!1,autoplay:!1});document.addEventListener("DOMContentLoaded",function(){new p(".js-accordion-container",{showMultiple:!0,duration:300})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-container"),t=document.querySelectorAll(".image-container"),n=document.querySelectorAll(".covers-item");e&&new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?t.forEach(i=>{i.style.animationPlayState="running"}):t.forEach(i=>{i.style.animationPlayState="paused"})})},{threshold:.3}).observe(e),n.forEach(r=>{r.addEventListener("click",()=>{t.forEach(o=>{o.style.animationPlayState==="running"?o.style.animationPlayState="paused":o.style.animationPlayState="running"})})})});const q="https://portfolio-js.b.goit.study/api/requests",m=document.querySelector(".contact-form"),c=document.querySelector(".footer-input"),a=document.querySelector(".footer-textarea"),l=document.querySelector(".footer-modal"),P=document.querySelector(".modal-close-btn"),v=document.querySelector(".footer-backdrop");async function A(e){try{const t=await fetch(q,e);if(!t.ok)throw new Error("Not found");return await t.json()}catch(t){throw console.error("Error during post request:",t),t}}function I(){l.classList.add("is-open"),v.classList.add("is-open")}function u(){l.classList.remove("is-open"),v.classList.remove("is-open")}P.addEventListener("click",u);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});l.addEventListener("click",e=>{e.target===l&&u()});function b(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function O(e){g(e);const t=e.value,n=b(t),r=n?"Success!":"Invalid email, try again",o=n?"success":"error";n?e.style.borderBottom="2px solid green":e.style.borderBottom="2px solid red",M(e,r,o)}function k(e){e.style.borderBottom=""}function M(e,t,n){const r=document.createElement("label");r.textContent=t,r.className=n==="success"?"success-label":"error-label",e.insertAdjacentElement("afterend",r)}function g(e){const t=e.parentNode.querySelector("label");t&&t.remove()}function N(e,t){return e.length>t?e.slice(0,t)+"...":e}a.addEventListener("change",()=>{a.value=N(a.value,20)});function C(){y.show({color:"red",message:"ERROR SERVER",position:"topCenter"})}m.addEventListener("submit",async e=>{e.preventDefault();const t=c.value.trim(),n=a.value.trim();if(b(t)&&n){const r={method:"POST",body:JSON.stringify({email:t,comment:n}),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{await A(r),I(),m.reset(),k(c)}catch{C()}}else y.show({color:"red",message:"All form fields must be filled in",position:"topCenter"});g(c)});c.addEventListener("change",()=>{O(c)});const x=document.querySelector(".accordeon-list");new p(x,{duration:600,showMultiple:!0,openOnInit:[0]});const B=document.querySelectorAll(".accordeon-title");B.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".title-icon"),n=e.nextElementSibling;t.classList.toggle("active-is"),n.classList.toggle("hidden")})});const V=document.querySelector(".swiper-next"),R=document.querySelector(".about-me-swiper-container"),d=new f(".about-me-skills",{modules:[S,L],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});V.addEventListener("click",()=>{d.slideNext()});R.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?d.slideNext():d.slidePrev()});
//# sourceMappingURL=index.js.map
