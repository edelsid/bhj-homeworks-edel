const addButton = document.getElementById("tasks__add")
const textArea = document.getElementById("task__input");
const listArea = document.getElementById("tasks__list");

addButton.addEventListener("click", pressAction);
textArea.addEventListener("keyup", pressAction);

function pressAction(event) {
   event.preventDefault();
   if (event.type === "click" || event.key === "Enter") {
      orig = textArea.value.trim();
      if (orig === "") {
      textArea.value = "";
      return false;
      }
      listArea.insertAdjacentHTML("beforeend", 
         `<div class="task">
         <div class="task__title">`+textArea.value+
         `</div>
         <a href="#" class="task__remove">&times;</a>
         </div>`);
      textArea.value = "";
      const removeButton = listArea.lastChild.querySelector(".task__remove");
      removeButton.addEventListener("click", removeAction)
      
      function removeAction (event) {
         event.preventDefault();
         console.log('1');
         this.parentElement.remove();
      }   
   } 
}
