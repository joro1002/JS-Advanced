function solve(numbers) {
    let sorted = numbers.sort((a, b) => a - b);

    let middle = Math.floor(sorted.length / 2);
    let result = sorted.slice(middle);
    return result;
}

console.log(solve([4, 7, 2, 5]));
