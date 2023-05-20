const loader = document.getElementById("loader");
const textSpace = document.getElementById("items");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
   if (xhr.readyState === xhr.DONE) {
      let parsedData = JSON.parse(xhr.responseText);
      Object.keys(parsedData.response.Valute).forEach((i) => {
         textSpace.insertAdjacentHTML("beforeend", 
            `<div class="item">
            <div class="item__code">`+
            parsedData.response.Valute[i].CharCode+
            `</div>
            <div class="item__value">`+
            parsedData.response.Valute[i].Value+
            `</div>
            <div class="item__currency">
            руб.
            </div>
            </div>`);
      })
      loader.classList.remove("loader_active");
   }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.send();

