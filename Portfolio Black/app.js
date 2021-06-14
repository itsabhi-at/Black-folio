"use strict";
let controller;
let slideScene;
function animateSlides() {
  controller = new ScrollMagic.Controller();
  //select things
  const sliders = document.querySelectorAll(".slide1");
  const navs = document.querySelectorAll(".navbar");
  const descone = document.querySelectorAll(".desc-one");

  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    // const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    gsap.to(revealImg, 1.5, { x: "100%" });
    gsap.to(revealText, 1.5, { x: "-100%" });
    // gsap.to(revealnav, 1, { x: "-100%" });
  });
  navs.forEach((nav) => {
    const revealNav = nav.querySelector(".nav-reveal");
    gsap.to(revealNav, 2, { x: "100%" });
  });
  descone.forEach((desc) => {
    const revealleft1 = desc.querySelector(".reveal-left1");
    const revealright1 = desc.querySelector(".reveal-right1");
    gsap.to(revealleft1, 1.5, { x: "-100%" });
    gsap.to(revealright1, 1.5, { x: "100%" });
  });
}
animateSlides();
