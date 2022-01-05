function solve(matrix) {
    let expectSum = 0;
    let flag = true;
    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == 0) {
                expectSum += matrix[row][col];
            } else {
                currentSum += matrix[row][col];
            }
        }
        if(expectSum !== currentSum && row > 0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        return console.log('true');
    }else{
        return console.log('false');
    }
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
);