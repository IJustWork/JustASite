const centered = document.querySelector(".centered");
const behind = document.querySelector(".behind");

let animating = false;

centered.addEventListener("mouseenter", () => {
    if (!animating) {
        animating = true;
        centered.style.transform = "scale(1.2)";
    }
});

centered.addEventListener("transitionend", () => {
    animating = false;
    centered.style.transform = "scale(1)";
    centered.style.top = getRandomPosition() + "px";
    centered.style.left = getRandomPosition() + "px";
});

behind.addEventListener("mouseenter", () => {
    centered.dispatchEvent(new Event("mouseenter"));
});

behind.addEventListener("mouseleave", () => {
    centered.dispatchEvent(new Event("mouseleave"));
});

function getRandomPosition() {
    return Math.floor(Math.random() * (window.innerHeight - 200));
}