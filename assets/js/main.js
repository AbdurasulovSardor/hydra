let hamburgerBtn = document.querySelector(".nav__hamburger")
let headerNav = document.querySelector(".nav__list")
let navButtons = document.querySelector(".nav__buttons")

hamburgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("activeList")
  navButtons.classList.toggle("activeButtons")
})

///////////////////////////////////////////////

let homeList = document.querySelector(".home__list")
let firstItem = document.querySelectorAll(".home__item")[0]
let arrowBtn = document.querySelectorAll(".home__arrow")
let scrollWidth = homeList.scrollWidth - homeList.clientWidth
const showHideBtn = () => {
  arrowBtn[0].style.display = homeList.scrollLeft == 0 ? "none" : "block"
  arrowBtn[1].style.display = homeList.scrollLeft == scrollWidth ? "none" : "block"
}
showHideBtn()
arrowBtn.forEach(button => {
  button.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth;
    homeList.scrollLeft += button.id == "left" ? -firstItemWidth : firstItemWidth
    setTimeout(() => showHideBtn(), 60)
  })
});

///////////////////////////////////////////////////

let buildList = document.querySelector(".build__list")
let buildItem = document.querySelectorAll(".build__item")[0]
let buildBtn = document.querySelectorAll(".build__card-button")
let buildScrollWidth = buildList.scrollWidth - buildList.clientWidth

buildBtn.forEach(button => {
  button.addEventListener("click", () => {
    let firstBuildItem = buildItem.clientWidth
    buildList.scrollLeft += button.id == "build-left" ? -firstBuildItem : firstBuildItem
  })
})
