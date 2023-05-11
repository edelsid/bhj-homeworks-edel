const textArea = document.getElementById("task__input");
const listArea = document.getElementById("tasks__list");

textArea.addEventListener("keypress", pressAction);

function pressAction(event) {
   if (event.key === "Enter" && textArea.value != "") {
      event.preventDefault();
      if (textArea.value.match(/^[ ]+$/)) { 
         textArea.value = "";
         return false;
      }
      listArea.insertAdjacentHTML("beforeend", 
      `<div class="task">
      <div class="task__title">`+textArea.value+
      `</div>
      <a href="https://ya.ru" class="task__remove">&times;</a>
      </div>`);
      textArea.value = "";
      const taskCount = listArea.querySelectorAll(".task");
      for (let i = 0; i < taskCount.length; i++){
         if (taskCount[i].querySelector(".task__remove").hasAttribute("eventActive") === false)  {
            taskCount[i].querySelector(".task__remove").addEventListener("click", (event) => {
               event.preventDefault();
               listArea.removeChild(taskCount[i]);
            });
            taskCount[i].querySelector(".task__remove").setAttribute("eventActive", true);
         }         
      }
   }
}
