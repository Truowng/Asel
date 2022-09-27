const projectImageSources = [
  "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1663811397374-a51d5ae11b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  " https://images.unsplash.com/photo-1663811396760-b6c84fa45ee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1663811397078-168ff96dc9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1663811397268-84e66669dc23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1663811396522-cab0eb7b501e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1663811396500-d128a4df7369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1663811396777-05505d999151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
];

const projectTitle = document.querySelector(".project-title");
const projectItems = document.querySelectorAll(".project-item-container");
let projectItemCurrent = 0;
let projectItemTarget = 0;
let projectItemEase = 0.03;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  return (el.style.transform = transform);
}

function projectItemAnimate() {
  projectItemCurrent = parseFloat(
    lerp(projectItemCurrent, projectItemTarget, projectItemEase)
  ).toFixed(2);
  projectItemTarget = window.scrollY;
  setTransform(projectTitle, `translateY(-${projectItemCurrent / 50}px)`);
  projectItems.forEach((projectItem, index) => {
    projectItem.style.backgroundImage = `url(${projectImageSources[index]})`;
    setTransform(projectItem, `translateY(-${projectItemCurrent / 8}px)`);
  });
  requestAnimationFrame(projectItemAnimate);
}

projectItemAnimate();
