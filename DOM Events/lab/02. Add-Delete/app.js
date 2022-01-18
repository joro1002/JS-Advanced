function addItem() {
    let items = document.getElementById("items");
    let newElement = document.getElementById("newItemText");

    let createLi = document.createElement("li");
    createLi.textContent = newElement.value;
   
    let deleteButton = document.createElement("a");
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = "[Delete]";
    
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    createLi.appendChild(deleteButton);
    items.appendChild(createLi);


    newElement.value = '';
}