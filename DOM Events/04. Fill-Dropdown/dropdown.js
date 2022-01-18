function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');

    let createOp = document.createElement('option');
    createOp.textContent = textElement.value;
    createOp.value = valueElement.value;

    menuElement.appendChild(createOp);

    textElement.value = '';
    valueElement.value = '';
}