function solve(matrix){
    let maxElement = Number.MIN_SAFE_INTEGER;
  
    matrix.forEach(row => {
        let currentMax = Math.max(...row);
        if(maxElement < currentMax){
            maxElement = currentMax;
        }
    });
    return maxElement
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));