const hamBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav-bar");

hamBtn.addEventListener("click", function () {
  const close = document.querySelector(".close-nav");
  nav.classList.add("show-nav");
  close.addEventListener("click", () => {
    nav.classList.remove("show-nav");
  });
});
