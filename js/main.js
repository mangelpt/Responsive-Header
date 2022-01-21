const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu ");

hamburger.addEventListener('click', () => {
  hamburgerMenu.classList.toggle("show")
  console.log("click me ");
})