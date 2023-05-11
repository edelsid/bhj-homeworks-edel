const tab = document.querySelector(".chat-widget");
const messagesArea = document.querySelector(".chat-widget__messages");
const textArea = document.querySelector(".chat-widget__input");
let messageSet = [
   "Печатайте громче",
   "Добрый день. До свидания!",
   "С вами свяжется наш оператор. Время ожидания: примерно 1 вечность",
   "Вы точно туда попали?",
   "С вами неинтересно"
];

tab.addEventListener("click", () => {
   tab.classList.add("chat-widget_active");
});

textArea.addEventListener("keypress", (event) => {
   if (event.key === "Enter" && textArea.value != "") {
      if (textArea.value.match(/^[ ]+$/)) { 
         textArea.value = "";
         return false;
      }
      let now = new Date();
      let time = now.getHours() + ":" + now.getMinutes();
      if (now.getMinutes() < 10) {
         time = now.getHours() + ":0" + now.getMinutes();
      }
      let response = messageSet[Math.floor(Math.random()*messageSet.length)];
      messagesArea.innerHTML += 
      `<div class="message message_client">
         <div class="message__time">`+time+`</div>
         <div class="message__text">`+textArea.value+`</div>
      </div>
      <div class="message">
         <div class="message__time">`+time+`</div>
         <div class="message__text">`+response+`</div>
      </div>
      `;
      textArea.value = "";
   }
})

