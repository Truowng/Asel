const modalContainer = document.querySelector(".modal-container");
const menuModalButton = document.querySelector(
  ".header-modal-menu-button-container"
);
const menuButton = document.querySelector(".header-menu-button-container");
const menuItems = document.querySelectorAll(".menu-item span");

menuButton.addEventListener("click", show);
menuModalButton.addEventListener("click", hide);

function show() {
  modalContainer.style.transform = "translateX(0)";
  menuItems.forEach((menuItem) => {
    menuItem.style.transform = "translateY(0)";
    menuItem.style.transition = "all 1s cubic-bezier(0.77, 0, 0.175, 1) 0.65s";
  });
}

function hide() {
  modalContainer.style.transform = "translateX(100%)";
  menuItems.forEach((menuItem) => {
    menuItem.style.transform = "translateY(100%)";
    menuItem.style.transition = "all 0.65s cubic-bezier(0.77, 0, 0.175, 1)";
  });
}
