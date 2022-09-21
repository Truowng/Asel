// const videoBannerContainer = document.querySelector(".video-banner-container");
// const videoBanner = document.querySelector(".video-banner");
// let videoBannerContainerWidth;
// let videoBannerCurrent = 0;
// let videoBannerTarget = 0;
// let videoBannerEase = 0.08;

// function lerp(start, end, t) {
//   return start * (1 - t) + end * t;
// }

// function setTransform(el, transform) {
//   return (el.style.width = transform);
// }

// function init() {
//   videoBannerContainerWidth =
//     videoBannerContainer.getBoundingClientRect().width;
//   videoBannerContainer.style.height = `${
//     2 * videoBannerContainerWidth - (window.innerWidth - window.innerHeight)
//   }px`;
//   console.log(videoBannerContainer.style.height);
// }

// init();

// window.addEventListener("resize", init);

// function videoBannerAnimate() {
//   videoBannerCurrent = parseFloat(
//     lerp(videoBannerCurrent, videoBannerTarget, videoBannerEase)
//   ).toFixed(2);
//   videoBannerTarget = window.scrollY;
//   setTransform(videoBanner, `calc(60% + ${videoBannerCurrent}%)`);
//   requestAnimationFrame(videoBannerAnimate);
// }

// videoBannerAnimate();

// const videoBanner = document.querySelector(".video-banner");
// const videoBannerContainer = document.querySelector(".video-banner-container");
// const videoRect = videoBannerContainer.getBoundingClientRect();
// let videoBannerTarget = 0;
// let videoBannerCurrent = 0;
// let videoBannerEase = 0.05;

// const lerp = (start, end, t) => {
//   return start * (1 - t) + end * t;
// };

// const videoBannerAnimate = (element, position) => {
//   if (position < 22.5) {
//   }
//   element.style.width = `calc(60% + ${position}%)`;
// };

// document.addEventListener("scroll", function (e) {
//   videoBannerCurrent = parseFloat(
//     lerp(videoBannerCurrent, videoBannerTarget, videoBannerEase)
//   ).toFixed(2);
//   videoBannerCurrent = window.scrollY;

//   window.requestAnimationFrame(function () {
//     videoBannerAnimate(videoBanner, videoBannerCurrent * +0.05);
//   });
// });
