function solve(input) {
    let mapOfQuantity = new Map();
    let mapOfCount = new Map();

    for (let i = 0; i < input.length; i++) {
        let [name, quantity] = input[i].split(' => ');
        quantity = (Number)(quantity);
        if (quantity >= 1000) {
            if (!mapOfQuantity.has(name)) {
                mapOfQuantity.set(name, quantity);
            } else {
                mapOfQuantity.set(name, mapOfQuantity.get(name) + quantity);
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        let [name, quantity] = input[i].split(' => ');
        quantity = (Number)(quantity);
        if (quantity < 1000) {
            if (!mapOfQuantity.has(name)) {
                mapOfQuantity.set(name, quantity);
            } else {
                mapOfQuantity.set(name, mapOfQuantity.get(name) + quantity);
            }
        }
    }

    for (let [key, value] of mapOfQuantity) {
        if (value >= 1000) {
            while (value >= 1000) {
                if (!mapOfCount.has(key)) {
                    mapOfCount.set(key, 1);
                } else {
                    mapOfCount.set(key, mapOfCount.get(key) + 1);
                }
                value -= 1000;
            }
        }
    }

    for (const [key, value] of mapOfCount) {
        console.log(key + ' => ' + value);
    }

}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

);
