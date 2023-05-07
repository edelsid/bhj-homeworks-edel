const allPoints = document.querySelectorAll(".interest__check");
let pointsArr = Array.from(allPoints);


for (let i = 0; i < pointsArr.length; i++) {
   if (pointsArr[i].closest(".interests").closest(".interest") != null) {
      let mainPoint = pointsArr[i].closest(".interests").closest(".interest").querySelector(".interest__check");
      if (mainPoint.getAttribute("eventActive") != "true") {
         mainPoint.addEventListener("change", clickAction);
         mainPoint.setAttribute("eventActive", "true");

         function clickAction () {
            const subPoints = mainPoint.closest(".interest").querySelector(".interests_active").querySelectorAll(".interest");
            let subPointsArr = Array.from(subPoints);
            for (i = 0; i < subPointsArr.length; i++) {
               if (mainPoint.checked === true) {
                  subPointsArr[i].querySelector(".interest__check").checked = true;
               } else if (mainPoint.checked === false) {
                  subPointsArr[i].querySelector(".interest__check").checked = false;
               }               
            }
         }
      }
   } 
}

