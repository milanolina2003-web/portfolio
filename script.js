// === 🎵 Music Button Function ===
const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("background-audio");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    musicBtn.textContent = "🔇 Stop the music";
    isPlaying = true;
  } else {
    audio.pause();
    musicBtn.textContent = "🎵 Want some music?";
    isPlaying = false;
  }
});


// === 🍔 Burger Menu ===
const burger = document.getElementById("burger");
const menuList = document.getElementById("menu-list");

burger.addEventListener("click", () => {
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

// === 🖱️ Scroll to Portfolio Section ===
const exploreBtn = document.getElementById("explore");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    document
      .getElementById("portfolio")
      .scrollIntoView({ behavior: "smooth" });
  });
}

// === 🌈 Smooth Fade on Scroll (optional animation) ===
window.addEventListener("scroll", () => {
  const intro = document.querySelector(".intro-text");
  const cards = document.querySelectorAll(".card");
  const scrollY = window.scrollY + window.innerHeight;

  if (intro.offsetTop < scrollY - 50) {
    intro.style.opacity = "1";
    intro.style.transform = "translateY(0)";
  }

  cards.forEach((card) => {
    if (card.offsetTop < scrollY - 50) {
      card.style.opacity = "1";
      card.style.transform = "rotateY(0) rotateX(0) scale(1)";
    }
  });
});
