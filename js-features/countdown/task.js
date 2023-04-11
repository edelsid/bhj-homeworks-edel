const counter = document.getElementById("timer");
let trueCounter = counter.textContent;

let countingDown = setInterval (() => {
   trueCounter = trueCounter - 1; 
   timer.textContent = trueCounter;

   if (trueCounter === 0) {
      clearTimeout (countingDown);
      alert('Вы победили в конкурсе!');
   }
}, 
1000)

