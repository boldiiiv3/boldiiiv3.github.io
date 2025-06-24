// Téma váltás gomb kezelése
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// "Hire Me" gomb scroll sima görgetéshez
document.getElementById("hireMeBtn").addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

// Scroll reveal funkció - elemek animált megjelenítése
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
