const introduceSeparate = document.querySelector(".introduce-separate-text");
const introduceLeftImage = document.querySelector(".introduce-left-image");
const introduceRightImage = document.querySelector(".introduce-right-image");
const introduceLeftContent = document.querySelector(".introduce-left-content");
let current = 0;
let target = 0;
let introduceSeparateEase = 0.08;
let introduceImageEase = 0.01;
let introduceLeftContentEase = 0.01;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  return (el.style.transform = transform);
}

function introduceSeparateAnimate() {
  current = parseFloat(lerp(current, target, introduceSeparateEase)).toFixed(2);
  target = window.scrollY;
  setTransform(introduceSeparate, `translateX(-${current / 2}px)`);
  requestAnimationFrame(introduceSeparateAnimate);
}

function introduceImageAnimate() {
  current = parseFloat(lerp(current, target, introduceImageEase)).toFixed(2);
  target = window.scrollY;
  setTransform(introduceLeftImage, `translateY(-${current / 8}px)`);
  setTransform(introduceRightImage, `translateY(-${current / 8}px)`);
  requestAnimationFrame(introduceImageAnimate);
}

function introduceLeftContentAnimate() {
  current = parseFloat(lerp(current, target, introduceLeftContentEase)).toFixed(
    2
  );
  target = window.scrollY;

  setTransform(introduceLeftContent, `translateY(-${current / 5}px)`);
  requestAnimationFrame(introduceLeftContentAnimate);
}

introduceLeftContentAnimate();
introduceImageAnimate();
introduceSeparateAnimate();
