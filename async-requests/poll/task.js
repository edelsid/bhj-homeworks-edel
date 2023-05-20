const pollHeader = document.getElementById("poll__title");
const pollOptions = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

xhr.addEventListener("readystatechange", () => {
   if (xhr.readyState === xhr.DONE) {
      let parsedData = JSON.parse(xhr.responseText);
      pollHeader.innerText = parsedData.data.title;
      for (let i = 0; i < parsedData.data.answers.length; i++) {
         pollOptions.insertAdjacentHTML("beforeend", 
            `<button class="poll__answer">`+
            parsedData.data.answers[i]+
            `</button>`)
      };
      let answers = Array.from(document.getElementsByTagName("button"));
      console.log(answers);
      for (let i = 0; i < answers.length; i++) {
         answers[i].addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
         })
      }
   }
});