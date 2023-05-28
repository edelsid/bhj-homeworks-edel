const popupClose = document.getElementsByClassName("modal__close_times");
const popup = document.getElementById("subscribe-modal");

window.onload = (e) => {
   if (!document.cookie.includes ("closed=true")) {
      popup.classList.add("modal_active");
   }
}

function clickAction () {
   popup.classList.remove("modal_active");
   document.cookie = "closed=" + encodeURIComponent("true");
   console.log(document.cookie);
}

popupClose.item(0).onclick = clickAction;