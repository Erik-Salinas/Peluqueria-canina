//*MENU 
let header = document.querySelector("header");

window.addEventListener("scroll", function (){
    header.classList.toggle("menu-abajo", window.scrollY > 0);
}) 