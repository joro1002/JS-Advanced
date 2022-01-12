function search() {
   let textElement = document.getElementById('searchText');
   let townElements = Array.from(document.querySelectorAll('ul li'));
   let resultElement = document.getElementById('result');

   let count = 0;
   for (const iterator of townElements) {
      if (iterator.innerHTML.includes(textElement.value)) {
         count++;
         iterator.style.fontWeight = "bold";
         iterator.style.textDecoration = "underline";
      }
   }

   resultElement.textContent = count + " matches found";
}

