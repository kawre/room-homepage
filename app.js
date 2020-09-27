const hamBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav-bar");

hamBtn.addEventListener("click", function () {
  const close = document.querySelector(".close-nav");
  nav.classList.add("show-nav");
  close.addEventListener("click", () => {
    nav.classList.remove("show-nav");
  });
});

// img slider

const sliderImgD = document.querySelector(".slider-img-d");
const sliderImgM = document.querySelector(".slider-img-m");

const imagesDesktop = [
  "desktop-image-hero-1.jpg",
  "desktop-image-hero-2.jpg",
  "desktop-image-hero-3.jpg",
];

const imagesMobile = [
  "mobile-image-hero-1.jpg",
  "mobile-image-hero-2.jpg",
  "mobile-image-hero-3.jpg",
];

let i = 0;

/** desktop **/

function left() {
  if (i <= 0) i = imagesDesktop.length;
  i--;
  return setImgD();
}

function right() {
  if (i >= imagesDesktop.length - 1) i = -1;
  i++;
  return setImgD();
}

function setImgD() {
  return sliderImgD.setAttribute("src", "images/" + imagesDesktop[i]);
}

/** mobile **/

function leftM() {
  if (i <= 0) i = imagesMobile.length;
  i--;
  return setImgM();
}

function rightM() {
  if (i >= imagesMobile.length - 1) i = -1;
  i++;
  return setImgM();
}

function setImgM() {
  return sliderImgM.setAttribute("src", "images/" + imagesMobile[i]);
}
