const menuLinks = document.querySelectorAll(".menu__link");
let menuArray = Array.from(menuLinks);

for (let i = 0; i < menuArray.length; i++) {
   let currentMenu = menuArray[i];
   currentMenu.onclick = clickAction;
   
   function clickAction () {      
      let currentMenuHasSubmenu = currentMenu.closest(".menu__item").querySelector(".menu_sub");
      if (currentMenuHasSubmenu != null) {
      currentMenuHasSubmenu.classList.toggle("menu_active");
      return false;
      }      
   }
}