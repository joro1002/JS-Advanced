function solve(numbers) {
    let sortNumber = numbers.sort((a, b) => a - b);
    let smallerNums = sortNumber.slice(0, 2);
    console.log(smallerNums);
}

solve([30, 15, 50, 5]);