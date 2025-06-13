// Menu Hanburguer 

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

  // Mostrar menu
  if(navToggle){
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Ocultar menu
  if(navClose){
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // Fechar ao clicar em qualquer link
  document.querySelectorAll('.nav__link').forEach(n => 
    n.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  );
});
