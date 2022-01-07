function solve(arr) {
    const towns = {};
    for (const iterator of arr) {
        let token = iterator.split(' <-> ');
        let town = token[0];
        let population = Number(token[1]);

        if (towns[town] == undefined) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    }
    for (const key in towns) {
        console.log(key + ' : ' + towns[key]);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);