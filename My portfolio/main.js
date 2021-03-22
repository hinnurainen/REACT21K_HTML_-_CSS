let header = document.querySelector(".main_nav");
let buttonToTop = document.getElementById("topBtn");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
let logo = document.getElementById("logo");
let logoSound;

window.onload = function () {
  logoFunction();
}

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

const logoFunction = () => {
  logoSound = new sound('./Sheep-Lamp-Bleat-A-www.fesliyanstudios.com.mp3');
  logoSound.play();
}

buttonToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);
logo.addEventListener("click", logoFunction);

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
    this.sound.pause();
  }
}

let i = 0;
let txt = 'Welcome to my portfolio';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("bannertext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

if (window.location.pathname === '/index.html') {
  typeWriter();
}

