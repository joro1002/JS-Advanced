function sumTable() {
    let table = Array.from(document.querySelectorAll('td:nth-child(2)'));

    let sumElement = table.pop();

    let sum = table.reduce((a, x) => a + Number(x.textContent), 0);

    sumElement.textContent = sum;
}