function solve() {
    let recipientElement = document.getElementById("recipientName");
    let titleElement = document.getElementById("title");
    let messageElement = document.getElementById('message');
    let listMailsElement = document.querySelector('.list-mails #list');
    let sendMailsElement = document.querySelector('.sent-mails .sent-list');
    let deleteEl = document.querySelector('.trash .delete-list');

    let buttonAddElement = document.getElementById('add');
    let buttonResetElement = document.getElementById('reset');

    let recipientElementSave = '';
    let titleElementSave = '';
    buttonAddElement.addEventListener('click', function(e){
        e.preventDefault();
        if(!recipientElement.value || !titleElement.value || !messageElement.value){
            return;
        }
        
        let liElement = document.createElement('li');

        let h4FirstElement = document.createElement('h4');
        let h4SecondElement = document.createElement('h4');
        h4FirstElement.textContent = 'Title: ' + titleElement.value;
        h4SecondElement.textContent = 'Recipient Name: ' + recipientElement.value;

        let spanElement = document.createElement('span');
        spanElement.textContent = messageElement.value;

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let buttonFirstElement = document.createElement('button');
        buttonFirstElement.setAttribute('type','submit');
        buttonFirstElement.setAttribute('id', 'send');
        buttonFirstElement.textContent = "Send";

        let buttonSecondElement = document.createElement('button');
        buttonSecondElement.setAttribute('type','submit');
        buttonSecondElement.setAttribute('id', 'delete');
        buttonSecondElement.textContent = "Delete";

        divElement.appendChild(buttonFirstElement);
        divElement.appendChild(buttonSecondElement);

        liElement.appendChild(h4FirstElement);
        liElement.appendChild(h4SecondElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);

        listMailsElement.appendChild(liElement);
        recipientElementSave = recipientElement.value;
        titleElementSave = titleElement.value;

        recipientElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        buttonSecondElement.addEventListener('click', function(e){
            let createliEl = document.createElement('li');

            let createSpanEl = document.createElement('span');
            createSpanEl.textContent = 'To: ' + recipientElementSave;

            let createSpanElSecond = document.createElement('span');
            createSpanElSecond.textContent = 'Title: ' + titleElementSave;

            createliEl.appendChild(createSpanEl);
            createliEl.appendChild(createSpanElSecond);

            deleteEl.appendChild(createliEl);
            liElement.remove();
        });

        buttonFirstElement.addEventListener('click', function(e){
            let createLiElement = document.createElement('li');

            let createSpanFirstEl = document.createElement('span');
            createSpanFirstEl.textContent = 'To: ' + recipientElementSave;
    
            let createSpanSecondEl = document.createElement('span');
            createSpanSecondEl.textContent = 'Title: ' + titleElementSave;
    
            let divEl = document.createElement('div');
            divEl.setAttribute('id', 'btn');
    
            let btnEl = document.createElement('button');
            btnEl.setAttribute('type', 'submit');
            btnEl.setAttribute('class', 'delete');
            btnEl.textContent = 'Delete';
            divEl.appendChild(btnEl);

            btnEl.addEventListener('click', function(e){
                let createliEl = document.createElement('li');

                let createSpanEl = document.createElement('span');
                createSpanEl.textContent = 'To: ' + recipientElementSave;
    
                let createSpanElSecond = document.createElement('span');
                createSpanElSecond.textContent = 'Title: ' + titleElementSave;
    
                createliEl.appendChild(createSpanEl);
                createliEl.appendChild(createSpanElSecond);
    
                deleteEl.appendChild(createliEl);
                createLiElement.remove();
            });
    
            createLiElement.appendChild(createSpanFirstEl);
            createLiElement.appendChild(createSpanSecondEl);
            createLiElement.appendChild(divEl);
    
            sendMailsElement.appendChild(createLiElement);
            liElement.remove();
        });
    });

    buttonResetElement.addEventListener('click', function(e){
        recipientElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    });
}
solve()