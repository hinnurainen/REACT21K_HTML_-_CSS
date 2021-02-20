let header = document.querySelector("header");
let buttonToTop = document.getElementById("myBtn");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector(".main_nav");
let links = document.querySelectorAll(".main_nav ul li a");

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
  if (main_nav.classList.contains("responsive")) {
    main_nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    main_nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);


/*let header = document.querySelector("#main_nav");
let footer = document.getElementById("myBtn");

const scrollHeader = (event) => {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50) {
    header.style.position = fixed;
  }
};

const clickToTop = (event) => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    footer.style.display = block;
  } else {
    footer.style.display = none;
  }
};

header.addEventListener("scroll", scrollHeader);
footer.addEventListener("click", clickToTop);
*/

/*

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/


/*/ When the user scrolls down 50px from the top of the document, resize the header's font size /*
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "16px";
  } else {
    document.getElementById("header").style.fontSize = "32px";
  }
}

*/