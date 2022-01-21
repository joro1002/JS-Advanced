function solve() {
    let [name, hall, ticketPrice] = document.querySelectorAll("#container input");
    let onScreenButtonElement = document.querySelector('#container button');
    let moviesOnScreenElement = document.querySelector("#movies ul");
    let archieveElement = document.querySelector('#archive ul');
    let archiveButtonElement = document.querySelector('#archive button');

    onScreenButtonElement.addEventListener('click', onScreen);

    let nameOriginal = '';
    let ticketPriceOriginal = 0;

    function onScreen(e) {
        e.preventDefault();
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = name.value;
            nameOriginal = name.value;
            liElement.appendChild(spanElement);

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hall.value}`;
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');

            let strongEl = document.createElement('strong');
            strongEl.textContent = (Number(ticketPrice.value).toFixed(2));
            ticketPriceOriginal = ticketPrice.value;
            divElement.appendChild(strongEl);

            let inputElement = document.createElement('input');
            inputElement.placeholder = "Tickets Sold";
            inputElement.id = 'ticketsSold';
            divElement.appendChild(inputElement);

            let buttonElement = document.createElement("button");
            buttonElement.textContent = "Archive";
            buttonElement.addEventListener('click', archieve);
            divElement.appendChild(buttonElement);

            liElement.appendChild(divElement);
            moviesOnScreenElement.appendChild(liElement);
        }
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
    }

    function archieve(e) {
        let ticketSoldElement = document.getElementById('ticketsSold');

        if (ticketSoldElement.value !== "" && !isNaN(Number(ticketSoldElement.value))) {
            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = nameOriginal;
            liElement.appendChild(spanElement);

            let strongElement = document.createElement('strong');
            let sum = ticketPriceOriginal * ticketSoldInput.value;
            strongElement.textContent = `Total amount: ${sum.toFixed(2)}`;
            liElement.appendChild(strongElement);

            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = "Delete";
            liElement.appendChild(buttonDelete);

            archieveElement.appendChild(liElement);

            e.target.parentElement.parentElement.remove();
            buttonDelete.addEventListener('click', e=>{
                e.currentTarget.parentElement.remove();
            })

            archiveButtonElement.addEventListener('click', e => {
                e.preventDefault();

                let li = (e.currentTarget.parentElement.children[1].children);
                
                for (const el of li) {
                    el.remove();
                }
            })
            
        }
        ticketSoldElement.value = '';
    }
}