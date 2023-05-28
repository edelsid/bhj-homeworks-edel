const addButton = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const idNum = document.getElementById("user_id");

const xhr = new XMLHttpRequest();

window.onload = (e) => {
   if (localStorage.getItem("id") != null) {
      idNum.innerText = localStorage.getItem("id");
      form.parentElement.classList.remove("signin_active");
      idNum.parentElement.classList.add("welcome_active")
   }
}

addButton.addEventListener("click", (event) => {
   event.preventDefault();
   xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
   xhr.responseType = "json";
   const formData = new FormData (form);
   xhr.send(formData); 
   form.reset();  
})

xhr.addEventListener("load", () => {
   let parsedData = xhr.response;
   if (parsedData.success === false) {
      alert("Неверный логин/пароль");
      return false;
   }
   localStorage.setItem("id", parsedData.user_id);
   idNum.innerText = localStorage.getItem("id");
   form.parentElement.classList.remove("signin_active");
   idNum.parentElement.classList.add("welcome_active");
})

