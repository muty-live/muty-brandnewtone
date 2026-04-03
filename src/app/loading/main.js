const loading = document.querySelector('.loading');
const left = document.querySelector('.loading-logo-left');
const right = document.querySelector('.loading-logo-right');
const text = document.querySelector('.loading-logo-text');
let delay = 500; // アニメーションが開始するまでの時間

setTimeout(() => {
  left.classList.add('is-action');
  right.classList.add('is-action');
  setTimeout(() => {
    text.classList.add('is-action');
    setTimeout(() => {
      loading.classList.add('is-loaded');
    }, 1000)
  }, 400)
}, delay)