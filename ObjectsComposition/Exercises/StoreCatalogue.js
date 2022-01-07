function solve(arr) {
    let store = {};
    for (const iterator of arr) {
        let [productName, productPrice] = iterator.split(" : ");

        productPrice = Number(productPrice);
        let initial = productName[0].toUpperCase();

        if (store[initial] === undefined) {
            store[initial] = {};
        }
        store[initial][productName] = productPrice;
    }
    let initialSort = Object.keys(store).sort((a, b) => a.localeCompare(b));
    let result = [];

    for (const key of initialSort) {
        let products = Object.entries(store[key])
            .sort((a, b) => a[0].localeCompare(b[0]));

        result.push(key);

        let productAsString = products.map(x => `  ${x[0]}: ${x[1]}`).join('\n');
        result.push(productAsString);
    }
    return result.join('\n');
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));