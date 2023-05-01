const ads = document.querySelectorAll(".reveal");
let adsArray = Array.from(ads);
let visible;

function showAd (event) {
   for (let i = 0; i < adsArray.length; i++) {

   const {top, bottom} = adsArray[i].getBoundingClientRect();
   if (bottom < 0) {
      visible = false;
   }
   if (top > window.innerHeight) {
      visible = false;
   } else {
      visible = true;
   }   

   if (visible === true) {
      adsArray[i].classList.add("reveal_active");
   } else if (visible === false && adsArray[i].classList.contains("reveal_active")) {
      adsArray[i].classList.remove("reveal_active");
   }} 
}

window.addEventListener ("scroll", showAd);