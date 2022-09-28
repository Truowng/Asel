let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let buttons = Array.from(document.querySelectorAll("button"));
let inputs = Array.from(document.querySelectorAll("input"));
let labels = Array.from(document.querySelectorAll("label"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.querySelector(".inner-cursor p").style.opacity = `1`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(1)`;
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    document.querySelector(".inner-cursor p").style.opacity = `0`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(0)`;
    innerCursor.classList.remove("grow");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  button.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

inputs.forEach((input) => {
  input.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  input.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

labels.forEach((label) => {
  label.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  label.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

document
  .querySelector(".header-menu-button-icon")
  .addEventListener("mouseover", () => {
    document.querySelector(".inner-cursor p").style.opacity = `1`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(1)`;
    innerCursor.classList.add("grow");
  });
document
  .querySelector(".header-menu-button-icon")
  .addEventListener("mouseleave", () => {
    document.querySelector(".inner-cursor p").style.opacity = `0`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(0)`;
    innerCursor.classList.remove("grow");
  });
document
  .querySelector(".header-modal-menu-button-icon")
  .addEventListener("mouseover", () => {
    document.querySelector(".inner-cursor p").style.opacity = `1`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(1)`;
    innerCursor.classList.add("grow");
  });
document
  .querySelector(".header-modal-menu-button-icon")
  .addEventListener("mouseleave", () => {
    document.querySelector(".inner-cursor p").style.opacity = `0`;
    document.querySelector(
      ".inner-cursor p"
    ).style.transform = `rotate(-45deg) scale(0)`;
    innerCursor.classList.remove("grow");
  });
