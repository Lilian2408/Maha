
let typed = new Typed('.highlight4', {
  strings: [
    "Job",
    "Hire",
    "Recruit",
    "Team",
    "Talent",
    "Match",
  ], backSpeed: "9", typeSpeed: "9", loop: true
})

const menuOpen = document.querySelector('.ri-menu-line');
const menuClose = document.querySelector('.ri-close-circle-fill');
const nav = document.querySelector('nav ul')


menuOpen.addEventListener('click', function () {
  nav.style.top = '45%';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
})

menuClose.addEventListener('click', function () {
  nav.style.top = '-35%';
  menuClose.style.display = 'none';
  menuOpen.style.display = 'block';
})

