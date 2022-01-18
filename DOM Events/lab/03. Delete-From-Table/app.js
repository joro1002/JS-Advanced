function deleteByEmail() {
    let imeil = document.getElementsByName("email")[0].value;
    let secondColum = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (const td of secondColum) {
        if(td.textContent == imeil){
            let row = td.parentNode;
            row.parentNode.removeChild(row);

            document.getElementById("result").textContent = "Deleted.";
            return;
        }
        document.getElementById("result").textContent = "Not found.";
    }

}