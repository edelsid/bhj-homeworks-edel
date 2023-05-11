const helpPoints = document.querySelectorAll(".has-tooltip");
const workArea = document.querySelector("body");

for (let i = 0; i < helpPoints.length; i++) {
   helpPoints[i].addEventListener("click", (event) => {
      event.preventDefault();
      if (workArea.innerHTML.includes("tooltip_active")) {
         const activeTip = document.querySelector(".tooltip_active");
         activeTip.classList.remove("tooltip_active");

         if (workArea.innerHTML.includes("tooltip_active") === false &&
            helpPoints[i].nextElementSibling != null && 
            helpPoints[i].nextElementSibling.classList.contains("tooltip") &&
            helpPoints[i] != activeTip.previousElementSibling) {
            helpPoints[i].nextElementSibling.classList.add("tooltip_active");
         } else if (workArea.innerHTML.includes("tooltip_active") === false &&
            helpPoints[i] != activeTip.previousElementSibling) {
            helpPoints[i].insertAdjacentHTML("afterend", 
               `<div class="tooltip" style="left: `+helpPoints[i].getBoundingClientRect().left+`px; top: `+helpPoints[i].getBoundingClientRect().bottom+`px">`+
               helpPoints[i].title+
               `</div>`);

            const tip = helpPoints[i].parentElement.querySelector(".tooltip");
            tip.classList.add("tooltip_active");
         }

         return false;

      } else if (helpPoints[i].nextElementSibling != null && helpPoints[i].nextElementSibling.classList.contains("tooltip")) {
         helpPoints[i].nextElementSibling.classList.add("tooltip_active");
         return false;
      }

      helpPoints[i].insertAdjacentHTML("afterend", 
         `<div class="tooltip" style="left: `+helpPoints[i].getBoundingClientRect().left+`px; top: `+helpPoints[i].getBoundingClientRect().bottom+`px">`+
         helpPoints[i].title+
         `</div>`);
      const tip = helpPoints[i].parentElement.querySelector(".tooltip");
      tip.classList.add("tooltip_active");
   });
}

