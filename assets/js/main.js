let hamburgerBtn = document.querySelector(".nav__hamburger")
let headerNav = document.querySelector(".nav__list")
let navButtons = document.querySelector(".nav__buttons")

hamburgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("activeList")
  navButtons.classList.toggle("activeButtons")
})