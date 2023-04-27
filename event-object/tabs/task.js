const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");
let tabArray = Array.from(tabs);
let contentArray = Array.from(tabContent);

for (let i = 0; i < tabArray.length; i++) {
   let activeTab = tabArray[i];
   activeTab.addEventListener("click", clickAction);

   function clickAction () {
      tabArray.forEach ((el) => {
         el.classList.remove("tab_active")
      });
      activeTab.classList.toggle("tab_active");
      let tabIndex = tabArray.indexOf (activeTab);
      contentArray.forEach ((el) => {
         el.classList.remove("tab__content_active")
      });
      let activeContent = contentArray[tabIndex];
      activeContent.classList.toggle("tab__content_active");
      }   
   }
   
