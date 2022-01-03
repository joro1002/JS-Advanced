function solve(matrix){
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let startIndex = 0;
    let endIndex = matrix[0].length - 1;
    
    matrix.forEach(arr => {
        firstDiagonalSum += arr[startIndex];
        startIndex++;
        secondDiagonalSum += arr[endIndex];
        endIndex--;
    });

    console.log(firstDiagonalSum + ' ' + secondDiagonalSum);
}

solve([[20, 40],
    [10, 60]]
   );