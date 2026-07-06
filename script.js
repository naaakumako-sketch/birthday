const openButton = document.getElementById("openButton");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const artwork = document.getElementById("artwork");
const backButton = document.getElementById("backButton");
const lightbox = document.getElementById("lightbox");
const flash = document.getElementById("flash");
const sparkles = document.querySelector(".sparkles");

sparkles.innerHTML = "";

for (let i = 0; i < 25; i++) { {
  const star = document.createElement("span");

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.animationDelay = (Math.random() * 3) + "s";
  star.style.animationDuration = (2 + Math.random() * 3) + "s";

  const size = 18 + Math.random() * 22;
  star.style.width = size + "px";
  star.style.height = size + "px";

  sparkles.appendChild(star);
}

function switchPage(show, hide) {
  hide.style.opacity = "0";

  setTimeout(() => {
    hide.style.display = "none";
    show.style.display = "flex";

    show.style.opacity = "0";

    requestAnimationFrame(() => {
      show.style.opacity = "1";
    });

  }, 500);
}

openButton.addEventListener("click", () => {
  flash.style.opacity = "1";

  setTimeout(() => {
    flash.style.opacity = "0";
    switchPage(page2, page1);
  }, 300);
});

artwork.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

backButton.addEventListener("click", () => {
  switchPage(page1, page2);
});
