window.onload = function () {
  const navbar = document.querySelector(".nav-gauche");
  const titre = document.querySelector("h1");
  const btn = document.querySelectorAll(".btn-acc");
  const btnMedia = document.querySelectorAll(".media");
  const btnRondAccueil = document.querySelector(".btn-rond");

  let t1 = new TimelineMax();
  let t2 = new TimelineMax();

  t1.to(".panneau", 3, { top: "-150%", autoAlpha: 0, ease: Expo.easeInOut });

  t2.to(navbar, 1, { left: "0", ease: Power3.easeOut, duration: 0.6 }, 1)
    .from(titre, 1, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.30")
    .staggerFrom(btnMedia, 1, { opacity: 0 }, 0.2, "-=0.75")
    .from(
      btnRondAccueil,
      1,
      { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 },
      "-=1"
    );

  // Annimation GSAP + ScrollMagic presentation

  const presentationContainer = document.querySelector(".presentation");
  const titrePres = document.querySelector(".titre-pres");
  const presGauche = document.querySelector(".pres-gauche");
  const listPres = document.querySelectorAll(".item ");

  let tlpres = new TimelineMax();

  tlpres
    .from(titrePres, 1, { y: -200, opacity: 0, duration: 0.6 })
    .from(presGauche, 1, { y: -20, opacity: 0, duration: 0.6 }, "-=.5")
    .staggerFrom(listPres, 1, { opacity: 0 }, 0.2, "-=.5");

  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(tlpres)
    .addTo(controller);

  // annim portfolio

  const portfolioContainer = document.querySelector(".portfolio");
  const titrePortfolio = document.querySelector(".titre-port");
  const itemPortfolio = document.querySelectorAll(".vague1");

  let tlPortfolio = new TimelineMax();

  tlPortfolio
    .from(titrePortfolio, 1, {
      y: -50,
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.5,
    })
    .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=.5");

  const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(tlPortfolio)
    .addTo(controller);

  // vague 2
  const itemPortfolio2 = document.querySelectorAll(".vague2");

  let tlPortfolio2 = new TimelineMax();

  tlPortfolio2.staggerFrom(itemPortfolio2, 2, { opacity: 0 }, 0.2, "-=0.5");

  const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false,
  })
    .setTween(tlPortfolio2)
    .addTo(controller);

  //vague 3
  const itemPortfolio3 = document.querySelectorAll(".vague3");

  let tlPortfolio3 = new TimelineMax();

  tlPortfolio3.staggerFrom(itemPortfolio3, 2, { opacity: 0 }, 0.2, "-=0.5");

  const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio3,
    triggerHook: 0.2,
    reverse: false,
  })
    .setTween(tlPortfolio3)
    .addTo(controller);

  // animation range

  const sectionComp = document.querySelector(".section-range");
  const titreComp = document.querySelector(".titre-exp");
  const allLabel = document.querySelectorAll(".label-skill");
  const allImage = document.querySelectorAll(".image-skill");

  const tlCompetences = new TimelineMax();

  tlCompetences
    .from(titreComp, 1, { opacity: 0, duration: 0.6 })
    .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.1, "-=.5")
    .staggerFrom(allImage, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1");

  const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false,
  })
    .setTween(tlCompetences)
    .addTo(controller);
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
  .pauseFor(3100)
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

//   Animation Contact Form

const inputField = document.querySelectorAll("input");

for (let i = 0; i < inputField.length; i++) {
  let field = inputField[i];

  field.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("animation");
    } else if (e.target.value === "") {
      e.target.parentNode.classList.remove("animation");
    }
  });
}
