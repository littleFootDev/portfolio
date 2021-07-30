window.onload = function () {
  let t1 = new TimelineMax();

  t1.to(".panneau", 3, { top: "-150%", autoAlpha: 0, ease: Expo.easeInOut });
};
const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");
btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("max-width:1300px")) {
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}
// Annimation écriture

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20,
});
typewriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("Moi c'est Jacques Caradi")
  .pauseFor(300)
  .typeString("<strong>, Developpeur Full-Stack</strong> !")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #27ae60"> M.E.R.N</span> !')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #EA39ff"> Javascript</span> !')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: midnightblue"> Node.js</span> !')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #ff6910"> React</span> !')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: red"> Swift</span> !')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: purple"> C#</span> !')

  .start();
