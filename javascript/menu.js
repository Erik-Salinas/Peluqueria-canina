const menu = document.querySelector('header');
const checkbox = document.getElementById('check');
const menuLinks = document.querySelectorAll('.menu ul li a');

checkbox.addEventListener('change', () => {
  menu.classList.toggle('menu-abierto');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-abierto');
    checkbox.checked = false; // Asegurarse de que el checkbox también se desmarque
  });
});
