const modalBtn = document.querySelector("#modal-btn");
const modalClose = document.querySelector(".modal-close");
const modalBg = document.querySelector(".modal-bg");

modalBtn.addEventListener( "click", () => {
    modalBg.classList.add("modal-bg-active");
})

modalClose.addEventListener("click", () => {
    modalBg.classList.remove("modal-bg-active");
})