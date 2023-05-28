const textArea = document.getElementById("editor");
const clearBtn = document.getElementById("clear__btn");

window.onload = (e) => {
   textArea.value = localStorage.getItem("text");
}

textArea.addEventListener("input", () => {
   localStorage.setItem("text", textArea.value);
})

clearBtn.addEventListener ("click", (e) => {
   e.preventDefault();
   textArea.value = "";
})

