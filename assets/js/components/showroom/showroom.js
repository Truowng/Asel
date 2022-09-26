const showroomListItemImageSources = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80",
  "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1632829882891-5047ccc421bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
];
document.addEventListener("mousemove", moveShowroomListItemImage);

const showroomListItemImage = document.querySelector(
  ".showroom-list-item-image"
);

const showroomListItemLinks = document.querySelectorAll(
  ".showroom-list-item-link"
);

// let showroomListItemImageCurrentX = 0;
// let showroomListItemImageCurrentY = 0;
// let showroomListItemImageTargetX = 0;
// let showroomListItemImageTargetY = 0;
// let showroomListItemImageEase = 0.05;

// function lerp(start, end, t) {
//   return start * (1 - t) + end * t;
// }

function moveShowroomListItemImage(e) {
  //   let showroomListItemImageTargetX = e.clientX;
  //   let showroomListItemImageTargetY = e.clientY;
  let showromListItemImageX = e.clientX;
  let showromListItemImageY = e.clientY;
  //   showroomListItemImageCurrentX = parseFloat(
  //     lerp(
  //       showroomListItemImageCurrentX,
  //       showroomListItemImageTargetX,
  //       showroomListItemImageEase
  //     )
  //   ).toFixed(2);
  //   showroomListItemImageCurrentY = parseFloat(
  //     lerp(
  //       showroomListItemImageCurrentY,
  //       showroomListItemImageTargetY,
  //       showroomListItemImageEase
  //     )
  //   ).toFixed(2);
  //   showroomListItemImageCurrentX;
  showroomListItemImage.style.left = `${showromListItemImageX}px`;
  showroomListItemImage.style.top = `${showromListItemImageY}px`;
}

showroomListItemLinks.forEach((showroomListItemLink, index) => {
  showroomListItemLink.addEventListener("mouseover", () => {
    showroomListItemLink.style.zIndex = "8";
    showroomListItemImage.style.height = "40vh";
    showroomListItemImage.style.backgroundImage = `url(${showroomListItemImageSources[index]})`;
  });
  showroomListItemLink.addEventListener("mouseleave", () => {
    showroomListItemLink.style.zIndex = "1";
    showroomListItemImage.style.height = "0";
  });
});
