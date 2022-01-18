function solve() {
   let addProductButtons = document.querySelectorAll(".add-product");
   let textArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector(".checkout");
   let sum = 0;
   let items = [];

   for (const add of addProductButtons) {
      add.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;

         let currentTittle = currentProductElement.querySelector(".product-title").textContent;
         let currentPrice = Number(currentProductElement.querySelector(".product-line-price").textContent);
         sum += currentPrice;

         items.push(currentTittle);

         textArea.textContent += `Added ${currentTittle} for ${currentPrice.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButton.addEventListener('click', () => {
      let uniqueItems = items.filter((v, i, a) => a.indexOf(v) === i);
      textArea.textContent += `You bought ${uniqueItems.join(", ")} for ${sum.toFixed(2)}.`;
   })
}