let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
    scrollFunction();
};

/* function headerFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#2424248e";
        header.style.color = "#fff";
        header.style.padding = "1rem"
    } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "#000";
        header.style.padding = "2rem";
    }
} */

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ) {
        header.classList.add("bg");
        buttonBackToTop.style.display = "block";
    } else {
        header.classList.remove("bg");
        buttonBackToTop.style.display = "none";
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

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);