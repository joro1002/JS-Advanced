function solve(input) {

    let obj = {};

    for (const current of input) {
        let [brand, model, producedCars] = current.split(' | ');

        obj[brand] = obj[brand] || {}
        obj[brand][model] = obj[brand][model] || 0
        obj[brand][model] += Number(producedCars);
    }
    return Object.entries(obj).map(([brand, models]) => `${brand}
${Object.entries(models)
            .map(([model, quantity]) => `###${model} -> ${quantity}`)
            .join('\n')}`).join('\n')
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))
