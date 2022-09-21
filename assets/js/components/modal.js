const modalContainer = document.querySelector(".modal-container");
const menuModalButton = document.querySelector(
  ".header-modal-menu-button-container"
);
const menuButton = document.querySelector(".header-menu-button-container");

menuButton.addEventListener("click", show);
menuModalButton.addEventListener("click", hide);

function show() {
  modalContainer.style.transform = "translateX(0)";
}

function hide() {
  modalContainer.style.transform = "translateX(100%)";
}
