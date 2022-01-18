function solve() {
  let [firstArea, secondArea] = Array.from(document.querySelectorAll('textarea'));
  let [generate, buy] = Array.from(document.querySelectorAll('button'));
  let table = document.querySelector('.table tbody');

  generate.addEventListener('click', generateBtn);
  buy.addEventListener('click', buyBtn);

  function generateBtn(e) {
    let items = JSON.parse(firstArea.value);

    for (const item of items) {
      let trElement = document.createElement('tr');

      let tdImgElement = document.createElement('td');
      let tdNameElement = document.createElement('td');
      let tdPriceElement = document.createElement('td');
      let tdFactorElement = document.createElement('td');
      let tdMarkElement = document.createElement('td');

      let photo = document.createElement('img');
      photo.src = item.img;
      tdImgElement.appendChild(photo);

      let name = document.createElement('p');
      name.textContent = item.name;
      tdNameElement.appendChild(name);

      let price = document.createElement('p');
      price.textContent = item.price;
      tdPriceElement.appendChild(price);

      let factor = document.createElement('p');
      factor.textContent = item.decFactor;
      tdFactorElement.appendChild(factor);

      let mark = document.createElement('input');
      mark.type = 'checkbox';
      tdMarkElement.appendChild(mark);

      trElement.appendChild(tdImgElement);
      trElement.appendChild(tdNameElement);
      trElement.appendChild(tdPriceElement);
      trElement.appendChild(tdFactorElement);
      trElement.appendChild(tdMarkElement);

      table.appendChild(trElement);
    }
  }

  function buyBtn(e) {
    let filterElements = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(e => e.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: r.children[2].textContent,
        decFactor: r.children[3].textContent
      }));

    let names = [];
    let total = 0;
    let decFactorSum = 0;

    for (const currnetElement of filterElements) {
      names.push(currnetElement.name);
      total += Number(currnetElement.price);
      decFactorSum += Number(currnetElement.decFactor);
    }

    secondArea.value += 'Bought furniture: ' + names.join(', ') + '\n';
    secondArea.value += 'Total price: ' + total.toFixed(2) + '\n';
    secondArea.value += 'Average decoration factor: ' + decFactorSum / names.length;
  }
}