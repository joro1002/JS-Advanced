function generateReport() {
    let checkBoxesElements = document.querySelectorAll('table thead tr th input');
    let rowsElements = document.querySelectorAll('tbody tr');

    let arr = [];

    for (let index = 0; index < rowsElements.length; index++) {
        let obj = {};

        let values = Array.from(rowsElements[index].querySelectorAll('tbody tr td')).map(e => e.textContent);
        for (let i = 0; i < checkBoxesElements.length; i++) {
            if (checkBoxesElements[i].checked) {
                obj[checkBoxesElements[i].name] = values[i];
            }
        }
        arr.push(obj);
    }
    let output = document.getElementById("output");
    output.value = JSON.stringify(arr, null, 2);
}