const serviceImagesSource = [
  "https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1545034210-264a82b4688b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1563786785330-2ad8162ef53a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1536437075651-01d675529a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1495754149474-e54c07932677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const serviceContainer = document.querySelector(".service-container");
const serviceWrapper = document.querySelector(".service-wrapper");
const serviceImageContainers = document.querySelectorAll(".service-item-image");

let serviceWrapperWidth;
let serviceContainerHeight;
let serviceWrapperCurrent = 0;
let serviceWrapperTarget = 0;
let serviceWrapperEase = 0.1;

serviceImageContainers.forEach((serviceImageContainer, index) => {
  serviceImageContainer.style.backgroundImage = `url(${serviceImagesSource[index]})`;
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  return (el.style.transform = transform);
}

function init() {
  serviceWrapperWidth = serviceWrapper.getBoundingClientRect().width;
}

init();

window.addEventListener("resize", init);

function serviceWrapperAnimate() {
  serviceWrapperCurrent = parseFloat(
    lerp(serviceWrapperCurrent, serviceWrapperTarget, serviceWrapperEase)
  ).toFixed(2);
  serviceWrapperTarget = window.scrollY;
  setTransform(serviceWrapper, `translateX(-${serviceWrapperCurrent}px)`);
  serviceImageContainers.forEach((serviceImageContainer) => {
    serviceImageContainer.style.backgroundPosition = `-${
      serviceWrapperCurrent / 12
    }px, center`;
  });

  requestAnimationFrame(serviceWrapperAnimate);
}

serviceWrapperAnimate();

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".service-container", 1, {
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scence = new ScrollMagic.Scene({
  triggerElement: ".service-container",
  duration: 7600,
  triggerHook: 0,
})
  .setTween(tween)
  //   .addIndicators()
  .setPin(".service-container")
  .addTo(controller);
