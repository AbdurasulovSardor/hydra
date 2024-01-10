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
arrowBtn.forEach(button => {
  button.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth;
    homeList.scrollLeft += button.id == "left" ? -firstItemWidth : firstItemWidth
  })
});

///////////////////////////////////////////////////

let buildList = document.querySelector(".build__list")
let buildItem = document.querySelectorAll(".build__item")[0]
let buildBtn = document.querySelectorAll(".build__card-button")

buildBtn.forEach(button => {
  button.addEventListener("click", () => {
    let firstBuildItem = buildItem.clientWidth
    buildList.scrollLeft += button.id == "build-left" ? -firstBuildItem : firstBuildItem
  })
})

////////////////////////////////////////////

let techDesc = document.querySelector(".technologies__description")
let techBtn = document.querySelector(".technologies__toggle")

techBtn.addEventListener("click", () => {
  techDesc.classList.toggle("showTech")
})

////////////////////////////////////////////

let infoList = document.querySelector(".information__list")
let infoItem = document.querySelectorAll(".information__item")[0]
let infoBtn = document.querySelectorAll(".information__button")

infoBtn.forEach(button => {
  button.addEventListener("click", () => {
    let firstInfoItem = infoItem.clientWidth
    infoList.scrollLeft += button.id == "info-left" ? -firstInfoItem : firstInfoItem
  })
})