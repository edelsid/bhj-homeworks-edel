const menuLink = document.querySelectorAll(".dropdown__value");
const submenuLinks = document.querySelectorAll(".dropdown__link");
let menuArray = Array.from(menuLink);
let submenuArray = Array.from(submenuLinks);

for (let i = 0; i < menuArray.length; i++) {
   let currentMenu = menuArray[i];
   currentMenu.addEventListener("click", clickAction);

   
   function clickAction () {
      let currentMenuHasSubmenu = currentMenu.closest(".dropdown").querySelector(".dropdown__list");      
      currentMenuHasSubmenu.classList.toggle("dropdown__list_active");
      }

   for (let i = 0; i < submenuArray.length; i++) {
      let currentSubmenu = submenuArray[i];
      currentSubmenu.addEventListener("click", clickAction1);

      function clickAction1 (event) {
         currentMenu.textContent = currentSubmenu.textContent;
         let currentMenuHasSubmenu = currentMenu.closest(".dropdown").querySelector(".dropdown__list");
         currentMenuHasSubmenu.classList.remove("dropdown__list_active");
         event.preventDefault();
         } 
      }
}
