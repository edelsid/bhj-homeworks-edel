const counter1 = document.getElementById("dead");
const counter2 = document.getElementById("lost");
let winCounter = Number(counter1.textContent);
let lossCounter = Number(counter2.textContent);

getHole = index => document.getElementById(`hole${index}`);

for (i = 1; i < 10; i++) {
   let hole = getHole(i);
   hole.onclick = clickAction;

   function clickAction () {
      console.log (hole);
      if (hole.className.includes( 'hole_has-mole' )) {
         winCounter = ++winCounter;
         dead.textContent = winCounter;
      } else {
         lossCounter = ++lossCounter;
         lost.textContent = lossCounter;
      }
      if (winCounter === 10) {
         console.log ('win');
         winCounter = 0;
         dead.textContent = winCounter;
      }
      if (lossCounter === 5) {
         console.log ('loss');
         lossCounter = 0;
         lost.textContent = lossCounter;
      }
   }   
}



