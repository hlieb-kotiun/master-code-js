import{S as i,N as c,P as l,a}from"./assets/vendor-d9gVoKLF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();console.log("header");console.log("hero");console.log("about-me");new i(".swiper",{modules:[c,l,a],slidesPerView:1,spaceBetween:0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!1,autoplay:!0});const u=document.querySelector(".footer-modal"),d=document.querySelector(".footer-backdrop"),f=document.querySelector(".modal-close-btn");function p(){u.classList.remove("is-open"),d.classList.remove("is-open")}f.addEventListener("click",p);
//# sourceMappingURL=index.js.map