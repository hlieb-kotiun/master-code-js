import{A as g,S as v,N as h,P as b,a as E,i as m}from"./assets/vendor-DonBGO0S.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){new g(".accordion-container",{showMultiple:!0,duration:300})});console.log("header");console.log("hero");console.log("about-me");new v(".swiper",{modules:[h,b,E],slidesPerView:1,spaceBetween:0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){const t=document.querySelector(".right-btn"),e=document.querySelector(".left-btn");this.isEnd?t.setAttribute("disabled",!0):t.removeAttribute("disabled"),this.isBeginning?e.setAttribute("disabled",!0):e.removeAttribute("disabled")}},loop:!1,autoplay:!1});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".covers-container"),e=document.querySelectorAll(".image-container"),s=document.querySelectorAll(".covers-item");t&&new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?e.forEach(a=>{a.style.animationPlayState="running"}):e.forEach(a=>{a.style.animationPlayState="paused"})})},{threshold:.3}).observe(t),s.forEach(r=>{r.addEventListener("click",()=>{e.forEach(o=>{o.style.animationPlayState==="running"?o.style.animationPlayState="paused":o.style.animationPlayState="running"})})})});const S="https://portfolio-js.b.goit.study/api/requests",u=document.querySelector(".contact-form"),c=document.querySelector(".footer-input"),i=document.querySelector(".footer-textarea"),l=document.querySelector(".footer-modal"),w=document.querySelector(".modal-close-btn"),f=document.querySelector(".footer-backdrop");async function L(t){try{const e=await fetch(S,t);if(!e.ok)throw new Error("Not found");return await e.json()}catch(e){throw console.error("Error during post request:",e),e}}function q(){l.classList.add("is-open"),f.classList.add("is-open")}function d(){l.classList.remove("is-open"),f.classList.remove("is-open")}w.addEventListener("click",d);document.addEventListener("keydown",t=>{t.key==="Escape"&&d()});l.addEventListener("click",t=>{t.target===l&&d()});function p(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t.toLowerCase())}function P(t){y(t);const e=t.value,s=p(e);A(t,s?"Success!":"Invalid email, try again",s?"success":"error")}function A(t,e,s){const r=document.createElement("label");r.textContent=e,r.className=s==="success"?"success-label":"error-label",t.insertAdjacentElement("afterend",r)}function y(t){const e=t.parentNode.querySelector("label");e&&e.remove()}function O(t,e){return t.length>e?t.slice(0,e)+"...":t}i.addEventListener("change",()=>{i.value=O(i.value,20)});function I(){m.show({color:"red",message:"ERROR SERVER",position:"topCenter"})}u.addEventListener("submit",async t=>{t.preventDefault();const e=c.value.trim(),s=i.value.trim();if(p(e)&&s){const r={method:"POST",body:JSON.stringify({email:e,comment:s}),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{await L(r),q(),u.reset()}catch{I()}}else m.show({color:"red",message:"All form fields must be filled in",position:"topCenter"});y(c)});c.addEventListener("change",()=>{P(c)});
//# sourceMappingURL=index.js.map