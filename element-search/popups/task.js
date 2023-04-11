const popupClose = document.getElementsByClassName("modal__close_times");
let firstCross = popupClose.item(0);
let secondCross = popupClose.item(1);
const popup = document.getElementById("modal_main");
const button = document.getElementsByClassName("show-success").item(0);

function clickAction () {
   popup.classList.remove("modal_active");
}

function clickAction2 () {
   button.classList.remove("btn_danger");
   button.classList.add("btn_success");
}

popup.classList.add("modal_active");
firstCross.onclick = clickAction;
secondCross.onclick = clickAction;
button.onclick = clickAction2;