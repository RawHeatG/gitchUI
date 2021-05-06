//modal

const modalBtn = document.querySelector("#modal-btn");
const modalClose = document.querySelector(".modal-close");
const modalBg = document.querySelector(".modal-bg");

modalBtn.addEventListener( "click", () => {
    modalBg.classList.add("modal-bg-active");
})

modalClose.addEventListener("click", () => {
    modalBg.classList.remove("modal-bg-active");
})

//toast

const toast = document.querySelector(".toast");
const toastSuccess = document.querySelector(".toast-success");
const toastWarning = document.querySelector(".toast-warning");
const toastError = document.querySelector(".toast-error");
const toastInfo = document.querySelector(".toast-info");

const toastTrigger = document.querySelector("#toast-trigger");
const toastSuccessTrigger = document.querySelector("#toast-success-trigger");
const toastWarningTrigger = document.querySelector("#toast-warning-trigger");
const toastErrorTrigger = document.querySelector("#toast-error-trigger");
const toastInfoTrigger = document.querySelector("#toast-info-trigger");

const toaster = (btnType) => {
    console.log(btnType)
        btnType.classList.add("toast-active");
        setTimeout(() => { btnType.classList.remove("toast-active") }, 3000);
    }

toastTrigger.addEventListener("click", () => toaster(toast))
toastSuccessTrigger.addEventListener("click", () => toaster(toastSuccess))
toastWarningTrigger.addEventListener("click", () => toaster(toastWarning))
toastErrorTrigger.addEventListener("click", () => toaster(toastError))
toastInfoTrigger.addEventListener("click", () => toaster(toastInfo))


