function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allElements = Array.from(document.querySelectorAll('tbody tr'));
      let textInput = document.getElementById("searchField");

      let text = textInput.value.toLowerCase();

      allElements.forEach(e => {
         if(e.textContent.toLocaleLowerCase().includes(text)){
            e.classList.add("select");
         }else{
            e.classList.remove("select");
         }
      })

      textInput.value = '';
   }
}