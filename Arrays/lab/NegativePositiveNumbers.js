function solve(numbers) {
    let result = [];
   
   for (const num of numbers) {
       if(num < 0){
           result.unshift(num);
       }else{
           result.push(num);
       }
   }
   console.log(result);
}

solve([7, -2, 8, 9]);