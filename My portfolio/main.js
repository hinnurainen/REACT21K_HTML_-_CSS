let header = document.querySelector(".main_nav");
let buttonToTop = document.getElementById("myBtn");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    buttonToTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);