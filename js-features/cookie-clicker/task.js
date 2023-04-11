const counter = document.getElementById("clicker__counter");
let trueCounter = Number(counter.textContent);
const image = document.getElementById("cookie");

function clickAction () {
   image.width = 300;

   let countingDown = setInterval (() => {
      image.width = 200;
      },
      500);

   trueCounter = ++trueCounter;
   clicker__counter.textContent = trueCounter;
}

image.onclick = clickAction;