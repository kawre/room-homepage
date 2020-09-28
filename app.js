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
const h1 = document.querySelector(".article-top-content h1");
const p = document.querySelector(".article-top-content p");

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

const text = [
  {
    heading: `Discover innovative ways to decorate`,
    desc: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    heading: `We are available all across the globe`,
    desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    heading: `Manufactured with the best materials`,
    desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
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
  sliderImgD.setAttribute("src", "images/" + imagesDesktop[i]);
  h1.innerHTML = text[i].heading;
  p.innerHTML = text[i].desc;
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
  sliderImgM.setAttribute("src", "images/" + imagesMobile[i]);
  h1.innerHTML = text[i].heading;
  p.innerHTML = text[i].desc;
}
