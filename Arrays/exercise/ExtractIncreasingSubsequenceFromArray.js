function solve(numbers) {
    let output = [];
    let firstNum = numbers[0];
    output.push(firstNum);
    for (let index = 0; index < numbers.length; index++) {
        let max = Math.max(...numbers);
        if(firstNum == max){
            break;
        }
        if (numbers[index] <= numbers[index + 1]) {
            output.push(numbers[index + 1]);
        }
    }
    return output;
}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
));