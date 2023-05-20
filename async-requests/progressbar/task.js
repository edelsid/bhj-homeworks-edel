const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener ("submit", (event) => {
   event.preventDefault();
   const xhr = new XMLHttpRequest();

   xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
   const formData = new FormData (form);

   xhr.upload.addEventListener("progress", function(e) {
      progress.value = e.loaded / e.total;        
   })

   xhr.send(formData);
   
})


