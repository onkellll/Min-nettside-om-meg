
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ' ]')
                .classList.add('active')
            })
        }

    })
}

function toggleMenu() {
    // Toggle sidebaren åpen/lukket
    document.getElementById("minSidebar").classList.toggle("open");

    // Toggle mellom hamburger og kryss for header-ikonet
    var bars = document.querySelector(".meny");
    bars.classList.toggle("change");
}


// Funksjon for å lukke menyen
function closeNav() {
    document.getElementById("minSidebar").classList.remove("open");
    document.querySelector(".meny").classList.remove("change");
}

// Funksjon for å åpne/lukke menyen og endre hamburger-ikonet
function toggleMenu() {
    // Toggle sidebar open/close
    document.getElementById("minSidebar").classList.toggle("open");

    // Toggle hamburgermeny-ikonet (endre til kryss eller tilbake til hamburger)
    document.querySelector(".meny").classList.toggle("change");
}

// Funksjon for å lukke menyen når man klikker på kryssikonet
function closeNav() {
    document.getElementById("minSidebar").classList.remove("open");
    document.querySelector(".meny").classList.remove("change");
}