const arrowRight = document.querySelector(".slider__arrow_next");
const arrowLeft = document.querySelector(".slider__arrow_prev");
const images = document.getElementsByClassName("slider__item");
let imageArr = Array.from(images);

function clickRight () {
   let findSlide = (slide) => slide.className.includes("slider__item_active");
   let imageCount = imageArr.findIndex(findSlide);  
   imageArr[imageCount].classList.remove("slider__item_active");
   imageCount = imageCount + 1;
   if (imageCount === imageArr.length) {
      imageCount = 0;
   }
   imageArr[imageCount].classList.add("slider__item_active");           
}

function clickLeft () {
   let findSlide = (slide) => slide.className.includes("slider__item_active");
   let imageCount = imageArr.findIndex(findSlide);  
   imageArr[imageCount].classList.remove("slider__item_active");
   imageCount = imageCount - 1;
   if (imageCount === -1) {
      imageCount = imageArr.length-1;
   }
   imageArr[imageCount].classList.add("slider__item_active");         
}

arrowRight.onclick = clickRight;
arrowLeft.onclick = clickLeft;
