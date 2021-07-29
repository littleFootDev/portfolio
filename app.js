window.onload = function () {
  let t1 = new TimelineMax();

  t1.to(".panneau", 3, { top: "-150%", autoAlpha: 0, ease: Expo.easeInOut });
};
