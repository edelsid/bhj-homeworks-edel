const plusButtons = document.querySelectorAll(".product__quantity-control_inc");
const minusButtons = document.querySelectorAll(".product__quantity-control_dec");
const cartSpace = document.querySelector(".cart__products");
const addButtons = document.querySelectorAll(".product__add");

for (let i = 0; i < plusButtons.length; i++) {
   plusButtons[i].addEventListener ("click", () => {
      ++plusButtons[i].parentElement.querySelector(".product__quantity-value").innerText;
   });
}

for (let i = 0; i < minusButtons.length; i++) {
   minusButtons[i].addEventListener ("click", () => {
      if (minusButtons[i].parentElement.querySelector(".product__quantity-value").innerText === "1") {
         return false;
      } 
      --minusButtons[i].parentElement.querySelector(".product__quantity-value").innerText;      
   });
}

for (let i = 0; i < addButtons.length; i++) {
   addButtons[i].addEventListener ("click", () => {
      let productInfo = addButtons[i].closest(".product");
      let productCount = plusButtons[i].parentElement.querySelector(".product__quantity-value").innerText;
      const addedProducts = cartSpace.querySelectorAll(".cart__product");

      for (let i = 0; i < addedProducts.length; i++){
         if (productInfo.dataset.id === addedProducts[i].dataset.id) {
            productInfo.dataset.count = Number(productCount) + Number(productInfo.dataset.count);
            addedProducts[i].querySelector(".cart__product-count").innerText = productInfo.dataset.count;
            return false;
         } 
      }
      
      productInfo.dataset.count = productCount;
      cartSpace.insertAdjacentHTML("beforeend", 
      `<div class="cart__product" data-id="`+productInfo.dataset.id+`">
      <img class="cart__product-image" src="`+productInfo.querySelector(".product__image").src+`">
      <div class="cart__product-count">`+productInfo.dataset.count+`</div>
      </div>`);
   });
}


