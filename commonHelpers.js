import{f,i as m}from"./assets/vendor-651d7991.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let d;const i=document.querySelector("button[data-start]");i.disabled=!0;const h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()>Date.now()?(d=t[0].getTime(),i.disabled=!1):(m.show({position:"topCenter",iconColor:"#FAFAFB",iconUrl:"/goit-js-hw-10/assets/bi_x-octagon.svg",messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#FC5A5A",close:!1,closeOnClick:!0,message:"Please choose a date in the future!"}),i.disabled=!0)}};f("#datetime-picker",b);i.addEventListener("click",t=>{const r=setInterval(()=>{i.disabled=!0;const s=d-Date.now(),n=C(s);s<=0?clearInterval(r):(h.textContent=c(n.days),y.textContent=c(n.hours),p.textContent=c(n.minutes),g.textContent=c(n.seconds))},1e3)});function C(t){const o=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:a,minutes:u,seconds:l}}function c(t){return t=String(t),t.length<2?t.padStart(2,"0"):t}
//# sourceMappingURL=commonHelpers.js.map
