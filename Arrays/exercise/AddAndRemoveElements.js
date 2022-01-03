function solve(array){
    let number = 1;
    let output = [];
    for (const current of array) {
        if(current == 'add'){
            output.push(number);
            number++;
        }else{
          output.pop(number);
          number++;
        }
    }

    if(output.length == 0){
        console.log("Empty");
    }else{
        for (const current of output) {
            console.log(current);
        }
    }

}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);