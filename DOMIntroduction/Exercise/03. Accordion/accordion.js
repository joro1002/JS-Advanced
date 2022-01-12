function toggle() {
    let textElement = document.getElementById('extra');
    let buttonElement = document.querySelector('.button');

    buttonElement.textContent = buttonElement.textContent == 'More' ? 'Less' : 'More';

    textElement.style.display =
        textElement.style.display == "none" || textElement.style.display == ""
            ? textElement.style.display = "block" : textElement.style.display = "none";
}

