/* Hamburger Menu */
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__pages");
  const navLinks = document.querySelectorAll(".navbar__pages a");

  console.log(nav);
  console.log(burger);

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav__active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 1 ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();

/* GSAP animations */
gsap.from(".info__container h1", { duration: 1, y: "-100%" });
gsap.from(".info__container p", { duration: 1, opacity: 0, stagger: 2 });
gsap.from(".about__me h1", { duration: 1, y: "-100%" });
gsap.from(".about__me__sections > div > h1", {
  opacity: 0,
  stagger: 0.5,
});
gsap.from(".about__me__sections > div > p", {
  opacity: 0,
  stagger: 0.5,
});

gsap.from(".navbar", { duration: 2, opacity: 0, stagger: 2 });
gsap.from(".works__container h1", { duration: 1, y: "-50%" });
gsap.from(".works__container p", { duration: 1, opacity: 0, stagger: 2 });
gsap.from(".work", { duration: 0.5, opacity: 0, stagger: 0.5 });

/* Cursor animation*/
let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".navbar__pages");

window.addEventListener("mousemove", function (e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("link__effect");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link__effect");
  });
});
