const popupClose = document.getElementsByClassName("modal__close_times");
const popup = document.getElementById("subscribe-modal");

window.onload = (e) => {
   if (document.cookie === "closed=true") {
      popup.classList.remove("modal_active");
   }
}

function clickAction () {
   popup.classList.remove("modal_active");
   document.cookie = "closed=" + encodeURIComponent("true");
   console.log(document.cookie);
}

popup.classList.add("modal_active");
popupClose.item(0).onclick = clickAction;