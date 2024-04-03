const img1 = document.querySelectorAll("img");
const divOpen = document.querySelector(".open__lightbox");
const popupBackground = document.querySelector(".div__popup");
const close = document.querySelector(".png");
const closeButton = document.querySelector("button");
///
img1.forEach((el) => {
    el.addEventListener("click", (e) => {
        popupBackground.classList.add("div__background");
        divOpen.classList.add("image__open__popup");
        divOpen.style.background = `url(${el.src}) no-repeat center/cover`;
    });
});
closeButton.addEventListener("click", () => {
    popupBackground.classList.remove("div__background");
    divOpen.classList.remove("image__open__popup");
});