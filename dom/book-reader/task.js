const small = document.querySelector(".font-size_small");
const big = document.querySelector(".font-size_big");
const allSizes = document.querySelectorAll(".font-size");
let allSizesArr = Array.from(allSizes);
const medium = allSizes[1];

for (i = 0; i < allSizesArr.length; i++) {
   allSizesArr[i].addEventListener("click", clickRemove);
}
small.addEventListener("click", clickReduce);
big.addEventListener("click", clickEnlarge);
medium.addEventListener("click", clickDefault);

function clickRemove (event) {
   event.preventDefault;
   allSizesArr.forEach ((el) => {
      el.classList.remove("font-size_active");
   });
}

function clickReduce (event) {
   small.classList.add("font-size_active");
   if (big.closest(".book").classList.contains("book_fs-big")) {
      big.closest(".book").classList.remove("book_fs-big");
   }
   small.closest(".book").classList.add("book_fs-small");
   event.preventDefault();
} 

function clickEnlarge (event) {
   big.classList.add("font-size_active");
   if (big.closest(".book").classList.contains("book_fs-small")) {
      big.closest(".book").classList.remove("book_fs-small");
   }
   big.closest(".book").classList.add("book_fs-big");
   event.preventDefault();
} 

function clickDefault (event) {
   event.preventDefault();
   medium.classList.add("font-size_active");
   medium.closest(".book").classList.remove("book_fs-small", "book_fs-big");
} 

