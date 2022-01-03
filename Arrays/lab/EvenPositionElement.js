function solve(numbers) {
    let evenNumbers = '';
    for (let index = 0; index < numbers.length; index++) {
        if (index % 2 == 0) {
            evenNumbers += numbers[index] + ' ';
        }

    }
    console.log(evenNumbers);
}

solve(['20', '30', '40', '50', '60']);