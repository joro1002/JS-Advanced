function encodeAndDecodeMessages() {
    let getArea = Array.from(document.querySelectorAll('#main div textarea'));
    let buttons = Array.from(document.querySelectorAll('#main div button'));

    buttons[0].addEventListener('click', function (e) {
        let firstArea = e.target.parentElement.querySelector('textarea').value;
        let result = [...firstArea].map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        getArea[1].value = result;
        getArea[0].value = '';
    });

    buttons[1].addEventListener('click', function (e) {
        let secondArea = e.target.parentElement.querySelector('textarea').value;
        let result = [...secondArea].map(c => String.fromCharCode(c.charCodeAt(0) -1)).join('');
        getArea[1].value = '';
        getArea[1].value = result;
    })
}