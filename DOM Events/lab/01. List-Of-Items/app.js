function addItem() {
    let items = document.getElementById("items");
    let newItemElement = document.getElementById("newItemText");

    let newLiElement = document.createElement("li");
    newLiElement.textContent = newItemElement.value;
    items.appendChild(newLiElement);
    newItemElement.value = '';
}