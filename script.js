const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const container = document.querySelector(".container");
const yesContainer = document.querySelector("#yes-container");
const gif = document.getElementById("gif");

noButton.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.random() * (windowWidth - noButton.offsetWidth);
  const randomY = Math.random() * (windowHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
  container.style.display = "none";

  yesContainer.style.display = "flex";
  yesContainer.classList.add("fade-in");
});
