const addButton = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const idNum = document.getElementById("user_id");

const xhr = new XMLHttpRequest();

addButton.addEventListener("click", (event) => {
   event.preventDefault();
   xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
   const formData = new FormData (form);
   xhr.send(formData);   
})

xhr.addEventListener("readystatechange", () => {
   if (xhr.readyState === xhr.DONE) {
      let parsedData = JSON.parse(xhr.responseText);
      if (parsedData.success === false) {
         alert("Неверный логин/пароль");
         return false;
      }
      localStorage.setItem("id", parsedData.user_id);
      idNum.innerText = localStorage.getItem("id");
      form.parentElement.classList.remove("signin_active");
      idNum.parentElement.classList.add("welcome_active");
   }
})

