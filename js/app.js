const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-left');
const allItemNav = document.querySelectorAll('.nav-menu-items');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

  ligne.classList.toggle('active');
  nav.classList.toggle('menu-visible');
})

if (window.matchMedia('(max-width: 1300px)')){
  
  allItemNav.forEach(item => {
    item.addEventListener('click', () =>{
      nav.classList.toggle('menu-visible')
      ligne.classList.toggle('active')
    })
  })
}