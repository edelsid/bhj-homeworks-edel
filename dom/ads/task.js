const ads = document.querySelectorAll(".rotator__case");
let adsArray = Array.from(ads);

let countingAds = setInterval (() => {
   let findAd = (ad) => ad.className.includes("rotator__case_active");
   let currentAd = adsArray.findIndex(findAd);
   adsArray[currentAd].classList.remove("rotator__case_active");
   currentAd = currentAd + 1;
   if (currentAd === adsArray.length) {
      currentAd = 0;
   }
   adsArray[currentAd].classList.add("rotator__case_active");
   }, 
1000)