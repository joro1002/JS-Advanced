function create(words) {
   let content = document.getElementById('content');

   for (const word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', reveal);
      content.appendChild(divElement);
   }

   function reveal(e){
      console.log(e.target);
      e.target.children[0].style.display = '';
   }
}