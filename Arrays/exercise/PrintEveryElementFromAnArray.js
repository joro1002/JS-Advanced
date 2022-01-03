function solve(array, number){
    let output = [];
    
    for (let index = 0; index < array.length; index+=number) {
        let current = array[index];
        output.push(current);
    }
    return output;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));