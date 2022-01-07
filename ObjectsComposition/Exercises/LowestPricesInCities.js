function solve(arr) {
    let products = {};

    for (const iterator of arr) {
        let[town, product, price] = iterator.split(' | ');
        price = Number(price);

        if(!products.hasOwnProperty(product)){
            products[product] = {};
        }
        products[product][town] = price;
    }

    let result = [];
    for (const key in products) {
        let townSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let theCheapestTown = townSorted[0];
        result.push(`${key} -> ${theCheapestTown[1]} (${theCheapestTown[0]})`);
    }
    return result.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));